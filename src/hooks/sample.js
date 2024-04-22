import { useQuery } from "react-query";
import QueryKeys from "@/constants/QueryKeys";
import { request } from "@/utils/request";
import API from "@/constants/API";

export const useGetHotCoffee = () => {
  return useQuery([QueryKeys.SAMPLE.HOT_COFFEE], async () => {
    return request({
      method: "get",
      url: API.SAMPLE.HOT_COFFEE,
    });
  });
};
