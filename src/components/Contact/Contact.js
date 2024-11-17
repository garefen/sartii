import './Contact.scss';

function Contact() {
  return (
    <div className="contact">
      <div className="contact__card">
        <h3 className="contact__headline">
          Posso te ajudar?
        </h3>
        <div className="contact__description">
          Vamos criar juntos um site ou aplicação que não só atenda às suas necessidades, mas também potencialize seus resultados e destaque sua presença online.
        </div>
        <a href='https://tripetto.app/run/V1VIVN9C2U' target='_blank' rel="noopener noreferrer" className="contact__cta">
          Entrar em contato
        </a>
      </div>
    </div>
  );
}

export default Contact;
