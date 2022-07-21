import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { InnocreProvider } from "../context/InnocreContext";
import { ModalProvider } from "react-simple-hook-modal";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
    >
      <InnocreProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </InnocreProvider>
    </MoralisProvider>
  );
}

export default MyApp;
