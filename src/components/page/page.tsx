import styles from "./styles.module.css";

type PageProps = {
  children?: React.ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return <main className={styles.page}>{children}</main>;
};
