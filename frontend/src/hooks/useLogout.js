import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //changing auth context to logged out
    dispatch({ type: "LOGOUT" });
    //removing user from storage
    localStorage.removeItem("user");
  };

  return { logout };
};
