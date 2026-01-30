import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/lib/api/auth-api";

export const useSignIn = () => {
  return useMutation({
    mutationKey: ["sign-in"],
    mutationFn: (address: string) => signIn(address),
  });
};
