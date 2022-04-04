import styles from "./JobItem.module.css";
import { useTranslation } from "next-export-i18n";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function JobItem1() {
  const { t } = useTranslation();
  return (
    <a
      style={{ textDecoration: "none" }}
      href="https://links.datachef.co/jd-de-pycon"
      target="_blank"
      rel="noreferrer nofollow noopener"
    >
      <div className={styles.jobItemContainer}>
        <div className={styles.brand}>
          <img
            className={styles.brandImage}
            src={prefix + "/ExclusiveAssets/sponsors/sponsor1.svg"}
            alt=""
          />
        </div>
        <ul className={styles.jobDescription}>
          <li>{t("pages.jobOpportunities.jobs.job1.description.p1")}</li>
        </ul>
        <div className={styles.jobPayment}>
          {t("pages.jobOpportunities.jobs.job1.payment.p1")}
        </div>
      </div>
    </a>
  );
}
