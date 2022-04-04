import styles from "./speakersCard.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import Link from "next/link";

export default function SpeakerCard(props) {
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
      <Link
        href={{ pathname: "/speakers-detail/" + props.speaker, query: query }}
      >
        <div className={styles.speakerCardContainer}>
          <div className={styles.cardInformations}>
            <div className={styles.speakerPersonals}>
              <img
                src={
                  "/ExclusiveAssets/speakers/images/" + props.speaker + ".jpg"
                }
                alt={props.speaker + "-image"}
                className={styles.speakerImage}
              />
              <div className={styles.speakerTitle}>
                {t("pages.speakers.speakers." + props.speaker + ".title")}
              </div>
            </div>
            <div>
              <div className={styles.aboutSpeaker}>
                <div className={styles.speakerName}>
                  {t("pages.speakers.speakers." + props.speaker + ".name")}
                </div>
                <div className={styles.speakerDetail}>
                  {t("pages.speakers.speakers." + props.speaker + ".about")}
                </div>
                <div className={styles.speakType}>
                  {t("pages.speakers.speakers." + props.speaker + ".type")}
                </div>
              </div>
            </div>
          </div>
          {/* <div className={styles.timeLine}></div> */}
        </div>
      </Link>
    </>
  );
}
