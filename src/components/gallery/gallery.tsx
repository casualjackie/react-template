import styles from "./gallery.module.css";

type GalleryProps = {
  children?: React.ReactNode;
  width: string;
};

/**
 * Gallery that will automatically complete the scroll, so that the displayed component is always shown in full.
 */
export const Gallery = ({ children, width }: GalleryProps) => {
  return (
    <div className={styles.gallery} style={{ width }}>
      {children}
    </div>
  );
};

type GalleryCardProps = {
  children?: React.ReactNode;
};

export const GalleryCard = ({ children }: GalleryCardProps) => {
  return <div className={styles.galleryCard}>{children}</div>;
};
