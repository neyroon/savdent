import vikeReact from "vike-react/config";
import type { Config } from "vike/types";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout

  // https://vike.dev/head-tags
  title: "Стоматология в Саратове без боли и ожиданий — лечим зубы за 1 день!",
  description: "Устраняем боль, восстанавливаем зубы и возвращаем уверенность в улыбке",
  lang: "ru",
  extends: vikeReact,
} satisfies Config;
