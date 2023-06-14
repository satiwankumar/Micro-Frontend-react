import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

interface UseRouterFunctions {
  navigate: NavigateFunction;
}

const useRouter = (): UseRouterFunctions => {
  const navigate = useNavigate();

  const navigateCallback = useCallback(
    (route: string) => {
      if (route !== window.location.pathname) {
        navigate(route);
      }
    },
    [navigate]
  );

  return { navigate: navigateCallback };
};

export default useRouter;
