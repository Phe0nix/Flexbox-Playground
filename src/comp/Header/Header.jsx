export default function Header() {
  return (
    <header className="hero">
      <div className="heroBadge">Interactive CSS Learning</div>
      <h1>Introduction to FlexBox</h1>
      <p className="heroLead">
        Explore every flex property with live controls, instant visual feedback, and practical examples.
      </p>
      <div className="heroActions">
        <a href="#playground" className="btnPrimary">Start Exploring</a>
        <a href="#guide" className="btnGhost">Read Quick Guide</a>
      </div>
    </header>
  )
}