# vite-2.4.0-react-query-issue
Created with CodeSandbox


This is a reproduction of a problem that I encountered when upgrading to vite 2.4.0-beta.0.

If you run `npm i` and then `npm run dev`, you should see a blank screen and an error in the console:

```
Uncaught Error: No QueryClient set, use QueryClientProvider to set one
```

But, if you downgrade vite to `2.3.8`, the app will start normally.
