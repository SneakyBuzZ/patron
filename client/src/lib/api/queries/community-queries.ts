import { useQuery } from "@tanstack/react-query";
import { getAll } from "../community-api";

export const useGetAllCommunities = () => {
  return useQuery({
    queryKey: ["communities"],
    queryFn: getAll,
  });
};
