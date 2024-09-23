import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import NavigationBar from "../components/NavigationBar/navigation-bar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
    </>
  );
}
