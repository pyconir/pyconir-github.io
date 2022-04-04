import styles from "./Landing.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Landing() {
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
        className={styles.landingSectionContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <picture>
          <source
            srcSet={prefix + "/GeneralAssets/landingImage-small.png"}
            media="(max-width: 760px)"
          />
          <img
            src={prefix + "/GeneralAssets/landingImage-large.png"}
            alt="landingImage"
            width="100%"
          />
        </picture>
      </div>
    </section>
  );
}
