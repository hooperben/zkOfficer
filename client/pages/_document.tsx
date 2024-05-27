import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ background: "#D0D7E5", width: "100%" }}>
      <Head />
      <body className="bg-[#D0D7E5] w-[100vw]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
