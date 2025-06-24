// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "flatpickr/dist/flatpickr.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { AppWrapper } from "./components/common/PageMeta.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
// import { AuthProvider } from "./context/AuthContext.tsx";
// import ReactDOM from "react-dom/client";
import React from "react";
import { store } from "./reduxStore/store.ts";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <StrictMode> */}
        <ThemeProvider>
          <AppWrapper>
            {/* <AuthProvider> */}
              <App />
            {/* </AuthProvider> */}
          </AppWrapper>
        </ThemeProvider>
      {/* </StrictMode> */}
    </Provider>
  </React.StrictMode>,
);

