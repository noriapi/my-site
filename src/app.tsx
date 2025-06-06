import "./app.css";

import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { Navbar } from "./components/ui/navbar";
import { createPrefersDarkEffect } from "./signal/theme";

export default function App() {
  createPrefersDarkEffect();

  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>noriapiのホーム</Title>
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
