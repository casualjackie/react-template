import styles from "./mixedText.module.css";

/**
 * Example of working with css parameter mix-blend-mode.
 */
export const MixedText = () => {
  return (
    <div className={styles.mixedTextWrapper}>
      <span className={styles.text}>Mix blend mod</span>
      <div></div>
      <div></div>
    </div>
  );
};
