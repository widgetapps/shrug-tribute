import { Html, Head, Main, NextScript } from 'next/document'
import Mainnav from "@/components/mainav";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_MEASUREMENT_ID}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
        </Head>
      <body className="bg-shrug-dark">
        <Mainnav />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
