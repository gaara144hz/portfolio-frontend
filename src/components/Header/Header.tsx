import './Header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">João Vitor <span>&lt;Dev/&gt;</span></h1>
        <nav className="header__nav">
          <a href="#projects">Projetos</a>
          <a href="#skills">Habilidades</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  );
}