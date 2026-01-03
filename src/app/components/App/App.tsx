import { Suspense, useEffect, useState } from "react";
import "./App.scss";
import AppRouter from "@/app/config/AppRouter";
import { Header, Footer, Preloader } from "@/shared/ui";

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // 1. Record the start time
    const startTime = Date.now();

    // 2. Wait for the window to load (images, scripts, etc.)
    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 1000 - elapsed);

      // 3. Ensure it stays at least 600ms total
      setTimeout(() => {
        setIsReady(true);
      }, remaining);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {!isReady && <Preloader />}

      <div style={{ opacity: isReady ? 1 : 0, transition: "opacity 0.3s" }}>
        <Header />

        {/* Suspense handles the lazy loading of chunks inside the router */}
        <Suspense fallback={<Preloader />}>
          <AppRouter />
        </Suspense>

        <Footer />
      </div>
    </>
  );
}

export default App;
