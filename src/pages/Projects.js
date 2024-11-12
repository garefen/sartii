import { Link } from "react-router-dom";

function Projects() {
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
          
        </div>
      </div>
    </div>
  );
}

export default Projects;
