import styles from "./AidPage.module.css";
import SupportButton from "./supportButton";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function AidPage() {
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
        className={styles.aidPageContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.aid.t1")}</h1>
        <div className={"bodyText"}>
          {t("pages.aid.p1")}
          <span>
            <a
              href="https://pycon.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              PyCon
            </a>
          </span>
          {t("pages.aid.p2")}
        </div>
        <div className={"bodyText"}>{t("pages.aid.p3")}</div>
        <div className={"bodyText"}>{t("pages.aid.p4")}</div>
        <SupportButton />
      </div>
    </section>
  );
}
