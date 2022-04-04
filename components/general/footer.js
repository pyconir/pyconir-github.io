import styles from "./Footer.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

export default function Footer() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const [winHeight, setWinHeight] = useState(4000);
  const { t } = useTranslation();
  const [pageLanguage, setPageLanguage] = useState("fa");
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
  useEffect(() => {
    setWinHeight(document.body.scrollHeight);
    window.addEventListener("resize", () => {
      setWinHeight(document.body.scrollHeight);
    });
  }, []);
  return (
    <div>
      <div className={styles.footerContainer}>
        <div
          className={styles.background}
          style={{ top: `${winHeight - 340}px` }}
        >
          <div className={styles.circle}></div>
        </div>
        <div className={styles.footerDownContainer}>
          <div className={styles.footerHeader}>
            PyCon <span className={styles.headerIran}>Iran</span>
          </div>
          <div className={styles.footerNav}>
            <div className={styles.socialsContainer}>
              <a
                style={{ textDecoration: "none" }}
                href="https://discord.gg/Z48FsGfhmv"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className={styles.socialImage}
                  src={prefix + `/GeneralAssets/discord.svg`}
                  alt="discord-icon"
                />
              </a>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.youtube.com/channel/UC4h9WMROnH__sbdzOBW6l_w/featured"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className={styles.socialImage}
                  src={prefix + `/GeneralAssets/youtube.svg`}
                  alt="youtube-icon"
                />
              </a>
              <a
                style={{ textDecoration: "none" }}
                href="https://twitter.com/pyconir"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className={styles.socialImage}
                  src={prefix + `/GeneralAssets/twitter.svg`}
                  alt="twitter-icon"
                />
              </a>
              {/* <a href="">
                <img
                  className={styles.socialImage}
                  src={prefix + `/GeneralAssets/youtube.svg`}
                  alt="youtube-icon"
                />
              </a> */}
              <a
                style={{ textDecoration: "none" }}
                href="https://instagram.com/pyconir/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className={styles.socialImage}
                  src={prefix + `/GeneralAssets/instagram.svg`}
                  alt="instagram-icon"
                />
              </a>
              <a
                style={{ textDecoration: "none" }}
                href="https://github.com/pyconir"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className={styles.socialImage}
                  src={prefix + `/GeneralAssets/github.svg`}
                  alt="github-icon"
                />
              </a>
            </div>
            <div className={styles.footerNavItemsContainer}>
              <Link href={{ pathname: "/about", query: query }}>
                <div className={styles.footerNavItem}>
                  {t("footer.items.footerItem1")}
                </div>
              </Link>
              <Link href={{ pathname: "/code-of-conduct", query: query }}>
                <div className={styles.footerNavItem}>
                  {t("footer.items.footerItem2")}
                </div>
              </Link>
            </div>
            <div
              className={styles.footerEmail}
              style={
                pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }
              }
            >
              {t("footer.items.footerEmailcontact")}
              <span>
                <a
                  className={styles.footerMailAddress}
                  href="mailto:team@ir.pycon.org"
                  style={{ textDecoration: "none" }}
                >
                  {t("footer.items.footerEmail")}
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.footerTexts}>&copy;2021 PyCon Iran</div>
      </div>
    </div>
  );
}
