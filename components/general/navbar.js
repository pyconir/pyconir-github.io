import { useState } from "react";
import styles from "./Navbar.module.css";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Navbar(props) {
  const [sideMenu, setSideMenu] = useState(false);
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
  return (
    <div>
      <div
        className={styles.navbarContainer}
        style={pagelang() == "en" ? { direction: "ltr" } : { direction: "rtl" }}
      >
        <div className={styles.navbarPart1}>
          <div
            className={styles.menu}
            onClick={() => {
              setSideMenu(!sideMenu);
            }}
          >
            <div className={styles.menuLine}></div>
            <div className={styles.menuLine}></div>
            <div className={styles.menuLine}></div>
          </div>
          <div className={styles.logo}>
            <img
              src={prefix + `/GeneralAssets/logo-${pagelang()}.png`}
              alt="logo-image"
              className={styles.logoImage}
            />
          </div>

          {/* ///////////////////////////////////////////////////////////// */}
          <CSSTransition
            in={sideMenu}
            timeout={300}
            classNames={{
              enter: styles.sidebarEnter,
              enterActive: styles.sidebarEnterActive,
              enterDone: styles.sidebarEnterDone,
              exit: styles.sidebarExit,
              exitActive: styles.sidebarExitActive,
              exitDone: styles.sidebarExitDone,
            }}
            unmountOnExit
          >
            <ul className={styles.sidebarList}>
              <NavItem
                navName={t("navbar.items.home.head")}
                navlink=""
              ></NavItem>
              <NavItem
                navName={t("navbar.items.about.head")}
                navlink="about"
              ></NavItem>
              <NavItem
                navName={t("navbar.items.registration.head")}
                navlink="buyTicket"
              ></NavItem>
              <NavItem
                navName={t("navbar.items.sponsor.head")}
                navlink="sponsors"
              ></NavItem>
              <NavItem
                navName={t("navbar.items.schedule.head")}
                navlink="schedule"
              ></NavItem>
              <NavItem
                navName={t("navbar.items.setup.head")}
                navlink="setup"
              ></NavItem>
              <NavItem
                navName={t("navbar.items.become speaker.head")}
                navlink="speak-in-pycon"
              ></NavItem>
            </ul>
          </CSSTransition>

          {/* ///////////////////////////////////////////////////////////// */}

          <ul className={styles.navbarList}>
            <NavItem navName={t("navbar.items.home.head")} navlink=""></NavItem>
            <NavItem navName={t("navbar.items.about.head")} navlink="about">
              <DropDownMenu
                pagesList={[
                  { name: t("navbar.items.about.item1"), link: "about" },
                  {
                    name: t("navbar.items.about.item2"),
                    link: "code-of-conduct",
                  },
                  { name: t("navbar.items.about.item3"), link: "organizers" },
                  {
                    name: t("navbar.items.about.item4"),
                    link: "call-for-logo",
                  },
                ]}
              />
            </NavItem>
            <NavItem
              navName={t("navbar.items.registration.head")}
              navlink="buyTicket"
            >
              <DropDownMenu
                pagesList={[
                  {
                    name: t("navbar.items.registration.item1"),
                    link: "buyTicket",
                  },
                  { name: t("navbar.items.registration.item2"), link: "aid" },
                  {
                    name: t("navbar.items.registration.item3"),
                    link: "jobOpportunities",
                  },
                  {
                    name: t("navbar.items.registration.item4"),
                    link: "startup-row",
                  },
                ]}
              />
            </NavItem>
            <NavItem
              navName={t("navbar.items.sponsor.head")}
              navlink="sponsors"
            >
              <DropDownMenu
                pagesList={[
                  { name: t("navbar.items.sponsor.item1"), link: "sponsors" },
                  {
                    name: t("navbar.items.sponsor.item2"),
                    link: "become-a-sponsor",
                  },
                ]}
              />
            </NavItem>
            <NavItem
              navName={t("navbar.items.schedule.head")}
              navlink="schedule"
            >
              <DropDownMenu
                pagesList={[
                  { name: t("navbar.items.schedule.item1"), link: "schedule" },
                  { name: t("navbar.items.schedule.item2"), link: "speakers" },
                ]}
              />
            </NavItem>
            <NavItem
              navName={t("navbar.items.setup.head")}
              navlink="setup"
            ></NavItem>
            <NavItem
              navName={t("navbar.items.become speaker.head")}
              navlink="speak-in-pycon"
            ></NavItem>
          </ul>
        </div>
        <div className={styles.navbarPart2}>
          <div className={styles.languageButton}>
            <LanguageSwitcher lang="en">
              <div
                onClick={() => {
                  setPageLanguage("en");
                }}
                className={
                  styles.languageButtonItem +
                  " " +
                  "unSelectable" +
                  " " +
                  (pageLanguage == "en"
                    ? styles.languageButtonItemSelected
                    : "")
                }
              >
                EN
              </div>
            </LanguageSwitcher>
            <LanguageSwitcher lang="fa">
              <div
                onClick={() => {
                  setPageLanguage("fa");
                }}
                className={
                  styles.languageButtonItem +
                  " " +
                  "unSelectable" +
                  " " +
                  (pageLanguage == "fa"
                    ? styles.languageButtonItemSelected
                    : "")
                }
              >
                فا
              </div>
            </LanguageSwitcher>
          </div>
          <Link href={{ pathname: "/buyTicket", query: query }}>
            <div className={styles.buyTicketButton + " " + "unSelectable"}>
              {t("navbar.buttons.buy-donate")}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  const [query] = useLanguageQuery();
  return (
    <div
      className={styles.navbarListItem}
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
    >
      <Link href={{ pathname: "/" + (props.navlink || ""), query: query }}>
        <a>
          <div style={{ width: "100%" }}>{props.navName}</div>
        </a>
      </Link>
      {open && props.children}
    </div>
  );
}

function DropDownMenu(props) {
  function DropDownItem(props) {
    const [query] = useLanguageQuery();
    return (
      <Link href={{ pathname: "/" + props.link, query: query }}>
        <div className={styles.dropDownMenuItems}>
          <a>{props.children}</a>
        </div>
      </Link>
    );
  }
  return (
    <div className={styles.dropDownMenu}>
      {props.pagesList.map((pageName) => (
        <DropDownItem key={pageName.name} link={pageName.link}>
          {pageName.name}
        </DropDownItem>
      ))}
    </div>
  );
}
