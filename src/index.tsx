import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import { UserProvider } from "./context/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <UserProvider>
        <App />
      </UserProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
