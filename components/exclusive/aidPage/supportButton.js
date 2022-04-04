import styles from "./SupportButton.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";


export default function SupportButton() {
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
    <div className={styles.SupportButtonContainer + " " + "buttonsText"}>
      <div>{t("pages.aid.button")}</div>
    </div>
  );
}
