import { useQuery } from "react-query";
import QueryKeys from "@/constants/QueryKeys";
import { request } from "@/utils/request";
import API from "@/constants/API";

export const useLogin = () => {
  return useQuery([QueryKeys.AUTH.LOGIN], async () => {
    return request({
      method: "post",
      url: API.AUTH.LOGIN,
    });
  });
};
