import { Gallery, GalleryCard } from "@/components/gallery/gallery";
import { MixedText } from "@/components/mixedText/mixedText";
import { DARK_THEME, LIGHT_THEME } from "@/styles/theme/theme.constants";
import { useThemeContext } from "@/styles/theme/theme.provider";
import styles from "./styles.module.css";
import { Page } from "@/components/page/page";

const gallery = [
  { color: "lightgray", text: "swipe =>" },
  { color: "lightgreen", text: "<= swipe =>" },
  { color: "lightblue", text: "<== swipe" },
];

export const UiKit = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <Page>
      <div className={styles.themeButtons}>
        <button onClick={() => toggleTheme(DARK_THEME)}>Night theme</button>
        <button onClick={() => toggleTheme(LIGHT_THEME)}>Light theme</button>
      </div>

      <MixedText />

      <Gallery width="1440px">
        {gallery.map((item) => (
          <GalleryCard key={item.color}>
            <div
              className={styles.galleryCard}
              style={{
                backgroundColor: item.color,
              }}
            >
              {item.text}
            </div>
          </GalleryCard>
        ))}
      </Gallery>
    </Page>
  );
};
