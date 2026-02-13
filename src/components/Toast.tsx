import { useEffect } from "react";
import { useStore } from "../store/useStore";

export default function Toast() {
  const error = useStore((state) => state.error);
  const clearError = useStore((state) => state.clearError);

  useEffect(() => {
    if (!error) return;

    const timer = setTimeout(() => {
      clearError();
    }, 3000);

    return () => clearTimeout(timer);
  }, [error, clearError]);

  if (!error) return null;

  return (
    <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow">
      {error}
    </div>
  );
}
