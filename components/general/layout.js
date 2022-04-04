import styles from "./Layout.module.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { CSSTransition } from "react-transition-group";

export default function Layout(props) {
  return (
    <div className={styles.layoutContainer}>
      <CSSTransition
        in={true}
        appear={true}
        timeout={300}
        classNames={{
          appear: styles.appear,
          appearActive: styles.activeAppear,
          appearDone: styles.doneAppear,
          enter: styles.enter,
          enterActive: styles.activeEnter,
          enterDone: styles.doneEnter,
          exit: styles.exit,
          exitActive: styles.activeExit,
          exitDone: styles.doneExit,
        }}
      >
        <div>
          <Navbar />
          <div>{props.children}</div>
          <Footer />
        </div>
      </CSSTransition>
    </div>
  );
}
