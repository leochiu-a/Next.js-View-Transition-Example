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

# Getting Started

```bash
pnpm install
pnpm dev
```
