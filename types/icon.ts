import {
  FaBook,
  FaCalendar,
  FaChalkboard,
  FaCog,
  FaFileInvoice,
  FaHome,
  FaMoneyBillAlt,
  FaMoneyCheckAlt,
  FaNetworkWired,
  FaPhone,
  FaPizzaSlice,
  FaRegFileAlt,
  FaRegFrown,
  FaThermometerHalf,
  FaVirusSlash,
  FaCaretRight,
  FaSearch,
  FaStarHalfAlt,
  FaUtensils,
  FaRegClock,
  FaTimes,
  FaGripLines,
  FaRegMoneyBillAlt,
  FaCaretLeft,
  FaDog,
  FaRegSun,
  FaRegMoon,
  FaGithub,
  FaVirus,
  FaPen,
  FaRegHeart,
  FaHeart,
  FaApple,
  FaGooglePlay,
  FaFirefox,
  FaMapMarkerAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

export const iconMap = {
  filealt: FaRegFileAlt,
  invoice: FaFileInvoice,
  pizza: FaPizzaSlice,
  chalkboard: FaChalkboard,
  phone: FaPhone,
  network: FaNetworkWired,
  halfthermometer: FaThermometerHalf,
  virusslash: FaVirusSlash,
  virus: FaVirus,
  calendar: FaCalendar,
  book: FaBook,
  moneycheckalt: FaMoneyCheckAlt,
  cog: FaCog,
  frown: FaRegFrown,
  moneybillalt: FaMoneyBillAlt,
  regmoneybillalt: FaRegMoneyBillAlt,
  home: FaHome,
  caretright: FaCaretRight,
  caretleft: FaCaretLeft,
  search: FaSearch,
  starhalf: FaStarHalfAlt,
  utensils: FaUtensils,
  clock: FaRegClock,
  x: FaTimes,
  griplines: FaGripLines,
  dog: FaDog,
  regmoon: FaRegMoon,
  regsun: FaRegSun,
  github: FaGithub,
  pen: FaPen,
  outlineheart: FaRegHeart,
  heart: FaHeart,
  apple: FaApple,
  googleplay: FaGooglePlay,
  firefox: FaFirefox,
  markeralt: FaMapMarkerAlt,
  exclamationtriangle: FaExclamationTriangle,
};
export type IconId = keyof typeof iconMap;
