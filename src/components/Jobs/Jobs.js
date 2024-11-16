import { useState } from 'react';
import './Jobs.scss';

function Jobs() {
  const [tabActive, setTabActive] = useState(0);

  const handleCompanyOnClick = (index) => {
    setTabActive(index);
  }

  return (
    <section className="jobs">
      <h3 className="jobs__headline">
        Experiências
      </h3>
      <div className="jobs__wrapper">
        <div className="jobs__tabs">
          <div className={`jobs__tabs__company ${tabActive === 0 ? 'jobs__tabs__company--active' : ''}`} onClick={() => handleCompanyOnClick(0)}>R/GA for Google</div>
          <div className={`jobs__tabs__company ${tabActive === 1 ? 'jobs__tabs__company--active' : ''}`} onClick={() => handleCompanyOnClick(1)}>R/GA</div>
          <div className={`jobs__tabs__company ${tabActive === 2 ? 'jobs__tabs__company--active' : ''}`} onClick={() => handleCompanyOnClick(2)}>Enext</div>
        </div>
        <div className="jobs__content">
        {tabActive === 0 && (
          <div className="jobs__content__item">
            <div className="jobs__content__title">
              Front-End Software Engineer
            </div>
            <div className="jobs__content__company">
              R/GA for Google
            </div>
            <div className="jobs__content__description">
              Como parte de um time dedicado ao Google, trabalhei diariamente com um time multidisciplinar e multinacional para manter o site <a href='https://ads.google.com/' target='_blank'>Google ADS</a>, também participei na criação e manutenção de sites como <a href='https://auditorial.withgoogle.com/' target='_blank'>Auditorial by Google</a>, <a href='https://about.google/' target='_blank'>Google About</a> e <a href='https://workspace.google.com/' target='_blank'>Google Workspace</a>.
            </div>
          </div>
        )}
        {tabActive === 1 && (
          <div className="jobs__content__item">
            <div className="jobs__content__title">
              Assistant Software Engineer
            </div>
            <div className="jobs__content__company">
              R/GA
            </div>
            <div className="jobs__content__description">
              Trabalhei como Engenheiro de Software na empresa R/GA, onde atendia clientes nacionais e internacionais como Google, Nike, Bradesco e participava de pesquisas para apresentar ao time sobre tecnologias novas e tendências.
            </div>
          </div>
        )}
        {tabActive === 2 && (
          <div className="jobs__content__item">
            <div className="jobs__content__title">
              Desenvolvedor Front-End Jr.
            </div>
            <div className="jobs__content__company">
              Enext
            </div>
            <div className="jobs__content__description">
              Trabalhei como Desenvolvedor Front End na empresa Enext, focado na criação de e-commerces para grandes clientes do mercado nacional.
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}

export default Jobs;
