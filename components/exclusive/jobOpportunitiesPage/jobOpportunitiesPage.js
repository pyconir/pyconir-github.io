import styles from "./JobOpportunitiesPage.module.css";
import SendJobButton from "./sendJobButton";
import JobItem1 from "./jobItem1";
import JobItem2 from "./jobItem2";
import JobItem3 from "./jobItem3";
import JobItem4 from "./jobItem4";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function JobOpportunitiesPage() {
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
        className={styles.jobOpportunitiesPageContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <h1>{t("pages.jobOpportunities.page.t1")}</h1>
        <div className={"bodyText"}>{t("pages.jobOpportunities.page.p1")}</div>
        <SendJobButton />
        <JobItem1 />
        <JobItem2 />
        <JobItem4 />
        <br />
        <h3>{t("pages.jobOpportunities.page.t2")}</h3>
        <JobItem3 />
      </div>
    </section>
  );
}
