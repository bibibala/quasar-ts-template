import type enUS from "src/plugins/i18n/en";

type NestedKeyOf<T> = T extends object
    ? {
          [K in keyof T]: K extends string
              ? T[K] extends object
                  ? `${K}.${NestedKeyOf<T[K]>}` | K
                  : K
              : never;
      }[keyof T]
    : never;
type ExtractKeysOnly<T> = T extends object
    ? {
          [K in keyof T]: T[K] extends object ? ExtractKeysOnly<T[K]> : string;
      }
    : string;

export type I18nMessageKeys = NestedKeyOf<ExtractKeysOnly<typeof enUS>>;

// export type I18nMessageStructure = ExtractKeysOnly<typeof enUS>;
