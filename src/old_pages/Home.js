import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className='home__container'>
        <div className='home__left'>
          <Link to="/" className='home__bio'>
            <h3 className='home__name'>Gabriel Sarti</h3>
            <div className='home__title'>Front End Software Engineer</div>
          </Link>
          <div className='home__links'>
            <Link to="/" className='home__link'>Home</Link>
            <Link to="/projects" className='home__link'>Projetos</Link>
            <Link to="/contact" className='home__link'>Contato</Link>
          </div>

          <div className='home__social'>
            <a href='https://www.linkedin.com/in/gabriel-sarti-7aa5ab145/'>Linkedin</a>
            <a href='https://github.com/garefen'>Github</a>
          </div>
        </div>
        <div className='home__right'>
          <div className='info'>
            <img className='info__avatar' src="/avatar.jpg"/>
            <div className='info__text'>
              <p>
                Sou engenheiro de software com mais de 5 anos de experiência com foco em Front End.
              </p>
              <p>
                Inovação e acessibilidade estão no centro do meu trabalho e acredito que a tecnologia deve facilitar a vida de todos, e isso guia cada projeto que desenvolvo.
              </p>
              <p>
                Tenho experiência com times globais e multidisciplinares, sempre mantendo um forte compromisso com a entrega técnica de qualidade e garantindo a melhor experiência de usuário. 
              </p>
            </div>
            <div className='info__decoration'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
