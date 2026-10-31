import './Hero.scss';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <span className="hero__badge">Desenvolvedor Front-End</span>
        <h1 className="hero__title">
          Transformando ideias em código e interfaces modernas.
        </h1>
        <p className="hero__description">
          Olá! Sou o <strong>João Vitor</strong>. Desenvolvo aplicações web focadas em experiência do usuário, código limpo e componentes reutilizáveis utilizando <strong>React</strong>, <strong>TypeScript</strong> e <strong>Sass</strong>.
        </p>
        
        <div className="hero__actions">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer" 
            className="hero__btn hero__btn--primary"
          >
            Meu GitHub
          </a>
          <a 
            href="#contact" 
            className="hero__btn hero__btn--secondary"
          >
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  );
}