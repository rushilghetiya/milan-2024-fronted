/* eslint-disable @typescript-eslint/no-explicit-any */
import { registerForEventApi } from "@/APIs/users";
import { IRegisterForEvent } from "@/Interface/events";
import axios from "axios";



export const registerForEventService = async (reqObj:IRegisterForEvent) => {
  try {
    // const token: string = localStorage.getItem("token") || "";

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: registerForEventApi,
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
        data: reqObj
    };

    const result = await axios.request(config);
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};
