import styles from "./Events.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import Link from "next/link";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Events() {
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
    <section>
      <div
        className={styles.eventSectionContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.home.events.t1")}</h1>
        <img
          src={
            prefix +
            "/GeneralAssets/titleUnderline" +
            (pagelang() == "en" ? "Flip" : "") +
            ".png"
          }
          alt="titleUnderline"
          style={{ marginBottom: "30px" }}
          className={styles.underLineImage}
        />

        <ul className={"bodyText"} style={{ marginBottom: "0px" }}>
          <li className={"bodyText"}>
            <span className={styles.newsDate}>
              {t("pages.home.events.date9")}
            </span>
            {t("pages.home.events.news9")}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.youtube.com/playlist?list=PLS_yN8E1mjBM9jJp511MeuE_acvi7Li2u"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span
                className={styles.newsButtonContainer + " " + "unSelectable"}
              >
                {">"}
              </span>
            </a>
          </li>
          <li className={"bodyText"}>
            <span className={styles.newsDate}>
              {t("pages.home.events.date8")}
            </span>
            {t("pages.home.events.news8")}
            <a
              style={{ textDecoration: "none" }}
              href="https://twitter.com/pyconir/status/1498686087044206599?cxt=HHwWjsC4gcnDs8wpAAAA"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span
                className={styles.newsButtonContainer + " " + "unSelectable"}
              >
                {">"}
              </span>
            </a>
          </li>
          <li className={"bodyText"}>
            <span className={styles.newsDate}>
              {t("pages.home.events.date7")}
            </span>
            {t("pages.home.events.news7")}
          </li>
          <li className={"bodyText"}>
            <span className={styles.newsDate}>
              {t("pages.home.events.date6")}
            </span>
            {t("pages.home.events.news6")}
            <Link href={{ pathname: "/speak-in-pycon", query: query }}>
              <span
                className={styles.newsButtonContainer + " " + "unSelectable"}
              >
                {">"}
              </span>
            </Link>
          </li>
          <li className={"bodyText"}>
            <span className={styles.newsDate}>
              {t("pages.home.events.date5")}
            </span>
            {t("pages.home.events.news5")}
          </li>
          <li className={"bodyText"}>
            <span className={styles.newsDate}>
              {t("pages.home.events.date1")}
            </span>
            {t("pages.home.events.news1")}
            <Link href={{ pathname: "/startup-row", query: query }}>
              <span
                className={styles.newsButtonContainer + " " + "unSelectable"}
              >
                {">"}
              </span>
            </Link>
          </li>
          <li className={"bodyText"}>
            <span className={styles.newsDate}>
              {t("pages.home.events.date2")}
            </span>
            {t("pages.home.events.news2")}
            <a
              style={{ textDecoration: "none" }}
              href="https://discord.gg/Z48FsGfhmv"
              target="_blank"
              rel="noreferrer nofollow noopener"
            >
              <span
                className={styles.newsButtonContainer + " " + "unSelectable"}
              >
                {">"}
              </span>
            </a>
          </li>
          <li className={"bodyText"}>
            <span className={styles.newsDate}>
              {t("pages.home.events.date3")}
            </span>
            {t("pages.home.events.news3")}
            <Link href={{ pathname: "/speak-in-pycon", query: query }}>
              <span
                className={styles.newsButtonContainer + " " + "unSelectable"}
              >
                {">"}
              </span>
            </Link>
          </li>
          <li className={"bodyText"}>
            <span className={styles.newsDate}>
              {t("pages.home.events.date4")}
            </span>
            {t("pages.home.events.news4")}
            <Link href={{ pathname: "/buyTicket", query: query }}>
              <span
                className={styles.newsButtonContainer + " " + "unSelectable"}
              >
                {">"}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
