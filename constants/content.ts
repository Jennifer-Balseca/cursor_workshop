/**
 * Fuente única de verdad para textos y enlaces del sitio.
 * No hardcodear copy de negocio fuera de este archivo.
 */

// ACTUALIZA TU INFO AQUÍ — enlaces y contacto
const contact = {
  /** Teléfono WhatsApp (con o sin +; se normaliza para wa.me) */
  whatsappPhone: "+593995807571",
  whatsappPrefill:
    "Hola,%20me%20interesa%20conocer%20más%20sobre%20Puma%20Real%20Estate",
  email: "contacto@pumarealestate.com",
  instagramUrl: "https://www.instagram.com/pumarealestate",
  /** Ciudad / mercado principal (visible en contacto) */
  cityLabel: "Quito y valles cercanos",
} as const;

const waDigits = String(contact.whatsappPhone).replace(/\D/g, "");

export const anchors = {
  servicios: "#servicios",
  proceso: "#proceso",
  testimonios: "#testimonios",
  portafolio: "#portafolio",
  faq: "#faq",
  contacto: "#contacto",
} as const;

export const links = {
  whatsappUrl: `https://wa.me/${waDigits}?text=${contact.whatsappPrefill}`,
  mailto: `mailto:${contact.email}`,
  instagramUrl: contact.instagramUrl,
  catalogAnchor: anchors.servicios,
} as const;

export const nav = [
  { label: "Servicios", href: anchors.servicios },
  { label: "Proceso", href: anchors.proceso },
  { label: "Resultados", href: anchors.portafolio },
  { label: "FAQ", href: anchors.faq },
  { label: "Contacto", href: anchors.contacto },
] as const;

// ACTUALIZA TU INFO AQUÍ — marca y SEO
export const brand = {
  name: "Puma Real Estate",
  tagline: "Inmobiliaria premium · decisiones con datos, no con prisa",
} as const;

export const seo = {
  title: `${brand.name} | Compra, venta e inversión con asesoría senior`,
  description:
    "Cierras más rápido y con menos fricción: curamos propiedades, negociamos por ti y te acompañamos hasta escritura. Primera respuesta por WhatsApp el mismo día.",
} as const;

// ACTUALIZA TU INFO AQUÍ — hero (marca primero, promesa clara, CTA claro)
export const hero = {
  kicker: brand.name,
  headlineSegments: [
    { text: "Menos vueltas.", gradient: false },
    { text: " Más cierre.", gradient: true },
  ] as const,
  subtitle:
    "Te entregamos un corto listado que sí encaja con tu presupuesto y tu vida —y negociamos cada detalle para que firmes con números claros, no con dudas.",
  primaryCtaLabel: "Pedir una llamada por WhatsApp",
  secondaryCtaLabel: "Ver cómo trabajamos",
  secondaryHref: anchors.proceso,
  /** Imagen editorial (Unsplash); sustituye por fotografía propia cuando la tengas */
  imageSrc:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80",
  imageAlt:
    "Residencia moderna al atardecer, fachada y jardín — referencia visual de propiedad premium",
} as const;

// ACTUALIZA TU INFO AQUÍ — credibilidad / about
export const about = {
  eyebrow: "Por qué existimos",
  title: "Operamos como tu socio, no como un aviso más en internet",
  lead:
    "El mercado inmobiliario está lleno de ruido. Nosotros filtramos señal: menos propiedades irrelevantes, más contexto financiero y legal para que avances con confianza.",
  body: [
    "Si compras, te ahorramos semanas de visitas inútiles y te preparamos para negociar con respaldo de comparables reales. Si vendes, posicionamos tu activo con narrativa y precio defendible frente al comprador.",
    "Trabajamos con abogados y tasadores aliados cuando el caso lo requiere; tú llevas una sola conversación con nosotros.",
  ] as const,
  proofLine:
    "Promedio orientativo de respuesta inicial: mismo día hábil vía WhatsApp.",
} as const;

