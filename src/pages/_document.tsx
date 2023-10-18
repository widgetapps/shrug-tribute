import { Html, Head, Main, NextScript } from 'next/document'
import Mainnav from "@/components/mainav";

export default function Document() {
  return (
    <Html lang="en">
        <Head>

            <meta name="viewport" content="width=device-width,initial-scale=1" />

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

            <meta property="og:type" content="article" />
            <meta property="og:title" content=">Shrug off reality... 2023 - A Celebration of Mike Robillard's Life in Music" />
            <meta property="og:description" content="On November 2nd, current and former members of the local music community
            will be holding a special event to celebrate the life and music of one of their own who succumbed to cancer
            in 2022. Mike Robillard was a bass player, writer, artist, and podcaster, whose passing left behind a legacy
            of passion for the arts." />
            <meta property="og:image" content="https://www.shrugoffreality.com/_next/image?url=%2Fimg%2Fphoto_mike_1.png&w=640&q=75" />
            <meta property="og:url" content="https://www.shrugoffreality.com/" />
            <meta property="og:site_name" content="Shrug off reality..." />

            <meta name="twitter:title" content=">Shrug off reality... 2023 - A Celebration of Mike Robillard's Life in Music" />
            <meta name="twitter:description" content="On November 2nd, current and former members of the local music community
            will be holding a special event to celebrate the life and music of one of their own who succumbed to cancer
            in 2022. Mike Robillard was a bass player, writer, artist, and podcaster, whose passing left behind a legacy
            of passion for the arts." />
            <meta name="twitter:image" content="https://www.shrugoffreality.com/_next/image?url=%2Fimg%2Fphoto_mike_1.png&w=640&q=75" />
            <meta name="twitter:url" content="https://www.shrugoffreality.com/" />
        </Head>
      <body className="bg-black">
        <Mainnav />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
