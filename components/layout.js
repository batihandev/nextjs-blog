import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import styles from "./layout.module.css";
const name = "Batıhan Özdemir";
export const siteTitle = "Next.js Sample Website";
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
        <meta
          name="description"
          content="Learning how to build a personal website using next.js"
        ></meta>
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=lightmd)=0fontSize=.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.verce`}
        ></meta>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/ben.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/ben.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
