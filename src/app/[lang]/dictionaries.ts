import { es, type Dict } from "../../content/es";
import { pt } from "../../content/pt";

const dictionaries = { es, pt };

export const locales = Object.keys(dictionaries) as Array<keyof typeof dictionaries>;
export type Locale = (typeof locales)[number];

export const hasLocale = (value: string): value is Locale => value in dictionaries;
export const getDictionary = (locale: Locale): Dict => dictionaries[locale];
