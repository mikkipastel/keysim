import cyrillic from "./cyrillic.json";
import hiragana from "./hiragana.json";
import katakana from "./katakana.json";
import hangul from "./hangul.json";
import arabic from "./arabic.json";
import greek from "./greek.json";
import hebrew from "./hebrew.json";
import chinese from "./chinese.json";
import devanagari from "./devanagari.json";
import czech from "./czech.json";
import th_kedmanee from "./th-kedmanee";
import th_pattajoti from "./th-pattajoti";
import th_manoonchai from "./th-manoonchai";

const SUBS = {
  arabic: arabic,
  cyrillic: cyrillic,
  chinese: chinese,
  greek: greek,
  hangul: hangul,
  hebrew: hebrew,
  hiragana: hiragana,
  katakana: katakana,
  devanagari: devanagari,
  czech: czech,
  th_kedmanee: th_kedmanee,
  th_pattajoti: th_pattajoti,
  th_manoonchai: th_manoonchai,
};

export default SUBS;

export const subOptions = Object.keys(SUBS);
