import "./app.css";

import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { Navbar } from "./components/ui/navbar";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <header>
            <Navbar />
          </header>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
