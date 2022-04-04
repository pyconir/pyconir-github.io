import styles from "./KeySpeakers.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import Link from "next/link";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

function KeySpeakerCard(props) {
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
    <>
      <div className={styles.keySpeakerCardContainer}>
        <Link
          href={{
            pathname: "/speakers-detail/" + props.keySpeaker,
            query: query,
          }}
        >
          <div>
            <div className={styles.keySpeakerImageContainer}>
              <img
                src={
                  prefix +
                  "ExclusiveAssets/speakers/images/" +
                  props.keySpeaker +
                  ".jpg"
                }
                alt="keySpeaker-image"
                className={styles.keySpeakerImage}
              />
            </div>

            <div className={styles.keySpeakerName}>
              {t("pages.home.speakers.speakers." + props.keySpeaker + ".name")}
            </div>
            <div className={styles.keySpeakerTitle}>
              {t("pages.home.speakers.speakers." + props.keySpeaker + ".title")}
            </div>
            <div
              className={
                pagelang() == "fa"
                  ? styles.keySpeakerAboutRightBorder
                  : styles.keySpeakerAboutLeftBorder
              }
            >
              {t("pages.home.speakers.speakers." + props.keySpeaker + ".about")}
            </div>
            <div className={styles.keySpeakerTalkTitle}>
              {t(
                "pages.home.speakers.speakers." +
                  props.keySpeaker +
                  ".talkTitle"
              )}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default function KeySpeakers() {
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
        className={styles.keySpeakersSectionContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1 style={{ color: "white" }}>{t("pages.home.speakers.t1")}</h1>
        <img
          src={
            prefix +
            "/GeneralAssets/titleUnderline" +
            (pagelang() == "en" ? "Flip" : "") +
            ".png"
          }
          alt="titleUnderline"
          style={{ marginBottom: "30px" }}
          className={styles.underLineImage}
        />
        <h2 className={styles.keySpeakersSectionHeader}>
          {t("pages.home.speakers.t2")}
        </h2>
        <div className={styles.keySpeakersContainer}>
          <KeySpeakerCard keySpeaker="keySpeaker1" />
          <KeySpeakerCard keySpeaker="keySpeaker2" />
        </div>
      </div>
    </section>
  );
}
