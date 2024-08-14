import styles from "./styles.module.css";

export type AccordionOnToggle = React.SyntheticEvent<HTMLDetailsElement>;

type AccordionProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  open?: boolean;
  onToggle?: (event: AccordionOnToggle) => void;
  groupName?: string;
};

export const Accordion = ({
  open,
  onToggle,
  title,
  children,
  groupName,
}: AccordionProps) => {
  return (
    <div className={styles.accordion}>
      <details
        open={open}
        onToggle={onToggle}
        className={styles.details}
        name={groupName}
      >
        <summary className={styles.summary}>{title}</summary>
      </details>

      <div className={styles.content}>{children}</div>
    </div>
  );
};
