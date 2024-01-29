import spanish from "./es.json";
import english from "./en.json";

const LANGS = {
  Spanish: "es",
  English: "en",
} as const;

export const getI18n = ({
  currentLocale = "es",
}: {
  currentLocale: string | undefined;
}) => {
  switch (currentLocale) {
    case LANGS.Spanish:
      return spanish;
    case LANGS.English:
      return english;
    default:
      return spanish;
  }
};
