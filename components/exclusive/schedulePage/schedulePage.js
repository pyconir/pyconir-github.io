import styles from "./SchedulePage.module.css";
import Calendar from "./calendar.js";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function SchedulePage() {
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
        className={styles.schedulePageContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.schedule.t1")}</h1>
        <Calendar />
      </div>
    </section>
  );
}
