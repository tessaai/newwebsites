import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Router from "./routes";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Router />
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}
