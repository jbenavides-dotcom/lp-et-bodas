import type {
  NavLink,
  Experience,
  FaqItem,
  Stat,
  CabinFeature,
  PerfectForItem,
  DistancePoint,
  PrivacyPoint,
} from './types';

// ─── Assets ───────────────────────────────────────────────────────────────────
const CDN = 'https://res.cloudinary.com/dkqocgknd/image/upload/f_auto,q_auto';
const CDN_ALT = 'https://res.cloudinary.com/dsylu9a7k/image/upload';

export const ASSETS = {
  HERO_BG:          `${CDN},w_1600/lpet-matrimonios/ceremonia-panoramica-bw.jpg`,
  PAREJA_ARCOIRIS:  `${CDN},w_1000/lpet-matrimonios/pareja-arcoiris.jpg`,
  VOTOS:            `${CDN},w_1000/lpet-matrimonios/votos-emotivos.jpg`,
  SALIDA_CONFETI:   `${CDN},w_1000/lpet-matrimonios/salida-confeti-dia.jpg`,
  SALIDA_NOCHE:     `${CDN},w_1000/lpet-matrimonios/salida-confeti-noche.jpg`,
  DIP:              `${CDN},w_1000/lpet-matrimonios/dip-romantico.jpg`,
  MESA_RECEPCION:   `${CDN},w_1000/lpet-matrimonios/mesa-recepcion.jpg`,
  PAREJA_BAR:       `${CDN},w_1000/lpet-matrimonios/pareja-bar.jpg`,
  ABRAZO_DORADA:    `${CDN},w_1000/lpet-matrimonios/abrazo-hora-dorada.jpg`,
  NOVIA_RIENDO:     `${CDN},w_1000/lpet-matrimonios/novia-riendo.jpg`,
  CHAMPAGNE:        `${CDN},w_1000/lpet-matrimonios/champagne-preparativos.jpg`,
  BESO_FRENTE:      `${CDN},w_1000/lpet-matrimonios/beso-frente.jpg`,
  PAREJA_SONRIENTE: `${CDN},w_1000/lpet-matrimonios/pareja-sonriente.jpg`,
  // Finca (respaldo)
  CAFETALES:        `${CDN_ALT}/f_auto,q_auto,w_900/lpet/cafetales.png`,
  CABANA:           `${CDN_ALT}/f_auto,q_auto,w_900/lpet/cabana-interior.png`,
} as const;

// ─── Contact & CTAs ───────────────────────────────────────────────────────────
export const WHATSAPP_URL =
  'https://wa.me/573189565617?text=Hola%2C%20quiero%20cotizar%20mi%20matrimonio%20en%20La%20Palma%20%26%20El%20Tuc%C3%A1n';
export const CLOUDBEDS_URL = WHATSAPP_URL; // Para bodas el CTA principal es WhatsApp
export const EMAIL = 'reservas@lapalmayeltucan.com';

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Espacios', href: '#espacios' },
  { label: 'Experiencia', href: '#experiencias' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Cotizar', href: '#cotizar' },
];

// ─── Stats Bar ────────────────────────────────────────────────────────────────
export const STATS: Stat[] = [
  {
    value: 'Hasta 40',
    label: 'Invitados',
    sublabel: 'Bodas íntimas y exclusivas',
  },
  {
    value: '20',
    label: 'Cabañas privadas',
    sublabel: 'Para alojar a tus invitados',
  },
  {
    value: '90 min',
    label: 'Desde Bogotá',
    sublabel: 'Acceso fácil en carro',
  },
  {
    value: '☕',
    label: 'Café de clase mundial',
    sublabel: 'Finca #14 Taste Atlas 2025',
  },
];

// ─── Cabin Features (wedding inclusions) ──────────────────────────────────────
export const CABIN_FEATURES: CabinFeature[] = [
  { text: 'Ceremonia al aire libre en los cafetales o el jardín' },
  { text: 'Recepción y cóctel con vista a la montaña' },
  { text: 'Gastronomía de origen con ingredientes frescos de la finca' },
  { text: 'Alojamiento para parejas e invitados en cabañas privadas' },
  { text: 'Ambientación personalizada en armonía con el entorno natural' },
  { text: 'Café de especialidad (Gesha, Sidra, Mokka) como experiencia diferenciadora' },
];

