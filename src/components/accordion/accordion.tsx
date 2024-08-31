import styles from "./styles.module.css";

export type AccordionOnToggle = React.SyntheticEvent<HTMLDetailsElement>;

type AccordionProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  open?: boolean;
  onToggle?: (event: AccordionOnToggle) => void;
  groupName?: string;
};

/**
 * @param open Use only as initial value. You can't control component with this param all the time.
 * @param groupName Use the same names if you want to group components. Components assembled in a group will keep only one component open at a time.
 * 
 * Example of the work of accordion on pure css.
 * But may lack control over component, check out description of params before starting work.
 */
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
