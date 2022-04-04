import styles from "./CallPapers.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function CallPapers() {
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
        className={styles.callPapersSectionContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <div className={styles.callActionButtonsContainer}>
          <img
            className={styles.callActionButtons}
            src={prefix + "/GeneralAssets/callPaperButton.png"}
          ></img>
          <div className={styles.actionButtonText} style={{ color: "#307ea0" }}>
            {t("pages.home.callPapers.p1")}
          </div>
        </div>
        <div className={styles.callActionButtonsContainer}>
          <img
            className={styles.callActionButtons}
            src={prefix + "/GeneralAssets/buyTicketButton.png"}
          ></img>
          <div className={styles.actionButtonText} style={{ color: "#48af6a" }}>
            {t("pages.home.callPapers.p2")}
          </div>
        </div>
      </div>
    </section>
  );
}
