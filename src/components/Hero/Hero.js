import './Hero.scss';

function Hero() {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <div className="hero__headline">
          Construindo <span className='hero__headline--emphasis'>soluções digitais</span> eficientes e inclusivas.
        </div>
        <div className="hero__description">
        Mais de 5 anos de experiência construindo plataformas com código limpo, escalável e acessível para todos.
        </div>
        <button className="hero__cta">
          Entrar em contato
        </button>
      </div>
    </div>
  );
}

export default Hero;
