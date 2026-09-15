import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function Fade({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [reduced]);

  return (
    <div
      className={reduced ? undefined : `transition-opacity duration-200 ease-out ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return <Fade key={pathname}>{children}</Fade>;
}
