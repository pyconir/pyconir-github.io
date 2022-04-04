import styles from "./SendJobButton.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import Link from "next/link";

export default function SendJobButton() {
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
    <Link href={{ pathname: "/become-a-sponsor", query: query }}>
      <div
        className={styles.SendJobButtonButtonContainer + " " + "buttonsText"}
      >
        <div>{t("pages.jobOpportunities.page.button")}</div>
      </div>
    </Link>
  );
}
