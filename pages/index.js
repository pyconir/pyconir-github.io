import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/general/layout";
import Landing from "../components/exclusive/homePage/landing";
import Events from "../components/exclusive/homePage/events";
import Speakers from "../components/exclusive/homePage/speakers";
import Sponsors from "../components/exclusive/homePage/sponsors";
import CallPapers from "../components/exclusive/homePage/callPapers";
import KeySpeakers from "../components/exclusive/homePage/keySpeakers";
import AboutPython from "../components/exclusive/homePage/aboutPython";
import AboutPyconir from "../components/exclusive/homePage/aboutPyconir";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const pagelang = () => {
    if (typeof query !== "undefined") {
      if (query.lang == "en") {
        return "en";
      } else {
        return "fa";
      }
    } else {
      return "fa";
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>PyCon 2021 Welcome to PyCon Iran 2021</title>
        <meta name="description" content={t("pages.home.description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={prefix + "/favicon1.ico"} />
        <link rel="preconnect" href="//fdn.fontcdn.ir" />
        <link rel="preconnect" href="//v1.fontapi.ir" />
        <link
          href="https://v1.fontapi.ir/css/Sahel:400;700;900"
          rel="stylesheet"
        />
        <link
          href="https://v1.fontapi.ir/css/Vazir:300;400;700;900"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,600;0,700;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Landing />
        <Events />
        <KeySpeakers />
        <Speakers />
        <Sponsors />
        <AboutPyconir />
        <AboutPython />
      </Layout>
    </div>
  );
}
