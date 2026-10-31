import './Contact.scss';

export function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Vamos Conversar?</h2>
        <p className="contact__subtitle">
          Estou sempre aberto a novas oportunidades, colaborações e projetos desafiadores no desenvolvimento Front-End.
        </p>

        <div className="contact__links">
          <a 
            href="mailto:jaossoares.vdr@gmail.com"
            className="contact__card"
          >
            <span className="contact__card-icon">✉️</span>
            <div>
              <span className="contact__card-label">E-mail</span>
              <span className="contact__card-value">Enviar Mensagem</span>
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/joaovitorsoares019/" 
            target="_blank" 
            rel="noreferrer" 
            className="contact__card"
          >
            <span className="contact__card-icon">💼</span>
            <div>
              <span className="contact__card-label">LinkedIn</span>
              <span className="contact__card-value">Ver Perfil</span>
            </div>
          </a>

          <a 
            href="https://github.com/gaara144hz" 
            target="_blank" 
            rel="noreferrer" 
            className="contact__card"
          >
            <span className="contact__card-icon">🐙</span>
            <div>
              <span className="contact__card-label">GitHub</span>
              <span className="contact__card-value">Ver Código</span>
            </div>
          </a>
        </div>

        <div className="contact__bottom">
          <p>© {new Date().getFullYear()} João Vitor. Desenvolvido com React, TypeScript & Sass.</p>
        </div>
      </div>
    </footer>
  );
}