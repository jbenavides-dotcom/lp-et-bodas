import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Clock, Mountain, Wifi } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logo from './components/Logo';

import { useScrollReveal } from './hooks/useScrollReveal';
import { useAnalytics } from './hooks/useAnalytics';

import {
  ASSETS,
  STATS,
  CABIN_FEATURES,
  PERFECT_FOR,
  DISTANCE_POINTS,
  PRIVACY_POINTS,
  FAQ_ITEMS,
  WHATSAPP_URL,
  EMAIL,
  NAV_LINKS,
} from './constants';

// ─── WhatsApp floating button ─────────────────────────────────────────────────
function FloatingCTA() {
  const { trackAvailabilityClick } = useAnalytics();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackAvailabilityClick('floating_button')}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-brand-pink text-white shadow-lg hover:bg-brand-pink/90 hover:shadow-xl hover:shadow-brand-pink/40 hover:-translate-y-1 transition-all duration-300"
      aria-label="Cotizar matrimonio"
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </a>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <section className="bg-brand-dark py-10" aria-label="Estadísticas clave">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-brand-gold mb-1">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm sm:text-base mb-0.5">
                {stat.label}
              </div>
              <div className="text-white/50 text-xs sm:text-sm">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Search Section ───────────────────────────────────────────────────────────
