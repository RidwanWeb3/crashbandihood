import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logoAsset from "../assets/cbh_logo.jpeg";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl text-chunky">404</h1>
        <h2 className="mt-4 text-2xl text-chunky-white">Off the track!</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page crashed out. Steer back to the starting line.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground rev-hover glow-gold"
          >
            🏁 Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl text-chunky-white">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The engine stalled. Try a restart or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground rev-hover glow-gold"
          >
            Try again
          </button>
          <a href="/" className="rounded-md border border-primary/40 px-5 py-2.5 text-sm font-bold text-foreground">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Crash Bandihood ($CBH) — Diamond Hearts, Diamond Hands" },
      { name: "description", content: "$CBH — A racing-arcade crypto token built on nostalgia, community, and diamond hands. Rev up. Ride hard. Never sell." },
      { property: "og:title", content: "Crash Bandihood ($CBH) — Diamond Hearts, Diamond Hands" },
      { property: "og:description", content: "$CBH — A racing-arcade crypto token built on nostalgia, community, and diamond hands." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: logoAsset },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: logoAsset },
      { name: "twitter:title", content: "Crash Bandihood ($CBH)" },
      { name: "twitter:description", content: "Diamond Hearts. Diamond Hands." },
      { name: "theme-color", content: "#0B5C1E" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/jpeg", href: "/favicon.jpeg" },
      { rel: "apple-touch-icon", href: "/favicon.jpeg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Fredoka:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
