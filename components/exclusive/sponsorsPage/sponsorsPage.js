import styles from "./SponsorsPage.module.css";
import SponsorsContainer from "./sponsorsContainer";
import BecomeSponserButton from "./becomeSponserButton";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import Link from "next/dist/client/link";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function SponsorsPage() {
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
        className={styles.sponsorsPageContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.sponsors.page.t1")}</h1>
        <div className={"bodyText"}>{t("pages.sponsors.page.p1")}</div>
        <BecomeSponserButton />
        <div className={styles.sponsorsDescriptionsContainer}>
          <div className={styles.sponsorCard}>
            <div className={styles.sponsorLogoContainer}>
              <a
                style={{ textDecoration: "none" }}
                href="https://datachef.co/"
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                <img
                  src={prefix + "ExclusiveAssets/sponsors/sponsor1.svg"}
                  alt="sponsor1-Logo"
                  className={styles.sponsorLogo}
                />
              </a>
            </div>
            <div className={styles.sponsorDescription}>
              <span>{t("pages.sponsors.sponsors.sponsor1.span1")}</span>
              <span
                style={
                  pagelang() == "en" ? { textDecoration: "line-through" } : {}
                }
              >
                {t("pages.sponsors.sponsors.sponsor1.span2")}
              </span>
              <span>{t("pages.sponsors.sponsors.sponsor1.span3")}</span>
              <span>{t("pages.sponsors.sponsors.sponsor1.span4")}</span>
              <Link href={{ pathname: "/jobOpportunities", query: query }}>
                <span style={{ cursor: "pointer", color: "#5999b3" }}>
                  {t("pages.sponsors.sponsors.sponsor1.span5")}
                </span>
              </Link>
              <span>{t("pages.sponsors.sponsors.sponsor1.span6")}</span>
            </div>
          </div>
          <div className={styles.sponsorCard}>
            <div className={styles.sponsorLogoContainer}>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.pythonanywhere.com/"
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                <img
                  src={prefix + "ExclusiveAssets/sponsors/sponsor2.svg"}
                  alt="sponsor2-Logo"
                  className={styles.sponsorLogo}
                />
              </a>
            </div>
            <div className={styles.sponsorDescription}>
              <p>{t("pages.sponsors.sponsors.sponsor2.p1")}</p>
            </div>
          </div>
          <div className={styles.sponsorCard}>
            <div
              className={styles.sponsorLogoContainer}
              style={{ maxWidth: "200px" }}
            >
              <a
                style={{ textDecoration: "none" }}
                href="https://www.iranserver.com/"
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                <img
                  src={prefix + "ExclusiveAssets/sponsors/sponsor4.png"}
                  alt="sponsor4-Logo"
                  className={styles.sponsorLogo}
                />
              </a>
            </div>
            <div className={styles.sponsorDescription}>
              <span>{t("pages.sponsors.sponsors.sponsor4.p1")}</span>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.iranserver.com/cloud"
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                <span style={{ cursor: "pointer", color: "#5999b3" }}>
                  {t("pages.sponsors.sponsors.sponsor4.p2")}
                </span>
              </a>
              <span>{t("pages.sponsors.sponsors.sponsor4.p3")}</span>
              <p>{t("pages.sponsors.sponsors.sponsor4.p4")}</p>
            </div>
          </div>
          <div className={styles.sponsorCard}>
            <div
              className={styles.sponsorLogoContainer}
              style={{ maxWidth: "200px" }}
            >
              <a
                style={{ textDecoration: "none" }}
                href="https://parscoders.com/"
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                <img
                  src={prefix + "ExclusiveAssets/sponsors/sponsor3.png"}
                  alt="sponsor3-Logo"
                  className={styles.sponsorLogo}
                />
              </a>
            </div>
            <div className={styles.sponsorDescription}>
              <p>{t("pages.sponsors.sponsors.sponsor3.p1")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