// ACTUALIZA TU INFO AQUÍ — servicios (beneficio primero en el copy)
export const services = [
  {
    title: "Compra con lista corta",
    benefit:
      "Recibes pocas opciones muy alineadas; coordinamos visitas y checklist legal para que no pierdas tiempo.",
    icon: "home" as const,
  },
  {
    title: "Venta con precio defendible",
    benefit:
      "Precio anclado en comparables, narrativa de valor y seguimiento activo hasta la oferta —sin dejar la negociación al azar.",
    icon: "building" as const,
  },
  {
    title: "Inversión que cuadra en Excel",
    benefit:
      "Proyectamos alquiler, vacancia y escenarios conservadores antes de que muevas un dólar.",
    icon: "land" as const,
  },
  {
    title: "Trámites sin sorpresas",
    benefit:
      "Te guiamos en escrituras, bancos y municipalidad con calendario claro; sabes qué firma qué y cuándo.",
    icon: "map" as const,
  },
] as const;

export const servicesSection = {
  title: "Lo que hacemos contigo",
  intro:
    "Cuatro líneas de trabajo. Un solo estándar: transparencia, ritmo y resultados medibles.",
} as const;

// ACTUALIZA TU INFO AQUÍ — proceso
export const processSection = {
  eyebrow: "Cómo funciona",
  title: "De la primera idea a la firma, en cuatro pasos",
  intro:
    "Sin procesos opacos: en cada etapa sabes qué esperamos de ti y qué entregamos nosotros.",
  steps: [
    {
      n: "01",
      title: "Diagnóstico express",
      text: "30–45 minutos para entender objetivo, presupuesto y plazos. Salimos con una ruta y prioridades.",
    },
    {
      n: "02",
      title: "Curaduría y datos",
      text: "Armamos el universo corto (compra o estrategia de salida) con comparables y riesgos señalados.",
    },
    {
      n: "03",
      title: "Negociación y oferta",
      text: "Defendemos tu posición con argumentos de mercado; revisamos condiciones antes de firmar nada.",
    },
    {
      n: "04",
      title: "Cierre y post-firma",
      text: "Coordinamos firma, entrega de llaves o desembolso; te dejamos checklists de mudanza o renta.",
    },
  ] as const,
} as const;

// ACTUALIZA TU INFO AQUÍ — testimonios (placeholders realistas)
export const testimonialsSection = {
  eyebrow: "Prueba social",
  title: "Personas que querían el mismo resultado que tú",
  intro:
    "Historias reales de clientes que pidieron claridad —y cerraron con menos estrés del que esperaban.",
  items: [
    {
      quote:
        "En dos semanas teníamos tres opciones viables, no veinte fotos bonitas. La negociación nos ahorró más que su fee.",
      name: "María Fernanda L.",
      role: "Compradora · departamento norte de Quito",
    },
    {
      quote:
        "Vendimos en el plazo que prometieron porque el precio venía explicado con números, no con ‘feeling’.",
      name: "Andrés V.",
      role: "Vendedor · casa en Cumbayá",
    },
    {
      quote:
        "Mi primera inversión en renta: me mostraron el flujo neto con vacancia incluida. Durmió tranquila mi contadora.",
      name: "Valeria R.",
      role: "Inversora · arriendo urbano",
    },
  ] as const,
} as const;

// ACTUALIZA TU INFO AQUÍ — portafolio (imágenes placeholder Unsplash)
export const portfolioSection = {
  eyebrow: "Portafolio",
  title: "Ejemplos del tipo de activos que movemos",
  intro:
    "No son promesas de rentabilidad: son referencias de estándar —presentación, ubicación y narrativa de venta.",
  items: [
    {
      title: "Residencia unifamiliar · sector residencial",
      tag: "Venta · alto interés",
      outcome: "Oferta firme en 36 días tras ajuste de precio basado en comparables.",
      imageSrc:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Interior de sala amplia con ventanales y madera clara",
    },
    {
      title: "Penthouse con vista · zona consolidada",
      tag: "Compra asesorada",
      outcome: "Negociación de 6,5% bajo precio publicado con cláusulas de entrega claras.",
      imageSrc:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Casa moderna con piscina y líneas arquitectónicas limpias",
    },
    {
      title: "Edificio de renta corta · micro-ubicación",
      tag: "Inversión",
      outcome: "Proyección de ocupación y cash-flow mensual antes de la oferta.",
      imageSrc:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Apartamento luminoso estilo urbano con cocina integrada",
    },
  ] as const,
} as const;

