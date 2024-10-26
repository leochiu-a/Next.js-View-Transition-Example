"use client";

import type { Dispatch, SetStateAction, TransitionStartFunction } from "react";
import { createContext, use, useEffect, useState, useTransition } from "react";

const ViewTransitionsContext = createContext<{
  startTransition: TransitionStartFunction;
  setFinishViewTransition: Dispatch<SetStateAction<(() => void) | null>>;
}>({
  startTransition: () => {},
  setFinishViewTransition: () => null,
});

export function ViewTransitions({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [finishViewTransition, setFinishViewTransition] = useState<
    null | (() => void)
  >(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (finishViewTransition && !isPending) {
      finishViewTransition();
      setFinishViewTransition(null);
    }
  }, [finishViewTransition, isPending]);

  return (
    <ViewTransitionsContext.Provider
      value={{ startTransition, setFinishViewTransition }}
    >
      {children}
    </ViewTransitionsContext.Provider>
  );
}

export function useViewTransitionContext() {
  return use(ViewTransitionsContext);
}
