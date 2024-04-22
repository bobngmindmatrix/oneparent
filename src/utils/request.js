import axios from "@/utils/axios";
import queryString from "query-string";

const buildURL = (url, query) => {
  let _url = url;
  if (query) {
    _url += /\?/.test(url) ? `&` : `?`;
    if (typeof query === `object`) {
      _url += queryString.stringify(query);
    } else {
      _url += query;
    }
  }
  return _url;
};

async function request({
  method = `get`,
  url,
  query,
  params,
  headers,
  moreOptions = {},
}) {
  const axiosMethod = axios[method];
  if (typeof axiosMethod === `function`) {
    try {
      const result =
        method === `get` || method === `delete`
          ? await axiosMethod(buildURL(url, query), { headers, ...moreOptions })
          : await axiosMethod(buildURL(url, query), params, {
              headers,
              ...moreOptions,
            });

      let data = result?.data;

      if (result.status === 200 || result.status === 201) {
        return data;
      } else {
        throw new Error(JSON.stringify(result));
      }
    } catch (err) {
      console.error(err);
      if (err.response?.status === 401) {
        window.location = `/logout`;
      }
      throw err;
    }
  }
}
export { request };
