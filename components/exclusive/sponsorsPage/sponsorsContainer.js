import styles from "./SponsorsContainer.module.css";

export default function SponsorsContainer(props) {
  return (
    <div className={styles.SponsorsContainer}>
      <div
        className={styles.SponsorsContainerHeader}
        style={{
          backgroundImage: props.color,
        }}
      >
        {props.plan}
      </div>
      <div className={styles.SponsorsContainerBody}>{props.children}</div>
    </div>
  );
}
