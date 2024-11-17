import './Products.scss';

function Products() {
  return (
    <section className="products">
      <div className="products__container">
        <h3 className="products__headline">
          Serviços
        </h3>
        <div className="products__wrapper">
          <div className="products__card">
            <div className="products__title">
              Desenvolvimento
            </div>
            <div className="products__description">
              Desenvolvimento de sites institucionais, profissionais, landing pages e portfólios com um foco nas melhores práticas de desenvolvimento, acessibilidade e experiência do usuário.
            </div>
          </div>
          <div className="products__card">
            <div className="products__title">
              UX / UI
            </div>
            <div className="products__description">
              Criação de interfaces atraentes e intuitivas, com foco em funcionalidade e design acessível, garantindo que o usuário encontre o que precisa de forma rápida e agradável.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
