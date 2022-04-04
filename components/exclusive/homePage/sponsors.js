import styles from "./Sponsors.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Sponsors() {
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
        className={styles.sponsorsSectionContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.home.sponsors.t1")}</h1>
        <img
          src={
            prefix +
            "/GeneralAssets/titleUnderline" +
            (pagelang() == "en" ? "Flip" : "") +
            ".png"
          }
          alt="titleUnderline"
        />
        <div className={styles.sponsorsLogosContainer}>
          <a
            style={{ textDecoration: "none" }}
            href="https://datachef.co/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <div className={styles.logoContainer}>
              <img
                src={prefix + "ExclusiveAssets/sponsors/sponsor1.svg"}
                alt="sponsor1-Logo"
                className={styles.sponsorsLogo}
              />
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.pythonanywhere.com/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <div className={styles.logoContainer}>
              <img
                src={prefix + "ExclusiveAssets/sponsors/sponsor2.svg"}
                alt="sponsor2-Logo"
                className={styles.sponsorsLogo}
              />
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://parscoders.com/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <div className={styles.logoContainer} style={{ maxWidth: "230px" }}>
              <img
                src={prefix + "ExclusiveAssets/sponsors/sponsor3.png"}
                alt="sponsor3-Logo"
                className={styles.sponsorsLogo}
              />
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.iranserver.com/"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <div className={styles.logoContainer} style={{ maxWidth: "230px" }}>
              <img
                src={prefix + "ExclusiveAssets/sponsors/sponsor4.png"}
                alt="sponsor4-Logo"
                className={styles.sponsorsLogo}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