function SearchSection() {
  const { ref, isVisible } = useScrollReveal();

  const POETIC_ITEMS = [
    'Ceremonia al aire libre con las montañas como testigo.',
    'Celebraciones íntimas de hasta 40 personas.',
    'Cabañas privadas entre cafetales para tus invitados.',
    'Gastronomía de origen con ingredientes frescos y locales.',
    'Café de especialidad como parte de la celebración.',
    'Experiencia personalizada diseñada contigo.',
  ];

  const PHOTO_GRID = [
    { src: ASSETS.PAREJA_ARCOIRIS,  alt: 'Pareja en la finca cafetera' },
    { src: ASSETS.SALIDA_CONFETI,   alt: 'Salida con confeti en el día de la boda' },
    { src: ASSETS.ABRAZO_DORADA,    alt: 'Abrazo en la hora dorada' },
    { src: ASSETS.MESA_RECEPCION,   alt: 'Mesa de recepción en La Palma & El Tucán' },
  ];

  return (
    <section
      id="espacios"
      ref={ref}
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="espacios-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column — text */}
          <div>
            <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
              Un lugar diferente para una historia única
            </p>
            <h2
              id="espacios-titulo"
              className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-5"
            >
              ¿Por qué elegir La Palma &amp; El Tucán?
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-7">
              Matrimonios íntimos en una finca cafetera reconocida mundialmente.
              Rodeados de montañas, cafetales y bosque de niebla, a solo 90 minutos de Bogotá.
              Una celebración diseñada en armonía con la naturaleza.
            </p>
            <ul className="space-y-3 mb-7">
              {POETIC_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-pink mt-2"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-serif text-brand-dark text-lg italic">
              Un escenario natural e íntimo para celebrar tu historia con calma, conexión y propósito.
            </p>
          </div>

          {/* Right column — 2×2 photo grid */}
          <div className="grid grid-cols-2 gap-3">
            {PHOTO_GRID.map((photo) => (
              <div
                key={photo.src}
                className="rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Cabin Section (wedding spaces) ───────────────────────────────────────────
function CabinSection() {
  const { ref, isVisible } = useScrollReveal();
  const { trackWhatsAppClick } = useAnalytics();

  return (
    <section
      id="cabanas"
      ref={ref}
      className={`py-20 bg-white scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="cabanas-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
            Espacios
          </p>
          <h2
            id="cabanas-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-3"
          >
            Espacios que se integran con la naturaleza
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Rincones entre cafetales, montañas y bosque de niebla donde cada celebración se vive en armonía con el entorno.</p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo Gallery */}
          <div className="flex flex-col gap-2">
            {/* Main photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={ASSETS.PAREJA_ARCOIRIS}
                alt="Pareja en la finca cafetera La Palma & El Tucán"
                className="w-full h-[280px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Bottom row */}
            <div className="grid grid-cols-2 gap-2">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={ASSETS.VOTOS}
                  alt="Votos emotivos en la ceremonia"
                  className="w-full h-[180px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={ASSETS.CHAMPAGNE}
                  alt="Preparativos del día de la boda"
                  className="w-full h-[180px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-brand-dark mb-6">
              Lo que incluye tu boda:
            </h3>
            <ul className="space-y-4 mb-8">
              {CABIN_FEATURES.map((feature) => (
                <li key={feature.text} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-pink/15 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-brand-pink"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 6L4.5 8.5L10 3"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* Perfect for */}
            <div className="bg-brand-light rounded-2xl p-5 mb-8">
              <p className="text-brand-dark font-semibold mb-3 text-sm uppercase tracking-wide">
                Ideal para:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {PERFECT_FOR.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-gray-700 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('cabanas_section')}
                className="flex-1 text-center bg-brand-pink text-white py-3.5 rounded-full font-semibold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-lg hover:shadow-brand-pink/30 hover:-translate-y-0.5"
              >
                Cotizar mi matrimonio
              </a>
              <a
                href="#cotizar"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#cotizar')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 text-center bg-brand-pink text-white py-3.5 rounded-full font-semibold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-lg hover:shadow-brand-pink/30 hover:-translate-y-0.5"
              >
                Ver más
              </a>
            </div>
          </div>
        </div>

        {/* Gallery strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { src: ASSETS.SALIDA_CONFETI,  alt: 'Salida con confeti boda en La Palma & El Tucán' },
            { src: ASSETS.MESA_RECEPCION,  alt: 'Mesa de recepción en la finca cafetera' },
            { src: ASSETS.PAREJA_BAR,      alt: 'Cóctel de boda entre cafetales' },
          ].map((img) => (
            <div key={img.src} className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Experiences Section ──────────────────────────────────────────────────────
function ExperiencesSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      id="experiencias"
      ref={ref}
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="experiencias-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
            La Experiencia
          </p>
          <h2
            id="experiencias-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-3"
          >
            La experiencia de tu matrimonio
          </h2>
          <p className="text-gray-500 text-lg">Cada momento fluye en armonía con la naturaleza, creando una celebración auténtica e inolvidable.</p>
        </div>

        {/* Journey steps with photos */}
        <div className="space-y-12">
          {[
            { number: '01', title: 'Preparativos entre cafetales', description: 'Comienza el día en cabañas privadas rodeadas de bosque y montaña. Calma, luz natural y la emoción compartida antes del gran momento.', image: ASSETS.CHAMPAGNE, alt: 'Preparativos del día de la boda' },
            { number: '02', title: 'La ceremonia', description: 'Al aire libre, con el paisaje como testigo y el sonido del bosque como banda sonora. Un escenario que ningún salón puede replicar.', image: ASSETS.VOTOS, alt: 'Ceremonia al aire libre entre cafetales' },
            { number: '03', title: 'Cóctel al atardecer', description: 'Brinda entre cafetales con coctelería artesanal y música en vivo, mientras la montaña se tiñe de dorado.', image: ASSETS.ABRAZO_DORADA, alt: 'Cóctel al atardecer en la finca' },
            { number: '04', title: 'Cena de origen', description: 'Un banquete inspirado en ingredientes frescos y locales, servido en espacios que se integran con el entorno natural.', image: ASSETS.MESA_RECEPCION, alt: 'Cena farm-to-table en la recepción' },
            { number: '05', title: 'Celebración & Recuerdos', description: 'Risas, abrazos y celebración en un ambiente íntimo, donde cada recuerdo se vive sin prisa.', image: ASSETS.SALIDA_CONFETI, alt: 'Celebración con confeti' },
          ].map((step, i) => (
            <div
              key={step.number}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}
            >
              {/* Photo */}
              <div className={`rounded-2xl overflow-hidden shadow-lg ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={step.image}
                  alt={step.alt}
                  className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              {/* Text */}
              <div className={`flex gap-5 items-start ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-brand-pink flex items-center justify-center shadow-lg shadow-brand-pink/30">
                  <span className="font-serif text-lg font-bold text-white">{step.number}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-brand-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overlay image */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-xl relative">
          <img
            src={ASSETS.PAREJA_ARCOIRIS}
            alt="Pareja en la finca cafetera La Palma & El Tucán con arcoíris de fondo"
            className="w-full h-64 sm:h-80 object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-transparent flex items-center">
            <div className="p-8 max-w-lg">
              <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
                Un escenario natural e íntimo
              </p>
              <p className="font-serif text-white text-xl font-bold leading-snug mb-3">
                Tu celebración en armonía con la naturaleza
              </p>
              <p className="text-white/80 text-sm leading-relaxed mb-2">
                Rincones entre cafetales, montañas y bosque de niebla donde cada celebración se vive en armonía con el entorno.
              </p>
              <p className="text-white/80 text-sm leading-relaxed italic">
                Un lugar diferente para una historia única.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Reviews Section ──────────────────────────────────────────────────────────
function ReviewsSection() {
  const { ref, isVisible } = useScrollReveal();

  const REVIEWS = [
    {
      text: 'Fue el matrimonio de nuestros sueños. Las montañas, los cafetales, el atardecer... todo fue absolutamente mágico. Nuestros invitados aún hablan de esa noche.',
      stars: 5,
      label: 'Boda para 35 invitados',
    },
    {
      text: 'Elegimos La Palma & El Tucán porque queríamos algo diferente, y superó todas nuestras expectativas. La comida, la decoración, el servicio... cada detalle fue perfecto.',
      stars: 5,
      label: 'Boda para 30 invitados',
    },
    {
      text: 'Nuestros invitados llegaron desde Bogotá y quedaron impresionados con el lugar. Las cabañas entre cafetales, la ceremonia al aire libre, la fiesta bajo las estrellas. Inolvidable.',
      stars: 5,
      label: 'Destination wedding',
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-20 bg-brand-dark scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="resenas-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-3">
            Testimonios
          </p>
          <h2
            id="resenas-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-white"
          >
            Historias que comenzaron entre cafetales
          </h2>
          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-brand-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-bold text-lg">4.9</span>
            <span className="text-white/50 text-sm">/ 5</span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-center text-white/50 text-base mt-4 mb-14 max-w-xl mx-auto">
          Parejas que celebraron en La Palma &amp; El Tucán y vivieron una experiencia inolvidable.
        </p>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <article
              key={i}
              className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/12 transition-colors duration-200"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(review.stars)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-brand-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <p className="text-white/80 text-sm leading-relaxed flex-1 italic">
                "{review.text}"
              </p>
              {/* Label */}
              {review.label && (
                <p className="text-brand-gold/70 text-xs font-medium uppercase tracking-wide">
                  {review.label}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Distance Section ─────────────────────────────────────────────────────────
function DistanceSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      id="ubicacion"
      ref={ref}
      className={`py-20 bg-white scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="ubicacion-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
            Cerca de Bogotá
          </p>
          <h2
            id="ubicacion-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark"
          >
            Lejos del ruido. Cerca de todo.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Distance column */}
          <div className="bg-brand-dark rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-brand-gold" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-semibold">
                ¿A qué distancia estamos?
              </h3>
            </div>
            <ul className="space-y-5">
              {DISTANCE_POINTS.map((point) => (
                <li key={point.text} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0 leading-tight">{point.icon}</span>
                  <span className="text-white/85 leading-relaxed">{point.text}</span>
                </li>
              ))}
            </ul>

            {/* Map snippet hint */}
            <div className="mt-8 bg-white/10 rounded-2xl p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-brand-gold" aria-hidden="true" />
                <span className="text-brand-gold text-sm font-semibold">Ruta sugerida</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Bogotá → Facatativá → Zipacón. Sin vías difíciles ni 4x4.
              </p>
            </div>
          </div>

          {/* Privacy column */}
          <div className="bg-brand-light rounded-3xl p-8 border border-brand-beige">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-pink/15 flex items-center justify-center flex-shrink-0">
                <Mountain className="w-5 h-5 text-brand-pink" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-brand-dark">
                ¿La finca es exclusiva?
              </h3>
            </div>
            <ul className="space-y-4">
              {PRIVACY_POINTS.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-pink/15 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-brand-pink"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 6L4.5 8.5L10 3"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 leading-relaxed">{point.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-white rounded-2xl p-4 shadow-sm border border-brand-beige/50">
              <div className="flex items-center gap-2 mb-2">
                <Wifi className="w-4 h-4 text-brand-green" aria-hidden="true" />
                <span className="text-brand-green text-sm font-semibold">
                  Experiencia completa
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Desde la ceremonia hasta el alojamiento de los invitados, todo en un mismo lugar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Urgency Section ──────────────────────────────────────────────────────────
function UrgencySection() {
  const { ref, isVisible } = useScrollReveal();
  const { trackWhatsAppClick } = useAnalytics();
  return (
    <section
      ref={ref}
      className={`py-24 relative overflow-hidden scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="urgencia-titulo"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.DIP}
          alt=""
          className="w-full h-full object-cover object-center scale-105"
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <span className="text-5xl">💍</span>
        </div>

        <h2
          id="urgencia-titulo"
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Las fechas más deseadas{' '}
          <span className="text-brand-pink italic">se reservan con meses de anticipación</span>
        </h2>

        <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Si tienes una fecha en mente, te recomendamos consultarla cuanto antes.
          Escríbenos y verificamos disponibilidad de inmediato.
        </p>

        {/* Availability indicator */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-pink/15 border border-brand-pink/30 text-brand-pink px-5 py-2.5 rounded-full text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
            Agenda limitada para bodas
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('urgency_section')}
            className="w-full sm:w-auto flex items-center justify-center bg-brand-pink text-white px-10 py-[18px] rounded-full text-lg font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-2xl hover:shadow-brand-pink/50 hover:-translate-y-1"
          >
            Consultar disponibilidad
          </a>
          <a
            href="#cotizar"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#cotizar')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto border-2 border-white/40 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-200 hover:-translate-y-1"
          >
            Ver más información
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ──────────────────────────────────────────────────────────────
function FaqSection() {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      ref={ref}
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="faq-titulo"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
            Resolvemos tus dudas
          </p>
          <h2
            id="faq-titulo"
            className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark"
          >
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={index} className="bg-white rounded-2xl shadow-sm border border-brand-beige/50 overflow-hidden">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-light/50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-brand-dark text-base pr-4">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 ml-auto text-brand-pink">
                    {isOpen ? (
                      <ChevronUp size={20} aria-hidden="true" />
                    ) : (
                      <ChevronDown size={20} aria-hidden="true" />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-brand-beige/40 pt-4">
                    {item.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Final ────────────────────────────────────────────────────────────────
function CtaFinal() {
  const { ref, isVisible } = useScrollReveal();
  const { trackWhatsAppClick } = useAnalytics();

  const STEPS = [
    { number: '1', label: 'Cuéntanos tu visión' },
    { number: '2', label: 'Verificamos tu fecha' },
    { number: '3', label: 'Creamos tu propuesta' },
  ];

  return (
    <section
      id="cotizar"
      ref={ref}
      className={`relative py-28 overflow-hidden scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="cta-titulo"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.CAFETALES}
          alt="Cafetales de La Palma & El Tucán al atardecer"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-pink/20 border border-brand-pink/40 text-brand-pink px-4 py-2 rounded-full text-sm font-medium tracking-wide mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse" />
          Fechas Limitadas
        </div>

        <h2
          id="cta-titulo"
          className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Hagamos realidad el matrimonio de sus sueños
        </h2>

        <p className="text-white/70 text-base mb-12">
          Cada matrimonio en La Palma &amp; El Tucán es una experiencia única. Cuéntanos su visión y diseñamos la celebración perfecta.
        </p>

        {/* Steps */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-14">
          {STEPS.map((step, i) => (
            <div key={step.number} className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-brand-pink flex items-center justify-center text-white font-bold text-lg mb-2 shadow-lg shadow-brand-pink/40">
                  {step.number}
                </div>
                <span className="text-white/85 text-sm font-medium text-center max-w-[100px]">
                  {step.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden sm:block w-12 h-0.5 bg-white/20 mt-[-20px]" />
              )}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('cta_final')}
            className="w-full sm:w-auto flex items-center justify-center bg-brand-pink text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-2xl hover:shadow-brand-pink/50 hover:-translate-y-1"
          >
            Cotizar mi matrimonio
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="w-full sm:w-auto bg-brand-pink text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-2xl hover:shadow-brand-pink/50 hover:-translate-y-1"
          >
            Escribir por correo
          </a>
        </div>

        {/* Trust note */}
        <p className="text-white/50 text-sm">
          Respuesta inmediata · Hablamos español · Propuesta personalizada sin costo
        </p>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const { trackWhatsAppClick, trackEmailClick } = useAnalytics();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/10 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Logo variant="light" size="lg" />
            <p className="text-white/50 text-sm mt-4 leading-relaxed max-w-xs">
              Matrimonios en una finca cafetera galardonada internacionalmente. Zipacón, Cundinamarca, a 90 minutos de Bogotá.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Navegación
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(link.href);
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('footer')}
                  className="flex items-center gap-2 text-white/50 hover:text-brand-pink text-sm transition-colors duration-200"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  onClick={() => trackEmailClick('footer')}
                  className="text-white/50 hover:text-brand-pink text-sm transition-colors duration-200 break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="text-white/50 text-sm">
                  Zipacón, Cundinamarca, Colombia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} La Palma &amp; El Tucán. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Bodas en finca cafetera · Zipacón, Cundinamarca · A 90 minutos de Bogotá
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App root ─────────────────────────────────────────────────────────────────
export default function App() {
  useAnalytics(true);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <SearchSection />
        <CabinSection />
        <ExperiencesSection />
        <ReviewsSection />
        <DistanceSection />
        <UrgencySection />
        <FaqSection />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
