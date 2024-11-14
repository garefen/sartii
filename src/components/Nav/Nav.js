import './Nav.scss';

function Nav() {
  return (
    <div className="nav">
      <div className="nav__wrapper">
        {/* Sartii */}
        <div className="nav__links">
          <a href='#' className="nav__item">Início</a>
          <a href='#hero' className="nav__item">Sobre</a>
          <a href='#jobs' className="nav__item">Experiências</a>
          <a href='#products' className="nav__item">Serviços</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
