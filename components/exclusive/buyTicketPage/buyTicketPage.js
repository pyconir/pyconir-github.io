import styles from "./BuyTicketPage.module.css";
import BuyTicketButton from "./buyTicketButton";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function BuyTicketPage() {
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
        className={styles.buyTicketPageContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.buyTicket.t1")}</h1>
        <h2>{t("pages.buyTicket.t2")}</h2>
        <div className={"bodyText"}>{t("pages.buyTicket.p1")}</div>

        <ul className={"bodyText"}>
          <li>{t("pages.buyTicket.p2")}</li>
        </ul>
        <div className={"bodyText"}>{t("pages.buyTicket.p3")}</div>
        <div className={"bodyText"}>{t("pages.buyTicket.p4")}</div>
        <ul style={{ direction: "ltr" }}>
          <li className={"bodyText"}>{t("pages.buyTicket.p5")}</li>

          <li className={"bodyText"}>
            <a
              style={{ textDecoration: "none" }}
              className={styles.links}
              href="https://discord.gg/Z48FsGfhmv"
              target="_blank"
              rel="noreferrer nofollow noopener"
            >
              {t("pages.buyTicket.p6")}
            </a>
          </li>
        </ul>
        <BuyTicketButton />
      </div>
    </section>
  );
}
