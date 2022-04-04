import styles from "./Calendar.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import Link from "next/link";

export default function SchedulePage() {
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
    <div className={styles.calendarContainer}>
      <h3 className={styles.dayTitle}>{t("pages.schedule.p1")}</h3>
      <div className={styles.dayContainer}>
        <Link
          href={{
            pathname:
              "/speakers-detail/" +
              t("pages.schedule.workshops.workshop1.page-url"),
            query: query,
          }}
        >
          <div className={styles.workshop}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.workshops.workshop1.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.workshops.workshop1.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.workshops.workshop1.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" +
              t("pages.schedule.workshops.workshop2.page-url"),
            query: query,
          }}
        >
          <div className={styles.workshop}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.workshops.workshop2.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.workshops.workshop2.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.workshops.workshop2.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" +
              t("pages.schedule.workshops.workshop3.page-url"),
            query: query,
          }}
        >
          <div className={styles.workshop}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.workshops.workshop3.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.workshops.workshop3.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.workshops.workshop3.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" +
              t("pages.schedule.workshops.workshop4.page-url"),
            query: query,
          }}
        >
          <div className={styles.workshop}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.workshops.workshop4.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.workshops.workshop4.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.workshops.workshop4.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" + t("pages.schedule.talks.talk5.page-url"),
            query: query,
          }}
        >
          <div className={styles.talk}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.talks.talk5.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.talks.talk5.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.talks.talk5.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" + t("pages.schedule.talks.talk3.page-url"),
            query: query,
          }}
        >
          <div className={styles.talk}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.talks.talk3.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.talks.talk3.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.talks.talk3.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" + t("pages.schedule.talks.talk8.page-url"),
            query: query,
          }}
        >
          <div className={styles.talk}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.talks.talk8.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.talks.talk8.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.talks.talk8.time")}
            </div>
          </div>
        </Link>
      </div>
      <h3 className={styles.dayTitle}>{t("pages.schedule.p2")}</h3>
      <div className={styles.dayContainer}>
        <Link
          href={{
            pathname:
              "/speakers-detail/" + t("pages.schedule.talks.talk2.page-url"),
            query: query,
          }}
        >
          <div className={styles.talk}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.talks.talk2.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.talks.talk2.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.talks.talk2.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" + t("pages.schedule.talks.talk4.page-url"),
            query: query,
          }}
        >
          <div className={styles.talk}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.talks.talk4.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.talks.talk4.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.talks.talk4.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" + t("pages.schedule.talks.talk12.page-url"),
            query: query,
          }}
        >
          <div className={styles.talk}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.talks.talk12.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.talks.talk12.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.talks.talk12.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" + t("pages.schedule.talks.talk7.page-url"),
            query: query,
          }}
        >
          <div className={styles.talk}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.talks.talk7.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.talks.talk7.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.talks.talk7.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" + t("pages.schedule.talks.talk9.page-url"),
            query: query,
          }}
        >
          <div className={styles.talk}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.talks.talk9.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.talks.talk9.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.talks.talk9.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" + t("pages.schedule.talks.talk1.page-url"),
            query: query,
          }}
        >
          <div className={styles.talk}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.talks.talk1.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.talks.talk1.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.talks.talk1.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" + t("pages.schedule.talks.talk13.page-url"),
            query: query,
          }}
        >
          <div className={styles.talk}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.talks.talk13.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.talks.talk13.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.talks.talk13.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" + t("pages.schedule.talks.talk14.page-url"),
            query: query,
          }}
        >
          <div className={styles.talk}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.talks.talk14.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.talks.talk14.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.talks.talk14.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" + t("pages.schedule.talks.talk15.page-url"),
            query: query,
          }}
        >
          <div className={styles.talk}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.talks.talk15.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.talks.talk15.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.talks.talk15.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" + t("pages.schedule.talks.talk11.page-url"),
            query: query,
          }}
        >
          <div className={styles.talk}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.talks.talk11.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.talks.talk11.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.talks.talk11.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" + t("pages.schedule.talks.talk16.page-url"),
            query: query,
          }}
        >
          <div className={styles.talk}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.talks.talk16.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.talks.talk16.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.talks.talk16.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" + t("pages.schedule.talks.talk6.page-url"),
            query: query,
          }}
        >
          <div className={styles.talk}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.talks.talk6.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.talks.talk6.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.talks.talk6.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" + t("pages.schedule.talks.talk17.page-url"),
            query: query,
          }}
        >
          <div className={styles.talk}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.talks.talk17.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.talks.talk17.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.talks.talk17.time")}
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname:
              "/speakers-detail/" + t("pages.schedule.talks.talk18.page-url"),
            query: query,
          }}
        >
          <div className={styles.talk}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.talks.talk18.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.talks.talk18.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.talks.talk18.time")}
            </div>
          </div>
        </Link>

        <Link
          href={{
            pathname:
              "/speakers-detail/" + t("pages.schedule.talks.talk10.page-url"),
            query: query,
          }}
        >
          <div className={styles.talk}>
            <div className={styles.talkTitle}>
              {t("pages.schedule.talks.talk10.title")}
            </div>
            <div className={styles.speaker}>
              {t("pages.schedule.talks.talk10.speaker")}
            </div>
            <div className={styles.speakeTime}>
              {t("pages.schedule.talks.talk10.time")}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
