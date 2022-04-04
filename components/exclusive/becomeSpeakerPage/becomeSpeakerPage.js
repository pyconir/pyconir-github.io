import styles from "./BecomeSpeakerPage.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function BecomeSpeakerPage() {
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
        className={styles.becomeSpeakerPageContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.becomeSpeaker.t1")}</h1>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p1")}</div>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p2")}</div>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p3")}</div>
        <h2>{t("pages.becomeSpeaker.t2")}</h2>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p4")}</div>
        <ul className={"bodyText"} style={{ fontWeight: "bold" }}>
          <li>{t("pages.becomeSpeaker.p5")}</li>
          <li>{t("pages.becomeSpeaker.p6")}</li>
          <li>{t("pages.becomeSpeaker.p7")}</li>
        </ul>
        <h2>{t("pages.becomeSpeaker.t3")}</h2>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p8")}</div>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p9")}</div>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p10")}</div>
        <h2>{t("pages.becomeSpeaker.t4")}</h2>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p11")}</div>
        <ul className={"bodyText"}>
          <li>{t("pages.becomeSpeaker.p12")}</li>
          <li>{t("pages.becomeSpeaker.p13")}</li>
        </ul>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p14")}</div>
        <h2>{t("pages.becomeSpeaker.t5")}</h2>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p15")}</div>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p16")}</div>
        <h2>{t("pages.becomeSpeaker.t6")}</h2>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p17")}</div>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p18")}</div>
        <h2>{t("pages.becomeSpeaker.t7")}</h2>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p19")}</div>
        <ul className={"bodyText"}>
          <li>{t("pages.becomeSpeaker.p20")}</li>
          <li>{t("pages.becomeSpeaker.p21")}</li>
          <li>{t("pages.becomeSpeaker.p22")}</li>
          <li>{t("pages.becomeSpeaker.p23")}</li>
        </ul>
        <h2>{t("pages.becomeSpeaker.t8")}</h2>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p24")}</div>
        <h2>{t("pages.becomeSpeaker.t9")}</h2>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p25")}</div>
        <ul className={"bodyText"}>
          <li>{t("pages.becomeSpeaker.p26")}</li>
          <li>{t("pages.becomeSpeaker.p27")}</li>
          <li>{t("pages.becomeSpeaker.p28")}</li>
          <li>{t("pages.becomeSpeaker.p29")}</li>
          <li>{t("pages.becomeSpeaker.p30")}</li>
          <li>{t("pages.becomeSpeaker.p31")}</li>
          <li>{t("pages.becomeSpeaker.p32")}</li>
          <li>{t("pages.becomeSpeaker.p33")}</li>
          <li>{t("pages.becomeSpeaker.p34")}</li>
          <li>{t("pages.becomeSpeaker.p35")}</li>
          <li>{t("pages.becomeSpeaker.p36")}</li>
          <li>{t("pages.becomeSpeaker.p37")}</li>
          <li>{t("pages.becomeSpeaker.p38")}</li>
          <li>{t("pages.becomeSpeaker.p39")}</li>
          <li>{t("pages.becomeSpeaker.p40")}</li>
          <li>{t("pages.becomeSpeaker.p41")}</li>
          <li>{t("pages.becomeSpeaker.p42")}</li>
          <li>{t("pages.becomeSpeaker.p43")}</li>
          <li>{t("pages.becomeSpeaker.p44")}</li>
          <li>{t("pages.becomeSpeaker.p45")}</li>
          <li>{t("pages.becomeSpeaker.p46")}</li>
          <li>{t("pages.becomeSpeaker.p47")}</li>
          <li>{t("pages.becomeSpeaker.p48")}</li>
          <li>{t("pages.becomeSpeaker.p49")}</li>
          <li>{t("pages.becomeSpeaker.p50")}</li>
          <li>{t("pages.becomeSpeaker.p51")}</li>
          <li>{t("pages.becomeSpeaker.p52")}</li>
          <li>{t("pages.becomeSpeaker.p53")}</li>
          <li>{t("pages.becomeSpeaker.p54")}</li>
        </ul>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p55")}</div>
        <ul className={"bodyText"}>
          <li>{t("pages.becomeSpeaker.p56")}</li>
          <li>{t("pages.becomeSpeaker.p57")}</li>
          <li>{t("pages.becomeSpeaker.p58")}</li>
          <li>{t("pages.becomeSpeaker.p59")}</li>
          <li>{t("pages.becomeSpeaker.p60")}</li>
          <li>{t("pages.becomeSpeaker.p61")}</li>
        </ul>
        <h2>{t("pages.becomeSpeaker.t10")}</h2>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p62")}</div>
        <ul className={"bodyText"}>
          <li>{t("pages.becomeSpeaker.p63")}</li>
          <li>{t("pages.becomeSpeaker.p64")}</li>
          <li>{t("pages.becomeSpeaker.p65")}</li>
          <li>{t("pages.becomeSpeaker.p66")}</li>
        </ul>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p67")}</div>
        <ul className={"bodyText"}>
          <li>{t("pages.becomeSpeaker.p68")}</li>
          <li>{t("pages.becomeSpeaker.p69")}</li>
          <li>{t("pages.becomeSpeaker.p70")}</li>
          <li>{t("pages.becomeSpeaker.p71")}</li>
          <li>{t("pages.becomeSpeaker.p72")}</li>
        </ul>
        <h2>{t("pages.becomeSpeaker.t11")}</h2>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p73")}</div>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p74")}</div>
        <ul className={"bodyText"}>
          <li>{t("pages.becomeSpeaker.p75")}</li>
          <li>{t("pages.becomeSpeaker.p76")}</li>
          <li>{t("pages.becomeSpeaker.p77")}</li>
        </ul>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p78")}</div>
        <h2>{t("pages.becomeSpeaker.t12")}</h2>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p79")}</div>
        <div className={"bodyText"}>{t("pages.becomeSpeaker.p80")}</div>
      </div>
    </section>
  );
}