export const PERFECT_FOR: PerfectForItem[] = [
  { emoji: '💍', label: 'Bodas civiles y religiosas' },
  { emoji: '🌿', label: 'Matrimonios en la naturaleza' },
  { emoji: '🥂', label: 'Celebraciones íntimas' },
  { emoji: '✨', label: 'Parejas que quieren algo único' },
];

// ─── Experiences ──────────────────────────────────────────────────────────────
export const EXPERIENCES: Experience[] = [
  {
    icon: '💍',
    title: 'Ceremonia al Aire Libre',
    description: 'Di "sí, acepto" rodeado de cafetales, montañas y bosque de niebla.',
  },
  {
    icon: '🥂',
    title: 'Recepción & Cóctel',
    description: 'Comparte con tus invitados en espacios integrados al paisaje, con vistas abiertas y atmósfera natural.',
  },
  {
    icon: '🍽️',
    title: 'Gastronomía de Origen',
    description: 'Propuesta elaborada con ingredientes frescos y locales, inspirada en nuestra huerta y el territorio.',
  },
  {
    icon: '🎵',
    title: 'Música en Vivo & DJ',
    description: 'Desde un atardecer acústico hasta una celebración vibrante bajo las estrellas.',
  },
  {
    icon: '🛖',
    title: 'Alojamiento entre Cafetales',
    description: 'Cabañas privadas para que tus invitados vivan la experiencia completa de fin de semana.',
  },
  {
    icon: '✨',
    title: 'Ambientación Personalizada',
    description: 'Cada detalle se diseña en armonía con el entorno y la esencia de tu historia.',
  },
];

// ─── Distance & Privacy ───────────────────────────────────────────────────────
export const DISTANCE_POINTS: DistancePoint[] = [
  { icon: '🚗', text: '90 minutos en carro' },
  { icon: '🛣️', text: 'Acceso fácil desde Bogotá' },
  { icon: '🌤️', text: 'Clima fresco de montaña' },
  { icon: '🌿', text: 'Privacidad real para tu celebración' },
];

export const PRIVACY_POINTS: PrivacyPoint[] = [
  { text: 'La finca entera para tu celebración, sin terceros.' },
  { text: 'Un entorno natural que no necesita decoración excesiva.' },
  { text: 'Cabañas independientes para alojar a tus invitados.' },
  { text: 'Espacios diseñados para la intimidad y el encuentro.' },
];

// ─── FAQ Items ────────────────────────────────────────────────────────────────
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿Cuántos invitados puede recibir la finca para una boda?',
    answer:
      'La Palma & El Tucán está pensada para bodas íntimas y exclusivas de hasta 40 personas. Un espacio donde cada invitado hace parte real del momento, sin aglomeraciones. La finca cuenta con 20 cabañas privadas para alojar a la pareja y los invitados durante todo el fin de semana.',
  },
  {
    question: '¿Qué incluye el paquete de boda?',
    answer:
      'Cada boda se cotiza de forma personalizada. En general incluye: espacio para ceremonia al aire libre, área de recepción y cóctel, gastronomía de origen, café de especialidad, ambientación y alojamiento para la pareja. Contáctanos para una propuesta a medida.',
  },
  {
    question: '¿Se pueden hacer bodas civiles y religiosas?',
    answer:
      'Sí. Realizamos bodas civiles, simbólicas y religiosas. Nuestros espacios al aire libre, rodeados de cafetales y bosque de niebla, son el escenario ideal para cualquier tipo de ceremonia.',
  },
  {
    question: '¿A cuánto está desde Bogotá?',
    answer:
      'A 90 minutos en carro. Ruta sencilla: Bogotá → Facatativá → Zipacón, Cundinamarca. Sin vías difíciles ni necesidad de 4x4. Perfecto para que tus invitados lleguen sin estrés.',
  },
  {
    question: '¿Hay alojamiento para los invitados?',
    answer:
      'Sí. La finca cuenta con cabañas privadas para que la pareja y los invitados más cercanos vivan la experiencia completa. Las cabañas son independientes, construidas en madera natural, con baño privado y terraza.',
  },
  {
    question: '¿Cómo solicito una cotización?',
    answer:
      'Escríbenos por WhatsApp al +57 318 956 5617 o al correo reservas@lapalmayeltucan.com. El equipo responde en minutos y agenda una visita o videollamada para conocer tu visión y preparar una propuesta personalizada.',
  },
];
