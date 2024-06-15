import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function useGoToDefaultMode({ defaultMode }: { defaultMode: string }) {
  const { mode } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    mode ?? navigate(defaultMode);
  }, [defaultMode, navigate, mode]);
}
