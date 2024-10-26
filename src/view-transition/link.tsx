"use client";

import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useViewTransitionContext } from "./transition-context";

function Link(props: React.ComponentProps<typeof NextLink>) {
  const router = useRouter();
  const { startTransition, setFinishViewTransition } =
    useViewTransitionContext();

  const triggerTransition = useCallback(
    (cb: () => void) => {
      if ("startViewTransition" in document) {
        document.startViewTransition(
          () =>
            new Promise<void>((resolve) => {
              startTransition(() => {
                cb();
                setFinishViewTransition(() => resolve);
              });
            })
        );
      } else {
        return cb();
      }
    },
    [setFinishViewTransition, startTransition]
  );

  const push = useCallback(
    (href: string, options?: NavigateOptions) => {
      triggerTransition(() => {
        router.push(href, options);
      });
    },
    [router, triggerTransition]
  );

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (props.onClick) {
        props.onClick(e);
      }

      const { href, scroll } = props;
      if ("startViewTransition" in document) {
        e.preventDefault();

        push(href.toString(), { scroll: scroll ?? true });
      }
    },
    [props, push]
  );

  return <NextLink {...props} onClick={onClick} />;
}

export default Link;
