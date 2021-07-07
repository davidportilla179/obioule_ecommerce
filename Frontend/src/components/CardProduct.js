const CardProduct = ({ category, title, description, img }) => {
  return (
    <>
      <div class="card border-0 shadow p-2">
        <img
          class="card-img"
          src="https://monchitime.com/www/wp-content/uploads/2014/08/Miel-manzanilla-AdC.jpg"
          alt="Vans"
        />
        <div class="card-img-overlay d-flex justify-content-end">
          <a href="#" class="card-link text-danger like">
            <i class="fas fa-heart"></i>
          </a>
        </div>
        <div class="card-body">
          <h4 class="card-title">Miel de abeja</h4>
          <h6 class="card-subtitle text-muted">1 litro</h6>
          <div class="price text-success">
            <h4 class="mt-3">$125</h4>
          </div>
          <a href="#" class="btn btn-success d-block mt-3">
            <i class="fas fa-shopping-cart mr-2"></i> Agregar al carrito
          </a>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
