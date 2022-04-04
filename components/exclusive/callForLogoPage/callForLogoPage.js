import styles from "./CallForLogoPage.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function CallForLogoPage() {
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
        className={styles.CallForLogoPageContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.callForLogo.t1")}</h1>
        <h3>{t("pages.callForLogo.t2")}</h3>
        <ul className={"bodyText"}>
          <li>{t("pages.callForLogo.p1")}</li>
          <li>{t("pages.callForLogo.p2")}</li>
          <li>{t("pages.callForLogo.p3")}</li>
          <li>{t("pages.callForLogo.p4")}</li>
          <li>{t("pages.callForLogo.p5")}</li>
        </ul>
        <h3>{t("pages.callForLogo.t3")}</h3>
        <div className={"bodyText"}>{t("pages.callForLogo.p6")}</div>
        <div className={"bodyText"}>{t("pages.callForLogo.p7")}</div>
      </div>
    </section>
  );
}
