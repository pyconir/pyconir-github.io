import styles from "./AboutPyconIr.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function AboutPyconIr() {
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
        className={styles.aboutPyconIrSectionContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.about.t1")}</h1>
        <div className={"bodyText"}>{t("pages.about.p1")}</div>
        <div className={"bodyText"}>{t("pages.about.p2")}</div>
        <div className={"bodyText"}>{t("pages.about.p3")}</div>
        <div className={"bodyText"}>{t("pages.about.p4")}</div>
        <div className={"bodyText"}>{t("pages.about.p5")}</div>
        <div className={"bodyText"}>{t("pages.about.p6")}</div>
      </div>
    </section>
  );
}
