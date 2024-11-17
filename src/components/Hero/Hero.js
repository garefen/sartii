import './Hero.scss';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__headline">
          Construindo <span className='hero__headline--emphasis'>soluções digitais</span> eficientes e inclusivas.
        </div>
        <div className="hero__description">
        Mais de 5 anos de experiência construindo plataformas com código limpo, escalável e acessível para todos.
        </div>
        <a href='https://tripetto.app/run/V1VIVN9C2U' target='_blank' rel="noopener noreferrer" className="hero__cta">
          Entrar em contato
        </a>
      </div>
    </section>
  );
}

export default Hero;
