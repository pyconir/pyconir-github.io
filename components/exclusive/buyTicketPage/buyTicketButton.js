import styles from "./BuyTicketButton.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function BuyTicketButton() {
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
    <div>
      <a
        className={styles.BuyTicketButtonContainer + " " + "buttonsText"}
        href="https://evand.com/events/pycon-iran-2021"
        target="_blank"
        rel="noreferrer nofollow noopener"
      >
        <div>{t("pages.buyTicket.button")}</div>
      </a>
    </div>
  );
}
