import { api } from "@/lib/axios";
import { SuccessResponse } from "@/types";
import toast from "react-hot-toast";

export const postApi = {
   testPostApi: () =>
      api
         .get<SuccessResponse<string>>("/posts/test")
         .then((response) => ({
            data: response?.data,
            status: response.status,
         }))
         .catch((error) => {
            if (error.code === "ERR_NETWORK") {
               toast.error("Something Wrong!, Server down");
            }
            return {
               code: error.code,
               data: error?.response?.data,
            };
         }),
};