// ACTUALIZA TU INFO AQUÍ — FAQ
export const faqSection = {
  eyebrow: "Preguntas frecuentes",
  title: "Lo que la gente nos pregunta antes de escribirnos",
  items: [
    {
      q: "¿Cobran por la primera conversación?",
      a: "No. La primera orientación por WhatsApp o llamada corta es gratuita: entendemos tu caso y te decimos si podemos ayudarte y cómo.",
    },
    {
      q: "¿Trabajan solo en Quito?",
      a: `Nos enfocamos en ${contact.cityLabel}, con operación puntual en zonas aledañas cuando el proyecto lo vale. Si tu caso está fuera de cobertura, te decimos con franqueza.`,
    },
    {
      q: "¿Me obligan a ver decenas de propiedades?",
      a: "No. Filtramos agresivamente: preferimos cinco visitas bien elegidas que veinte domingos perdidos.",
    },
    {
      q: "¿Ayudan con crédito hipotecario?",
      a: "Sí, como coordinación: reunimos documentación, alineamos tiempos con el banco y evitamos que la compra se caiga por un trámite mal encajado.",
    },
    {
      q: "¿Cómo definen el precio de venta?",
      a: "Con comparables recientes, estado del activo y velocidad deseada. Ajustamos la estrategia cada 2–3 semanas según feedback del mercado.",
    },
  ] as const,
} as const;

// ACTUALIZA TU INFO AQUÍ — contacto (sección dedicada)
export const contactSection = {
  eyebrow: "Contacto",
  title: "Hablemos de tu siguiente movimiento",
  intro:
    "Escríbenos por el canal que uses más. Pegas contexto (comprar, vender o invertir) y respondemos con siguiente paso concreto, no con un brochure genérico.",
  emailLabel: "Correo",
  whatsappLabel: "WhatsApp",
  instagramLabel: "Instagram",
  hoursLabel: "Horario de respuesta",
  hoursValue: "Lun–Sáb · respuesta inicial el mismo día hábil",
  locationLabel: "Cobertura",
  locationValue: contact.cityLabel,
} as const;

// ACTUALIZA TU INFO AQUÍ — CTA final
export const finalCta = {
  title: "Si estás listo, empezamos con una conversación corta",
  subtitle:
    "Cuéntanos en dos líneas qué necesitas. Te respondemos con claridad sobre tiempos, siguiente reunión y qué información conviene traer.",
  buttonLabel: "Abrir WhatsApp",
} as const;

// ACTUALIZA TU INFO AQUÍ — pie de página
export const footer = {
  blurb:
    "Asesoría inmobiliaria senior para quienes prefieren decisiones con datos, no improvisación.",
  rightsLabel: brand.name,
  connectLabel: "Canales",
  linkLabels: {
    email: "Email",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
  },
  columns: [
    {
      title: "Explorar",
      links: [
        { label: "Servicios", href: anchors.servicios },
        { label: "Proceso", href: anchors.proceso },
        { label: "Testimonios", href: anchors.testimonios },
        { label: "Portafolio", href: anchors.portafolio },
      ],
    },
    {
      title: "Ayuda",
      links: [
        { label: "Preguntas frecuentes", href: anchors.faq },
        { label: "Contacto", href: anchors.contacto },
      ],
    },
  ] as const,
  legalLine:
    "Información orientativa, no asesoría legal ni fiscal. Cada operación requiere revisión profesional según tu caso.",
} as const;
