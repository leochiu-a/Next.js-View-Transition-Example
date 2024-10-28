# Next.js + View Transition Example

Implemented page transition animations using Next.js app router features.

`document.startViewTransition` accepts a `fn` that returns a promise. The view transition is triggered after the promise resolves.

By wrapping `router.push` in `startTransition`, `isPending` will only become `false` after `router.push`, allowing you to determine when to `resolve`.

```typescript
const [isPending, startTransition] = useTransition();

startTransition(() => {
  router.push(href);
});

useEffect(() => {
  if (!isPending) {
    resolve();
  }
});
```

[Demo link](https://next-js-view-transition-example.vercel.app/)

# Getting Started

## Installation

```bash
pnpm i next-simple-view-transition
```

## Usage

In `layout.tsx` add `ViewTransitions`.

```typescript
import { ViewTransitions } from "next-simple-view-transition";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <ViewTransitions>{children}</ViewTransitions>
  );
}
```

Then in the page you want to transition from, add the `Link` component from the package.

```typescript
import { Link } from "next-simple-view-transition";

export default function Page() {
  return (
    <Link href="/">
      <a>Go to home</a>
    </Link>
  );
}
```
