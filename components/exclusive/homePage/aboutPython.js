import styles from "./AboutPython.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function AboutPython() {
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
        className={styles.AboutPythonSectionContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.home.aboutPython.t1")}</h1>
        <img
            src={
              prefix +
              "/GeneralAssets/titleUnderline" +
              (pagelang() == "en" ? "Flip" : "") +
              ".png"
            }
            alt="titleUnderline"
            style={{marginBottom:"30px"}}
            className={styles.underLineImage}
          />
        <div className={"bodyText"}>{t("pages.home.aboutPython.p1")}</div>
        <div className={"bodyText"}>{t("pages.home.aboutPython.p2")}</div>
        <ul className={"bodyText"}>
          <li>{t("pages.home.aboutPython.p3")}</li>
          <li>{t("pages.home.aboutPython.p4")}</li>
          <li>{t("pages.home.aboutPython.p5")}</li>
          <li>{t("pages.home.aboutPython.p6")}</li>
          <li>{t("pages.home.aboutPython.p7")}</li>
          <li>{t("pages.home.aboutPython.p8")}</li>
          <li>{t("pages.home.aboutPython.p9")}</li>
          <li>{t("pages.home.aboutPython.p10")}</li>
          <li>{t("pages.home.aboutPython.p11")}</li>
          <li>{t("pages.home.aboutPython.p12")}</li>
          <li>{t("pages.home.aboutPython.p13")}</li>
          <li>{t("pages.home.aboutPython.p14")}</li>
          <li>{t("pages.home.aboutPython.p15")}</li>
          <li>{t("pages.home.aboutPython.p16")}</li>
          <li>{t("pages.home.aboutPython.p17")}</li>
          <li>{t("pages.home.aboutPython.p18")}</li>
          <li>{t("pages.home.aboutPython.p19")}</li>
          <li>{t("pages.home.aboutPython.p20")}</li>
          <li>{t("pages.home.aboutPython.p21")}</li>
        </ul>
      </div>
    </section>
  );
}
