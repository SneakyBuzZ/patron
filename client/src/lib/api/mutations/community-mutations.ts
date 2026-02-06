import { useMutation } from "@tanstack/react-query";
import { create } from "../community-api";
import { CommunityCreateDTO } from "../dtos/community-dto";

export const useCreateCommunity = () => {
  return useMutation({
    mutationKey: ["create-community"],
    mutationFn: (data: CommunityCreateDTO) => create(data),
  });
};
