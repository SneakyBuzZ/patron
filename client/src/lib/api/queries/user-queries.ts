import { useQuery } from "@tanstack/react-query";
import { getUser } from "../user-api";

export const useGetUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
};
