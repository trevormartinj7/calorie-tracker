import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-screen h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
