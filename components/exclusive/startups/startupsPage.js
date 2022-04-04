import styles from "./StartupsPage.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function StartupsPage() {
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
        className={styles.StartupsPageContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.startups.t1")}</h1>
        <div className={"bodyText"}>{t("pages.startups.p1")}</div>
        <div className={"bodyText"}>{t("pages.startups.p2")}</div>
        <h3>{t("pages.startups.t2")}</h3>
        <ul className={"bodyText"}>
          <li>{t("pages.startups.p3")}</li>
          <li>{t("pages.startups.p4")}</li>
          <li>{t("pages.startups.p5")}</li>
        </ul>
        <h3>{t("pages.startups.t3")}</h3>
        <div className={"bodyText"}>{t("pages.startups.p6")}</div>
        <div className={"bodyText"}>{t("pages.startups.p7")}</div>
        <div className={"bodyText"}>{t("pages.startups.p8")}</div>
        <div className={"bodyText"}>{t("pages.startups.p9")}</div>
      </div>
    </section>
  );
}
