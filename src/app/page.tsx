const categories = [
  { icon: "🎂", name: "Cakes", detail: "Birthday, anniversary & more" },
  { icon: "💐", name: "Flowers", detail: "Beautiful fresh bouquets" },
  { icon: "🎁", name: "Combos", detail: "Gifts made extra special" },
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/">Nikku Cakes <span>& More</span></a>
        <nav>
          <a href="#cakes">Cakes</a>
          <a href="#flowers">Flowers</a>
          <a href="#combos">Combos</a>
        </nav>
        <a className="cart-link" href="#shop">Shop gifts →</a>
      </header>

      <section className="hero">
        <p className="eyebrow">MAKE EVERY MOMENT SWEETER</p>
        <h1>Little surprises.<br /><span>Big happiness.</span></h1>
        <p>Beautiful cakes, fresh flowers and thoughtful gift combos for every celebration.</p>
        <a className="primary-button" href="#shop">Explore gifts →</a>
        <div className="hero-art" aria-label="Celebration cake and flowers">
          <span>🎂</span><span>💐</span><span>🎁</span>
        </div>
      </section>

      <section className="benefits">
        <span>🎀 Thoughtful gifting</span>
        <span>🚚 Delivery availability by location</span>
        <span>💳 Secure online payments</span>
      </section>

      <section className="category-section" id="shop">
        <p className="eyebrow">FIND SOMETHING SPECIAL</p>
        <h2>Shop by category</h2>
        <div className="category-grid">
          {categories.map((category) => (
            <a
              className="category-card"
              href={`#${category.name.toLowerCase()}`}
              id={category.name.toLowerCase()}
              key={category.name}
            >
              <span className="category-icon">{category.icon}</span>
              <h3>{category.name}</h3>
              <p>{category.detail}</p>
              <span className="text-link">Explore collection →</span>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <a className="brand" href="/">Nikku Cakes <span>& More</span></a>
        <p>Made with love for your special moments.</p>
        <small>Delhi · Gonda, Uttar Pradesh</small>
      </footer>
    </main>
  );
}
