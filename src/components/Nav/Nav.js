import { useRef, useState } from 'react';
import './Nav.scss';

function Nav() {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  const mobileNavRef = useRef(null);

  const heroEl = document.querySelector('.hero');
  const jobsEl = document.querySelector('.jobs');
  const productsEl = document.querySelector('.products');
  // const aboutEl = document.querySelector('.about');

  const jumplinkEls = [heroEl, jobsEl, jobsEl, productsEl];

  const desktopJumpOnClick = (index) => {
    if (index === 0) {
      window.scrollTo({top: 0, behavior: 'smooth'});
      return;
    }

    const element = jumplinkEls[index];
    element.scrollIntoView({behavior: 'smooth'});
  }

  const openMobileNav = () => {
    mobileNavRef.current.classList.toggle('nav__mobile--opened', isMobileNavOpened);
    setIsMobileNavOpened(!isMobileNavOpened);
  }

  const mobileJumpOnClick = (index) => {
    openMobileNav();

    if (index === 0) {
      window.scrollTo({top: 0, behavior: 'smooth'});
      return;
    }

    const element = jumplinkEls[index];
    element.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="nav">
      <div className="nav__hamburguer" onClick={() => openMobileNav()}>
        <svg width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 6.5H19V8H5V6.5Z" fill="#1F2328"/>
          <path d="M5 16.5H19V18H5V16.5Z" fill="#1F2328"/>
          <path d="M5 11.5H19V13H5V11.5Z" fill="#1F2328"/>
        </svg>
      </div>
      <div className="nav__mobile" ref={mobileNavRef}>
        <div className="nav__links nav__links--mobile">
          <div onClick={() => mobileJumpOnClick(0)} className="nav__item nav__item--mobile">Início</div>
          <div onClick={() => mobileJumpOnClick(0)} className="nav__item nav__item--mobile">Sobre</div>
          <div onClick={() => mobileJumpOnClick(2)} className="nav__item nav__item--mobile">Experiências</div>
          <div onClick={() => mobileJumpOnClick(3)} className="nav__item nav__item--mobile">Serviços</div>
        </div>
      </div>
      <div className="nav__wrapper">
        {/* Sartii */}
        <div className="nav__links nav__links--desktop">
          <div onClick={() => desktopJumpOnClick(0)} className="nav__item nav__item--desktop">Início</div>
          <div onClick={() => desktopJumpOnClick(0)} className="nav__item nav__item--desktop">Sobre</div>
          <div onClick={() => desktopJumpOnClick(2)} className="nav__item nav__item--desktop">Experiências</div>
          <div onClick={() => desktopJumpOnClick(3)} className="nav__item nav__item--desktop">Serviços</div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
