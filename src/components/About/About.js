import './About.scss';

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <h3 className="about__headline">
          Sobre mim
        </h3>
        <div className="about__wrapper">
          <div className="about__content">
            <div className="about__title">Gabriel Sarti</div>
            <div className="about__description">Front-End Software Engineer</div>
            <div className="about__text">
              <p>
                Sou um engenheiro de software Front-End com mais de 5 anos de experiência criando interfaces bonitas, funcionais e acessíveis. Minha especialidade está em <span className='about__text--emphasis'>Next.js</span>, <span className='about__text--emphasis'>TypeScript</span> e <span className='about__text--emphasis'>Firebase</span>, e adoro transformar ideias em experiências digitais incríveis.
              </p>
              <p>
                
              </p>
            </div>
          </div>
          <img src='./profile.jpeg' className="about__image"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
