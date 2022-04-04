import styles from "./CodeOfConductText.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function CodeOfConductText() {
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
        className={styles.CodeOfConductTextSectionContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.codeOfConduct.t1")}</h1>
        <div className={"bodyText"}>{t("pages.codeOfConduct.p1")}</div>
        <div className={"bodyText"}>{t("pages.codeOfConduct.p2")}</div>
        <div className={"bodyText"}>{t("pages.codeOfConduct.p3")}</div>
        <h3>{t("pages.codeOfConduct.t2")}</h3>
        <ul className={"bodyText"} style={{ backgroundColor: "#d6f1d396" }}>
          <li>{t("pages.codeOfConduct.p4")}</li>
          <li>{t("pages.codeOfConduct.p5")}</li>
          <li>{t("pages.codeOfConduct.p6")}</li>
          <li>{t("pages.codeOfConduct.p7")}</li>
          <li>{t("pages.codeOfConduct.p8")}</li>
        </ul>
        <h3>{t("pages.codeOfConduct.t3")}</h3>
        <ul className={"bodyText"} style={{ backgroundColor: "#ffeaeb83" }}>
          <li>{t("pages.codeOfConduct.p9")}</li>
          <li>{t("pages.codeOfConduct.p10")}</li>
          <li>{t("pages.codeOfConduct.p11")}</li>
          <li>{t("pages.codeOfConduct.p12")}</li>
          <li>{t("pages.codeOfConduct.p13")}</li>
          <li>{t("pages.codeOfConduct.p14")}</li>
        </ul>
        <h3>{t("pages.codeOfConduct.t4")}</h3>
        <div className={"bodyText"}>{t("pages.codeOfConduct.p15")}</div>
        <h3>{t("pages.codeOfConduct.t5")}</h3>
        <div className={"bodyText"}>{t("pages.codeOfConduct.p16")}</div>
        <ul className={"bodyText"}>
          <li>{t("pages.codeOfConduct.p17")}</li>
          <li>{t("pages.codeOfConduct.p18")}</li>
          <li>{t("pages.codeOfConduct.p19")}</li>
        </ul>
        <div className={"bodyText"}>{t("pages.codeOfConduct.p20")}</div>
        <h3>{t("pages.codeOfConduct.t6")}</h3>
        <div className={"bodyText"}>{t("pages.codeOfConduct.p21")}</div>
        <div className={"bodyText"}>{t("pages.codeOfConduct.p22")}</div>
        <h3>{t("pages.codeOfConduct.t9")}</h3>
        <div className={"bodyText"}>{t("pages.codeOfConduct.p27")}</div>
        <ul className={"bodyText"}>
          <li>{t("pages.codeOfConduct.p28")}</li>
        </ul>
        <h3>{t("pages.codeOfConduct.t7")}</h3>
        <div className={"bodyText"}>{t("pages.codeOfConduct.p23")}</div>
        <ul className={"bodyText"}>
          <li>{t("pages.codeOfConduct.p24")}</li>
          <li>{t("pages.codeOfConduct.p25")}</li>
        </ul>
        <h3>{t("pages.codeOfConduct.t8")}</h3>
        <div className={"bodyText"}>{t("pages.codeOfConduct.p26")}</div>
      </div>
    </section>
  );
}
