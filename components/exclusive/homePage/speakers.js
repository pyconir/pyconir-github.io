import styles from "./Speakers.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import Link from "next/link";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

function SpeakerCard(props) {
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
      <div className={styles.speakerCardContainer}>
        <Link
          href={{ pathname: "/speakers-detail/" + props.speaker, query: query }}
        >
          <div className={styles.speakerImageContainer}>
            <img
              src={props.imageUrl}
              alt="speaker-image"
              className={styles.speakerImage}
            />
          </div>
        </Link>
        <Link
          href={{ pathname: "/speakers-detail/" + props.speaker, query: query }}
        >
          <div className={styles.speakerName}>{props.name}</div>
        </Link>

        <div className={styles.spkeakerTitle}>{props.title}</div>
        {/* <div className={styles.aboutSpeaker}>{props.about}</div> */}
        <div className={styles.speakerTalkTitle}>{props.talkTitle}</div>
        {props.social && (
          <div className={styles.speakerContactsContainer}>
            {props.github.valid && (
              <a
                style={{ textDecoration: "none" }}
                href={props.github.link}
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                <img
                  className={styles.socialImages}
                  src={prefix + `/GeneralAssets/github.svg`}
                  alt="github-icon"
                />
              </a>
            )}
            {props.twitter.valid && (
              <a
                style={{ textDecoration: "none" }}
                href={props.twitter.link}
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                <img
                  className={styles.socialImages}
                  src={prefix + `/GeneralAssets/twitter.svg`}
                  alt="twitter-icon"
                />
              </a>
            )}
            {props.linkedin.valid && (
              <a
                style={{ textDecoration: "none" }}
                href={props.linkedin.link}
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                <img
                  className={styles.socialImages}
                  src={prefix + `/GeneralAssets/linkedin.svg`}
                  alt="linkedin-icon"
                />
              </a>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default function Speakers() {
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
        className={styles.speakersSectionContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <div className={styles.sectionTitleContainer}>
          <h2 style={{ textAlign: "center" }}>
            {t("pages.home.speakers.t1")}
          </h2>
        </div>
        <div className={styles.speakersContainer}>
          <SpeakerCard
            speaker={"speaker7"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker7.jpg"}
            name={t("pages.home.speakers.speakers.speaker7.name")}
            title={t("pages.home.speakers.speakers.speaker7.title")}
            about={t("pages.home.speakers.speakers.speaker7.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker7.talkTitle")}
            social={false}
            github={{ valid: false, link: "" }}
            twitter={{ valid: false, link: "" }}
            linkedin={{ valid: false, link: "" }}
          />
          <SpeakerCard
            speaker={"speaker8"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker8.jpg"}
            name={t("pages.home.speakers.speakers.speaker8.name")}
            title={t("pages.home.speakers.speakers.speaker8.title")}
            about={t("pages.home.speakers.speakers.speaker8.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker8.talkTitle")}
            social={true}
            github={{ valid: true, link: "https://github.com/AFanaei" }}
            twitter={{ valid: true, link: "https://twitter.com/AhmadFanaei" }}
            linkedin={{
              valid: true,
              link: "https://www.linkedin.com/in/ahmad-fanaei-408b19128/",
            }}
          />
          <SpeakerCard
            speaker={"speaker9"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker9.jpg"}
            name={t("pages.home.speakers.speakers.speaker9.name")}
            title={t("pages.home.speakers.speakers.speaker9.title")}
            about={t("pages.home.speakers.speakers.speaker9.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker9.talkTitle")}
            social={true}
            github={{ valid: false, link: "" }}
            twitter={{ valid: true, link: "https://twitter.com/hasanoori" }}
            linkedin={{
              valid: true,
              link: "https://ir.linkedin.com/in/xishma",
            }}
          />
          <SpeakerCard
            speaker={"speaker10"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker10.jpg"}
            name={t("pages.home.speakers.speakers.speaker10.name")}
            title={t("pages.home.speakers.speakers.speaker10.title")}
            about={t("pages.home.speakers.speakers.speaker10.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker10.talkTitle")}
            social={false}
            github={{ valid: false, link: "" }}
            twitter={{ valid: false, link: "" }}
            linkedin={{
              valid: false,
              link: "",
            }}
          />
          <SpeakerCard
            speaker={"speaker12"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker12.jpg"}
            name={t("pages.home.speakers.speakers.speaker12.name")}
            title={t("pages.home.speakers.speakers.speaker12.title")}
            about={t("pages.home.speakers.speakers.speaker12.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker12.talkTitle")}
            social={true}
            github={{ valid: true, link: "https://github.com/parulnith" }}
            twitter={{ valid: true, link: "https://twitter.com/pandeyparul" }}
            linkedin={{
              valid: true,
              link: "https://www.linkedin.com/in/parulpandeyindia/",
            }}
          />
          <SpeakerCard
            speaker={"speaker11"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker11.jpg"}
            name={t("pages.home.speakers.speakers.speaker11.name")}
            title={t("pages.home.speakers.speakers.speaker11.title")}
            about={t("pages.home.speakers.speakers.speaker11.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker11.talkTitle")}
            social={true}
            github={{ valid: true, link: "https://github.com/gcdeshpande" }}
            twitter={{ valid: true, link: "https://twitter.com/gcdeshpande" }}
            linkedin={{
              valid: true,
              link: "https://www.linkedin.com/in/gajendradeshpande/",
            }}
          />
          <SpeakerCard
            speaker={"speaker6"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker6.jpg"}
            name={t("pages.home.speakers.speakers.speaker6.name")}
            title={t("pages.home.speakers.speakers.speaker6.title")}
            about={t("pages.home.speakers.speakers.speaker6.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker6.talkTitle")}
            social={true}
            github={{ valid: false, link: "" }}
            twitter={{
              valid: true,
              link: "https://twitter.com/SebastiaanZeeff",
            }}
            linkedin={{
              valid: true,
              link: "https://www.linkedin.com/in/sebastiaanzeeff/",
            }}
          />
          <SpeakerCard
            speaker={"speaker1"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker1.jpg"}
            name={t("pages.home.speakers.speakers.speaker1.name")}
            title={t("pages.home.speakers.speakers.speaker1.title")}
            about={t("pages.home.speakers.speakers.speaker1.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker1.talkTitle")}
            social={true}
            github={{ valid: false, link: "" }}
            twitter={{ valid: true, link: "https://twitter.com/sepkjaer20" }}
            linkedin={{
              valid: true,
              link: "https://ir.linkedin.com/in/sepand-haghighi-b0293b22",
            }}
          />
          <SpeakerCard
            speaker={"speaker2"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker2.jpg"}
            name={t("pages.home.speakers.speakers.speaker2.name")}
            title={t("pages.home.speakers.speakers.speaker2.title")}
            about={t("pages.home.speakers.speakers.speaker2.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker2.talkTitle")}
            social={true}
            github={{ valid: false, link: "" }}
            twitter={{ valid: true, link: "https://twitter.com/voorivex" }}
            linkedin={{
              valid: true,
              link: "https://ir.linkedin.com/in/yasharshahinzadeh",
            }}
          />
          <SpeakerCard
            speaker={"speaker3"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker3.jpg"}
            name={t("pages.home.speakers.speakers.speaker3.name")}
            title={t("pages.home.speakers.speakers.speaker3.title")}
            about={t("pages.home.speakers.speakers.speaker3.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker3.talkTitle")}
            social={false}
            github={{ valid: false, link: "" }}
            twitter={{ valid: false, link: "" }}
            linkedin={{ valid: false, link: "" }}
          />
          <SpeakerCard
            speaker={"speaker4"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker4.jpg"}
            name={t("pages.home.speakers.speakers.speaker4.name")}
            title={t("pages.home.speakers.speakers.speaker4.title")}
            about={t("pages.home.speakers.speakers.speaker4.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker4.talkTitle")}
            social={true}
            github={{ valid: false, link: "" }}
            twitter={{ valid: false, link: "" }}
            linkedin={{
              valid: true,
              link: "https://www.linkedin.com/in/alireza-zolanvari",
            }}
          />
          <SpeakerCard
            speaker={"speaker5"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker5.jpg"}
            name={t("pages.home.speakers.speakers.speaker5.name")}
            title={t("pages.home.speakers.speakers.speaker5.title")}
            about={t("pages.home.speakers.speakers.speaker5.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker5.talkTitle")}
            social={true}
            github={{ valid: true, link: "https://github.com/sadrasabouri" }}
            twitter={{ valid: true, link: "https://twitter.com/sadrasabouri" }}
            linkedin={{
              valid: true,
              link: "https://www.linkedin.com/in/sadra-sabouri-136354170",
            }}
          />
          <SpeakerCard
            speaker={"speaker13"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker13.jpg"}
            name={t("pages.home.speakers.speakers.speaker13.name")}
            title={t("pages.home.speakers.speakers.speaker13.title")}
            about={t("pages.home.speakers.speakers.speaker13.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker13.talkTitle")}
            social={true}
            github={{ valid: false, link: "" }}
            twitter={{ valid: true, link: "https://twitter.com/sanand0" }}
            linkedin={{
              valid: true,
              link: "https://www.linkedin.com/in/sanand0/",
            }}
          />
          <SpeakerCard
            speaker={"speaker14"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker14.jpg"}
            name={t("pages.home.speakers.speakers.speaker14.name")}
            title={t("pages.home.speakers.speakers.speaker14.title")}
            about={t("pages.home.speakers.speakers.speaker14.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker14.talkTitle")}
            social={true}
            github={{ valid: false, link: "" }}
            twitter={{ valid: true, link: "https://twitter.com/glyphack" }}
            linkedin={{
              valid: true,
              link: "https://www.linkedin.com/in/shayegan-hooshyari/",
            }}
          />
          <SpeakerCard
            speaker={"speaker15"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker15.jpg"}
            name={t("pages.home.speakers.speakers.speaker15.name")}
            title={t("pages.home.speakers.speakers.speaker15.title")}
            about={t("pages.home.speakers.speakers.speaker15.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker15.talkTitle")}
            social={true}
            github={{ valid: false, link: "" }}
            twitter={{ valid: false, link: "" }}
            linkedin={{
              valid: true,
              link: "https://www.linkedin.com/in/mohammadhassanzadeh",
            }}
          />
          <SpeakerCard
            speaker={"speaker16"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker16.jpg"}
            name={t("pages.home.speakers.speakers.speaker16.name")}
            title={t("pages.home.speakers.speakers.speaker16.title")}
            about={t("pages.home.speakers.speakers.speaker16.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker16.talkTitle")}
            social={true}
            github={{ valid: false, link: "" }}
            twitter={{
              valid: true,
              link: "https://twitter.com/richardblythman",
            }}
            linkedin={{
              valid: true,
              link: "https://ie.linkedin.com/in/richard-blythman-64b2b948",
            }}
          />
          <SpeakerCard
            speaker={"speaker17"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker17.jpg"}
            name={t("pages.home.speakers.speakers.speaker17.name")}
            title={t("pages.home.speakers.speakers.speaker17.title")}
            about={t("pages.home.speakers.speakers.speaker17.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker17.talkTitle")}
            social={true}
            github={{ valid: false, link: "" }}
            twitter={{
              valid: true,
              link: "https://twitter.com/padmaja_bhagwat",
            }}
            linkedin={{
              valid: true,
              link: "https://www.linkedin.com/in/padmajavb/",
            }}
          />
          <SpeakerCard
            speaker={"speaker18"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker18.jpg"}
            name={t("pages.home.speakers.speakers.speaker18.name")}
            title={t("pages.home.speakers.speakers.speaker18.title")}
            about={t("pages.home.speakers.speakers.speaker18.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker18.talkTitle")}
            social={true}
            github={{ valid: false, link: "" }}
            twitter={{ valid: false, link: "" }}
            linkedin={{
              valid: true,
              link: "https://ir.linkedin.com/in/pouya-malekinejad",
            }}
          />
          <SpeakerCard
            speaker={"speaker19"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker19.jpg"}
            name={t("pages.home.speakers.speakers.speaker19.name")}
            title={t("pages.home.speakers.speakers.speaker19.title")}
            about={t("pages.home.speakers.speakers.speaker19.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker19.talkTitle")}
            social={false}
            github={{ valid: false, link: "" }}
            twitter={{ valid: false, link: "" }}
            linkedin={{ valid: false, link: "" }}
          />
          <SpeakerCard
            speaker={"speaker20"}
            imageUrl={prefix + "ExclusiveAssets/speakers/images/speaker20.jpg"}
            name={t("pages.home.speakers.speakers.speaker20.name")}
            title={t("pages.home.speakers.speakers.speaker20.title")}
            about={t("pages.home.speakers.speakers.speaker20.about")}
            talkTitle={t("pages.home.speakers.speakers.speaker20.talkTitle")}
            social={true}
            github={{ valid: false, link: "" }}
            twitter={{ valid: false, link: "" }}
            linkedin={{
              valid: true,
              link: "https://www.linkedin.com/in/rohollah-alamalhoda-38b809228",
            }}
          />
        </div>
      </div>
    </section>
  );
}
