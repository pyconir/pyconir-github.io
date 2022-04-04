import styles from "./SprintsPage.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function SprintsPage() {
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
        className={styles.SprintsPageContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.sprints.t1")}</h1>
        <div className={"bodyText"}>{t("pages.sprints.p1")}</div>
        <div className={"bodyText"} style={{ fontWeight: "bold" }}>
          {t("pages.sprints.p2")}
        </div>
        <div className={"bodyText"} style={{ fontWeight: "bold" }}>
          {t("pages.sprints.p3")}
        </div>
        <h3>{t("pages.sprints.t2")}</h3>
        <div className={"bodyText"}>{t("pages.sprints.p4")}</div>
        <div className={"bodyText"}>{t("pages.sprints.p5")}</div>
      </div>
    </section>
  );
}
