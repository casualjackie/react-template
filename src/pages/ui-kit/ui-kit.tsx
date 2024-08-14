import { Gallery, GalleryCard } from "@/components/gallery/gallery";
import { MixedText } from "@/components/mixedText/mixedText";
import { DARK_THEME, LIGHT_THEME } from "@/styles/theme/theme.constants";
import { useThemeContext } from "@/styles/theme/theme.provider";
import styles from "./styles.module.css";
import { Page } from "@/components/page/page";
import { Accordion } from "@/components/accordion/accordion";

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

      <div style={{ display: "flex", flexDirection: "column", rowGap: "4px" }}>
        <Accordion title="К Чаадаеву" groupName="pushkin">
          Любви, надежды, тихой славы Недолго нежил нас обман, Исчезли юные
          забавы, Как сон, как утренний туман; Но в нас горит еще желанье, Под
          гнетом власти роковой Нетерпеливою душой Отчизны внемлем призыванье.
          Мы ждем с томленьем упованья Минуты вольности святой, Как ждет
          любовник молодой Минуты верного свиданья. Пока свободою горим, Пока
          сердца для чести живы, Мой друг, отчизне посвятим Души прекрасные
          порывы! Товарищ, верь: взойдет она, Звезда пленительного счастья,
          Россия вспрянет ото сна, И на обломках самовластья Напишут наши имена!
        </Accordion>
        <Accordion title="Узник" groupName="pushkin">
          Сижу за решеткой в темнице сырой. Вскормленный в неволе орел молодой,
          Мой грустный товарищ, махая крылом, Кровавую пищу клюет под окном,
          Клюет, и бросает, и смотрит в окно, Как будто со мною задумал одно.
          Зовет меня взглядом и криком своим И вымолвить хочет: «Давай улетим!
          Мы вольные птицы; пора, брат, пора! Туда, где за тучей белеет гора,
          Туда, где синеют морские края, Туда, где гуляем лишь ветер… да я!..»
        </Accordion>
        <Accordion title="Тучи">
          Тучки небесные, вечные странники! Степью лазурною, цепью жемчужною
          Мчитесь вы, будто как я же, изгнанники С милого севера в сторону
          южную. Кто же вас гонит: судьбы ли решение? Зависть ли тайная? злоба
          ль открытая? Или на вас тяготит преступление? Или друзей клевета
          ядовитая? Нет, вам наскучили нивы бесплодные… Чужды вам страсти и
          чужды страдания; Вечно холодные, вечно свободные, Нет у вас родины,
          нет вам изгнания.
        </Accordion>
      </div>
    </Page>
  );
};
