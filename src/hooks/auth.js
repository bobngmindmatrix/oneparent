import { useQuery } from "react-query";
import QueryKeys from "@/constants/QueryKeys";
import { request } from "@/utils/request";
import API from "@/constants/API";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { authAtom } from "@/store/atoms/authAtom";

export const useLogin = () => {
  return useQuery([QueryKeys.AUTH.LOGIN], async () => {
    return request({
      method: "post",
      url: API.AUTH.LOGIN,
    });
  });
};

export const useRequireLogin = () => {
  const auth = useRecoilValue(authAtom);
  const router = useRouter();

  useEffect(() => {
    if (!auth.isLogged) {
      router.replace(`/login`);
    }
  }, []);
};
