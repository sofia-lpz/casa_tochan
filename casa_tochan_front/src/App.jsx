import { useState } from "react";
import "./App.css";

// ─── Color tokens (used only for dynamic per-product values) ───
const C = {
  black: "#0D0D0D",
  gold: "#F5C800",
  red: "#CC2222",
  orange: "#E06A18",
  green: "#2E8B1A",
  white: "#FFFDF5",
};

// ─── Data ──────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    name: "Huipil Bordado",
    category: "Blusas",
    price: 850,
    description: "Blusa tradicional con bordado a mano en hilos de colores vivos",
    bg: C.gold,
    badgeBg: C.red,
    badgeColor: C.white,
    patternStroke: "#000",
    emoji: "🌺",
    tags: ["Hecho a mano", "Algodón"],
  },
  {
    id: 2,
    name: "Rebozo Artesanal",
    category: "Accesorios",
    price: 1200,
    description: "Tejido en telar de cintura con diseños geométricos ancestrales",
    bg: C.green,
    badgeBg: C.black,
    badgeColor: C.white,
    patternStroke: "#fff",
    emoji: "🌿",
    tags: ["Telar de cintura", "Lana"],
  },
  {
    id: 3,
    name: "Falda Tehuana",
    category: "Faldas",
    price: 1650,
    description: "Falda larga con flores bordadas a mano, inspirada en el Istmo",
    bg: C.red,
    badgeBg: C.gold,
    badgeColor: C.black,
    patternStroke: "#fff",
    emoji: "🌸",
    tags: ["Bordado", "Seda"],
  },
  {
    id: 4,
    name: "Camisa Manta",
    category: "Camisas",
    price: 620,
    description: "Camisa de manta natural con deshilado artesanal en los bordes",
    bg: C.orange,
    badgeBg: C.black,
    badgeColor: C.white,
    patternStroke: "#000",
    emoji: "🌾",
    tags: ["Manta", "Natural"],
  },
  {
    id: 5,
    name: "Bolsa Otomí",
    category: "Accesorios",
    price: 480,
    description: "Bolsa de tela con bordado otomí, figuras de animales y flores",
    bg: C.black,
    badgeBg: C.gold,
    badgeColor: C.black,
    patternStroke: "#fff",
    emoji: "🦋",
    tags: ["Bordado otomí", "Hecho a mano"],
  },
  {
    id: 6,
    name: "Vestido Mazahua",
    category: "Vestidos",
    price: 2100,
    description: "Vestido ceremonial con bordado multicolor y listones trenzados",
    bg: C.gold,
    badgeBg: C.green,
    badgeColor: C.white,
    patternStroke: "#000",
    emoji: "✨",
    tags: ["Ceremonial", "Algodón"],
  },
];

const categories = ["Todos", "Blusas", "Faldas", "Vestidos", "Camisas", "Accesorios"];

const FLAG_STRIPES = [
  { color: C.green, opacity: 1 },
  { color: C.green, opacity: 1 },
  { color: C.white, opacity: 0.6 },
  { color: C.white, opacity: 0.6 },
  { color: C.red, opacity: 1 },
  { color: C.red, opacity: 1 },
];

// ─── Product Card ──────────────────────────────────────────────
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card__image" style={{ background: product.bg }}>
        <svg className="product-card__pattern" width="100%" height="100%">
          <pattern
            id={`pat${product.id}`}
            x="0" y="0" width="30" height="30"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M15 2 L28 15 L15 28 L2 15 Z"
              fill="none"
              stroke={product.patternStroke}
              strokeWidth="0.8"
            />
          </pattern>
          <rect width="100%" height="100%" fill={`url(#pat${product.id})`} />
        </svg>

        <span className="product-card__emoji">{product.emoji}</span>

        <div
          className="product-card__badge"
          style={{ background: product.badgeBg, color: product.badgeColor }}
        >
          {product.category}
        </div>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>

        <div className="product-card__tags">
          {product.tags.map(tag => (
            <span key={tag} className="product-card__tag">{tag}</span>
          ))}
        </div>

        <hr className="product-card__divider" />

        <div className="product-card__footer">
          <span className="product-card__price">
            ${product.price.toLocaleString("es-MX")}
            <span className="product-card__price-unit">MXN</span>
          </span>

        </div>
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────
export default function TochanShop() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="tochan-page">

      {/* Header */}
      <header className="tochan-header">
        <div>
          <h1 className="tochan-header__name">Tochan</h1>
          <p className="tochan-header__sub">Nuestra Casa</p>
        </div>
      </header>

      {/* Hero */}
      <section className="tochan-hero">
        <div className="tochan-hero__green-bar" />

        <svg className="tochan-hero__bg-pattern" width="100%" height="100%">
          <pattern id="hero-pat" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M24 4 L44 24 L24 44 L4 24 Z" fill="none" stroke="#F5C800" strokeWidth="1" />
            <circle cx="24" cy="24" r="2.5" fill="#F5C800" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-pat)" />
        </svg>

        <p className="tochan-hero__eyebrow">Casa Tochan</p>
        <h2 className="tochan-hero__title">
          Arte que lleva historia<br />
          <em>en cada trazo</em>
        </h2>
        <p className="tochan-hero__desc">
          En Tochan (del náhuatl: «nuestra casa»)
          ofrecen a sus huéspedes atención
          psicológica, médica y jurídica, así como
          orientación para la inserción laboral, 
          actividades culturales y recreativas, brindando 
          un espacio de confianza durante su estancia en 
          nuestro país.
        </p>
      </section>

      {/* Filter bar */}
      <div className="tochan-filters">
        <span className="tochan-filters__label">Categoría:</span>
        {categories.map(cat => (
          <button
            key={cat}
            className={`cat-btn${activeCategory === cat ? " active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
        <span className="tochan-filters__count">
          {filtered.length} {filtered.length === 1 ? "pieza" : "piezas"}
        </span>
      </div>

      {/* Product grid */}
      <main className="tochan-main">
        <div className="shop-grid">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="tochan-footer">
        <p className="tochan-footer__name">Tochan · Nuestra Casa</p>
        <p className="tochan-footer__tagline">
           Un hogar para quienes más lo necesitan
        </p>
      </footer>
    </div>
  );
}