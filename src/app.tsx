import "./app.css";

import { MetaProvider, Title, Link } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { Navbar } from "./components/ui/navbar";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>noriapiのホーム</Title>
          <Link
            rel="icon"
            type="image/png"
            href="/noriapi/favicon-96x96.png"
            sizes="96x96"
          />
          <Link rel="icon" type="image/svg+xml" href="/noriapi/favicon.svg" />
          <Link rel="shortcut icon" href="/noriapi/favicon.ico" />
          <Link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/noriapi/apple-touch-icon.png"
          />
          <Link rel="manifest" href="/noriapi/site.webmanifest" />

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
