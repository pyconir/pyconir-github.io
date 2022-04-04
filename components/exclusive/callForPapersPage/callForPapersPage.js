import styles from "./CallForPapersPage.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function CallForPapersPage() {
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
        className={styles.callForPapersPageContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.callForPapers.t1")}</h1>
        <div className={"bodyText"}>{t("pages.callForPapers.p1")}</div>
      </div>
    </section>
  );
}
