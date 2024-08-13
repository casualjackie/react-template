import styles from "./gallery.module.css";

type GalleryProps = {
  children?: React.ReactNode;
  width: string;
};

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
