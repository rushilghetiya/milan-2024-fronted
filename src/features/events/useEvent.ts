/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
import { useToast } from "@/components/ui/use-toast";

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { registerForEventService } from "@/services/events";
import { IRegisterForEvent } from "@/Interface/events";

function useEvent() {
  // const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { toast } = useToast();
  const { mutate: registerForEvent, isPending: registerForEventLoading } =
    useMutation({
      mutationFn: async (reqObj: IRegisterForEvent) =>
        await registerForEventService(reqObj),
      onSuccess: (userData: any) => {
        if (
          userData?.success &&
          userData?.message_code === "REGISTER_SUCCESS"
        ) {
          toast({
            variant: "success",
            title: "Success",
            description: userData.message,
          });
        } else {
          toast({
            variant: "error",
            title: "Error",
            description: userData.message,
          });
        }
      },

      onError: (error: any) => {
        toast({
          variant: "error",
          title: "Error",
          description: "some error occured in staff verification mutation",
        });
        navigate("/");
        console.error(error);
      },
    });
  return {
    registerForEvent,
    registerForEventLoading,
  };
}

export default useEvent;
