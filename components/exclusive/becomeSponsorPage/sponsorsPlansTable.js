import styles from "./SponsorsPlansTable.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function SponsorsPlansTable() {
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
    <div>
      <div
        className={styles.plansTableContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableDarkRows}>
              <td className={styles.tableFirstColumn}>
                {t("pages.becomeSponsor.table.r1c1")}
              </td>
              <td className={styles.tableItems + " " + styles.middle}>
                {t("pages.becomeSponsor.table.r1c2")}
              </td>
              <td className={styles.tableItems + " " + styles.middle}>
                {t("pages.becomeSponsor.table.r1c3")}
              </td>
              <td className={styles.tableItems + " " + styles.middle}>
                {t("pages.becomeSponsor.table.r1c4")}
              </td>
              <td className={styles.tableItems + " " + styles.middle}>
                {t("pages.becomeSponsor.table.r1c5")}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tableLightRows}>
              <td className={styles.tableFirstColumn}>
                {t("pages.becomeSponsor.table.r2c1")}
              </td>
              <td className={styles.tableItems + " " + styles.middle}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems + " " + styles.middle}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
            </tr>
            <tr className={styles.tableDarkRows}>
              <td className={styles.tableFirstColumn}>
                {t("pages.becomeSponsor.table.r3c1")}
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
            </tr>
            <tr className={styles.tableLightRows}>
              <td className={styles.tableFirstColumn}>
                {t("pages.becomeSponsor.table.r4c1")}
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
            </tr>
            <tr className={styles.tableDarkRows}>
              <td className={styles.tableFirstColumn}>
                {t("pages.becomeSponsor.table.r5c1")}
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
            </tr>
            <tr className={styles.tableLightRows}>
              <td className={styles.tableFirstColumn}>
                {t("pages.becomeSponsor.table.r6c1")}
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
                <div>2</div>
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
                <div>2</div>
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
                <div>1</div>
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
                <div>1</div>
              </td>
            </tr>
            <tr className={styles.tableDarkRows}>
              <td className={styles.tableFirstColumn}>
                {t("pages.becomeSponsor.table.r7c1")}
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
            </tr>
            <tr className={styles.tableLightRows}>
              <td className={styles.tableFirstColumn}>
                {t("pages.becomeSponsor.table.r8c1")}
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
            </tr>
            <tr className={styles.tableDarkRows}>
              <td className={styles.tableFirstColumn}>
                {t("pages.becomeSponsor.table.r9c1")}
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/cross.png"}
                  alt="cross"
                />
              </td>
            </tr>
            <tr className={styles.tableLightRows}>
              <td className={styles.tableFirstColumn}>
                {t("pages.becomeSponsor.table.r10c1")}
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/cross.png"}
                  alt="cross"
                />
              </td>
            </tr>
            <tr className={styles.tableDarkRows}>
              <td className={styles.tableFirstColumn}>
                {t("pages.becomeSponsor.table.r11c1")}
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/cross.png"}
                  alt="cross"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/cross.png"}
                  alt="cross"
                />
              </td>
            </tr>
            <tr className={styles.tableLightRows}>
              <td className={styles.tableFirstColumn}>
                {t("pages.becomeSponsor.table.r12c1")}{" "}
                <span>
                  <img
                    className={styles.exmark}
                    src={prefix + "/GeneralAssets/exmark.png"}
                    alt="exmark"
                  />
                </span>
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/check.png"}
                  alt="check"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/cross.png"}
                  alt="cross"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/cross.png"}
                  alt="cross"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/cross.png"}
                  alt="cross"
                />
              </td>
            </tr>
            <tr className={styles.tableDarkRows}>
              <td className={styles.tableFirstColumn}>
                {t("pages.becomeSponsor.table.r13c1")}
              </td>
              <td className={styles.tableItems}>
                {t("pages.becomeSponsor.table.r13c2")}
              </td>
              <td className={styles.tableItems}>
                {t("pages.becomeSponsor.table.r13c3")}
              </td>
              <td className={styles.tableItems}>
                {t("pages.becomeSponsor.table.r13c4")}
              </td>
              <td className={styles.tableItems}>
                {t("pages.becomeSponsor.table.r13c5")}
              </td>
            </tr>
            <tr className={styles.tableLightRows}>
              <td className={styles.tableFirstColumn}>
                {t("pages.becomeSponsor.table.r14c1")}{" "}
                <span>
                  <img
                    className={styles.exmark}
                    src={prefix + "/GeneralAssets/exmark.png"}
                    alt="exmark"
                  />
                </span>
              </td>
              <td className={styles.tableItems}>2</td>
              <td className={styles.tableItems}>1</td>
              <td className={styles.tableItems}>1</td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/cross.png"}
                  alt="cross"
                />
              </td>
            </tr>
            <tr className={styles.tableDarkRows}>
              <td className={styles.tableFirstColumn}>
                {t("pages.becomeSponsor.table.r15c1")}{" "}
                <span>
                  <img
                    className={styles.exmark}
                    src={prefix + "/GeneralAssets/exmark.png"}
                    alt="exmark"
                  />
                </span>
              </td>
              <td className={styles.tableItems}>2</td>
              <td className={styles.tableItems}>1</td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/cross.png"}
                  alt="cross"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/cross.png"}
                  alt="cross"
                />
              </td>
            </tr>
            <tr className={styles.tableLightRows}>
              <td className={styles.tableFirstColumn}>
                {t("pages.becomeSponsor.table.r16c1")}{" "}
                <span>
                  <img
                    className={styles.exmark}
                    src={prefix + "/GeneralAssets/exmark.png"}
                    alt="exmark"
                  />
                </span>
              </td>
              <td className={styles.tableItems}>1</td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/cross.png"}
                  alt="cross"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/cross.png"}
                  alt="cross"
                />
              </td>
              <td className={styles.tableItems}>
                <img
                  className={styles.marks}
                  src={prefix + "/GeneralAssets/cross.png"}
                  alt="cross"
                />
              </td>
            </tr>
            <tr className={styles.tableDarkRows}>
              <td className={styles.tableFirstColumn}>
                {t("pages.becomeSponsor.table.r17c1")}
              </td>
              <td className={styles.tableItems}>10</td>
              <td className={styles.tableItems}>6</td>
              <td className={styles.tableItems}>3</td>
              <td className={styles.tableItems}>2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className={"bodyText"}>
        <span>
          <img
            className={styles.exmark}
            src={prefix + "/GeneralAssets/exmark.png"}
            alt="exmark"
          />
        </span>{" "}
        {t("pages.becomeSponsor.p3")}
      </div>
      <div className={"bodyText"}>
        <span>
          <img
            className={styles.exmark}
            src={prefix + "/GeneralAssets/exmark.png"}
            alt="exmark"
          />
        </span>{" "}
        {t("pages.becomeSponsor.p4")}
      </div>
    </div>
  );
}
