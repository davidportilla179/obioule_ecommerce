import React from "react";
import "../styles.css";

export default function Home() {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide mb-4"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item" data-interval="2000">
            <img
              src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-interval="2000">
            <img
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item active" data-interval="2000">
            <img
              src="https://images.unsplash.com/photo-1575527820586-5f350ab37c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div class="container-fluid px-5">
        <div class="row">
          <div class="col-md-6">
            <div className="card border-0 mb-3 shadow p-5">
              <h3 className="font-weight-bold mb-5">Marcas que la gente ama</h3>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src="https://scontent.fclq1-1.fna.fbcdn.net/v/t1.18169-9/23319301_128939727819743_2365206648537246094_n.png?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFiVGhTitBcmboXj9oY4kIqPo6jI8vOu_s-jqMjy867-194S_aBOdD_XiLlPAUhZd3L-pf5TNbixT6q9g-M-c7s&_nc_ohc=_Icxt2ru7p8AX9E9C9O&_nc_ht=scontent.fclq1-1.fna&oh=49989f10b12cc6b62d52e217b4bb8183&oe=60EA0A47"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-8">
                  <div className="card-body mb-3">
                    <h4 className="font-weight-bold">Apiflor</h4>
                    <p className="card-text">
                      Miel diferenciada de alta calidad hecha en México Descubre
                      Apiflor, miel diferenciada que ofrece una gran cantidad de
                      productos hechos en México, por apicultores chiapanecos
                      comprometidos con la preservación de la biodiversidad.
                    </p>
                    <p className="card-text">
                      En Yucatán, en el poblado de Chichimilá cada cosecha se
                      oxigenan los campos y varios agricultores se organizan
                      para rotar cultivos asegurando así la mejor calidad de los
                      mismos pues no carecen de nutrientes y pueden
                      desarrollarse sin ninguna carencia.
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="font-weight-bold mt-4">Canastas</h3>
              <div className="card p-5 border-0">
                <div className="card-deck">
                  <p className="card border-0 font-weight-bold h5 pt-5">
                    Por solo{" "}
                    <span className="h2 font-weight-bold d-block ">$399</span>
                  </p>
                  <div className="card border-0 pt-4">
                    <img
                      className="card-img-top"
                      src="https://image.jimcdn.com/app/cms/image/transf/none/path/s467ada8366135cdb/image/i53591933bd28b498/version/1587976116/image.jpg"
                      alt="miel"
                    />
                  </div>
                  <div className="card border-0">
                    <img
                      className="card-img-top"
                      src="https://www.eluniversal.com.mx/sites/default/files/2020/05/13/canasta_principal_ok.jpg"
                      alt="miel"
                    />
                  </div>
                </div>
              </div>
              <h3 className="font-weight-bold mb-5">Productos</h3>
              <div class="card-deck border-0 mb-5">
                <div class="card border-0 shadow card-product p-2">
                  <img
                    class="card-img"
                    src="https://http2.mlstatic.com/D_NQ_NP_676916-MLM43924156976_102020-O.jpg"
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
                      <i class="fas fa-shopping-cart mr-2"></i> Agregar al
                      carrito
                    </a>
                  </div>
                </div>
                <div class="card border-0 card-product shadow p-2">
                  <img
                    class="card-img"
                    src="https://s9790.pcdn.co/wp-content/uploads/2015/02/majomut-mycoffebox.png"
                    alt="Vans"
                  />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <a href="#" class="card-link text-danger like">
                      <i class="fas fa-heart"></i>
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Café Organico</h4>
                    <h6 class="card-subtitle text-muted">1 kilogramo</h6>
                    <div class="price text-success">
                      <h4 class="mt-3">$125</h4>
                    </div>
                    <a href="#" class="btn btn-success d-block mt-3">
                      <i class="fas fa-shopping-cart mr-2"></i> Agregar al
                      carrito
                    </a>
                  </div>
                </div>
                <div class="card border-0 card-product shadow p-2">
                  <img
                    class="card-img"
                    src="https://http2.mlstatic.com/D_NQ_NP_757322-MLM44075618739_112020-W.jpg"
                    alt="Vans"
                  />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <a href="#" class="card-link text-danger like">
                      <i class="fas fa-heart"></i>
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Café molido</h4>
                    <h6 class="card-subtitle text-muted">1 kilogramo</h6>
                    <div class="price text-success">
                      <h4 class="mt-3">$125</h4>
                    </div>
                    <a href="#" class="btn btn-success d-block mt-3">
                      <i class="fas fa-shopping-cart mr-2"></i> Agregar al
                      carrito
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-0 shadow p-5 mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src="https://scontent.fclq1-1.fna.fbcdn.net/v/t1.18169-9/23319301_128939727819743_2365206648537246094_n.png?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFiVGhTitBcmboXj9oY4kIqPo6jI8vOu_s-jqMjy867-194S_aBOdD_XiLlPAUhZd3L-pf5TNbixT6q9g-M-c7s&_nc_ohc=_Icxt2ru7p8AX9E9C9O&_nc_ht=scontent.fclq1-1.fna&oh=49989f10b12cc6b62d52e217b4bb8183&oe=60EA0A47"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-8">
                  <div className="card-body mb-3">
                    <h4 className="font-weight-bold">Apiflor</h4>
                    <p className="card-text">
                      Miel diferenciada de alta calidad hecha en México Descubre
                      Apiflor, miel diferenciada que ofrece una gran cantidad de
                      productos hechos en México, por apicultores chiapanecos
                      comprometidos con la preservación de la biodiversidad.
                    </p>
                    <p className="card-text">
                      En Yucatán, en el poblado de Chichimilá cada cosecha se
                      oxigenan los campos y varios agricultores se organizan
                      para rotar cultivos asegurando así la mejor calidad de los
                      mismos pues no carecen de nutrientes y pueden
                      desarrollarse sin ninguna carencia.
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="font-weight-bold mt-4">Canastas</h3>
              <div className="card p-5 border-0">
                <div className="card-deck">
                  <p className="card border-0 font-weight-bold h5 pt-5">
                    Por solo{" "}
                    <span className="h2 font-weight-bold d-block ">$399</span>
                  </p>
                  <div className="card border-0 pt-4">
                    <img
                      className="card-img-top"
                      src="https://image.jimcdn.com/app/cms/image/transf/none/path/s467ada8366135cdb/image/i53591933bd28b498/version/1587976116/image.jpg"
                      alt="miel"
                    />
                  </div>
                  <div className="card border-0">
                    <img
                      className="card-img-top"
                      src="https://www.eluniversal.com.mx/sites/default/files/2020/05/13/canasta_principal_ok.jpg"
                      alt="miel"
                    />
                  </div>
                </div>
              </div>
              <h3 className="font-weight-bold mb-5">Productos</h3>
              <div class="card-deck border-0 mb-5">
                <div class="card border-0 card-product shadow p-2">
                  <img
                    class="card-img"
                    src="https://suum.mx/wp-content/uploads/2019/08/ProductoLaOrgCafe4457.jpg"
                    alt="Vans"
                  />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <a href="#" class="card-link text-danger like">
                      <i class="fas fa-heart"></i>
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Cafe orgánico</h4>
                    <h6 class="card-subtitle text-muted">500 gramos</h6>
                    <div class="price text-success">
                      <h4 class="mt-3">$125</h4>
                    </div>
                    <a href="#" class="btn btn-success d-block mt-3">
                      <i class="fas fa-shopping-cart mr-2"></i> Agregar al
                      carrito
                    </a>
                  </div>
                </div>
                <div class="card border-0 card-product shadow p-2">
                  <img
                    class="card-img"
                    src="https://www.obioorganico.com/wp-content/uploads/2021/06/kotantik_cafe_organico_tostado_y_molido_500g_2-600x800.png"
                    alt="Vans"
                  />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <a href="#" class="card-link text-danger like">
                      <i class="fas fa-heart"></i>
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Cafe molido</h4>
                    <h6 class="card-subtitle text-muted">500 gramos</h6>
                    <div class="price text-success">
                      <h4 class="mt-3">$125</h4>
                    </div>
                    <a href="#" class="btn btn-success d-block mt-3">
                      <i class="fas fa-shopping-cart mr-2"></i> Agregar al
                      carrito
                    </a>
                  </div>
                </div>
                <div class="card border-0 card-product shadow p-2">
                  <img
                    class="card-img"
                    src="https://images-na.ssl-images-amazon.com/images/I/81t9GztwXGL._AC_SL1500_.jpg"
                    alt="Vans"
                  />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <a href="#" class="card-link text-danger like">
                      <i class="fas fa-heart"></i>
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Cafe tostado</h4>
                    <h6 class="card-subtitle text-muted">1 litro</h6>
                    <div class="price text-success">
                      <h4 class="mt-3">$125</h4>
                    </div>
                    <a href="#" class="btn btn-success d-block mt-3">
                      <i class="fas fa-shopping-cart mr-2"></i> Agregar al
                      carrito
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 shadow p-5 mb-5">
              <h3 className="font-weight-bold mb-5">Productos de temporada</h3>
              <div class="card-deck">
                <div class="card border-0 card-product shadow p-2">
                  <img
                    class="card-img"
                    src="https://http2.mlstatic.com/D_NQ_NP_619214-MLM44344236284_122020-O.jpg"
                    alt="Vans"
                  />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <a href="#" class="card-link text-danger like">
                      <i class="fas fa-heart"></i>
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Miel líquida</h4>
                    <h6 class="card-subtitle text-muted">1 litro</h6>
                    <div class="price text-success">
                      <h4 class="mt-3">$125</h4>
                    </div>
                    <a href="#" class="btn btn-success d-block mt-3">
                      <i class="fas fa-shopping-cart mr-2"></i> Agregar al
                      carrito
                    </a>
                  </div>
                </div>
                <div class="card border-0 card-product shadow p-2">
                  <img
                    class="card-img"
                    src="https://www.chedraui.com.mx/medias/7503014995056-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8MTU3MjM3fGltYWdlL2pwZWd8aDY4L2gzZC85OTU4NDY0MTkyNTQyLmpwZ3xmYTRjNTMxMzE4NTNhZDhkZTEzYmJjZGE1YWMxOGVkM2NhM2I5ZGUwZDg3NTdhMzdjZGFhZTU0MWY3MGE3Yzc3"
                    alt="Vans"
                  />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <a href="#" class="card-link text-danger like">
                      <i class="fas fa-heart"></i>
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Miel multiflora</h4>
                    <h6 class="card-subtitle text-muted">1 litro</h6>
                    <div class="price text-success">
                      <h4 class="mt-3">$125</h4>
                    </div>
                    <a href="#" class="btn btn-success d-block mt-3">
                      <i class="fas fa-shopping-cart mr-2"></i> Agregar al
                      carrito
                    </a>
                  </div>
                </div>
                <div class="card border-0 card-product shadow p-2">
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
                      <i class="fas fa-shopping-cart mr-2"></i> Agregar al
                      carrito
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card border-0 shadow p-5 mb-5">
              <h3 className="font-weight-bold mb-5">Lo más popular</h3>
              <div class="card-deck mb-5">
                <div class="card border-0 card-product shadow p-2">
                  <img
                    class="card-img"
                    src="https://http2.mlstatic.com/D_NQ_NP_807893-MLM43532675119_092020-W.jpg"
                    alt="Vans"
                  />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <a href="#" class="card-link text-danger like">
                      <i class="fas fa-heart"></i>
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Barra de cacao</h4>
                    <h6 class="card-subtitle text-muted">1 litro</h6>
                    <div class="price text-success">
                      <h4 class="mt-3">$125</h4>
                    </div>
                    <a href="#" class="btn btn-success d-block mt-3">
                      <i class="fas fa-shopping-cart mr-2"></i> Agregar al
                      carrito
                    </a>
                  </div>
                </div>
                <div class="card border-0 card-product shadow p-2">
                  <img
                    class="card-img"
                    src="https://www.obioorganico.com/wp-content/uploads/2021/06/cola-pinta-artesania-de-madera-4-600x800.png"
                    alt="Vans"
                  />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <a href="#" class="card-link text-danger like">
                      <i class="fas fa-heart"></i>
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Cola pinta</h4>
                    <h6 class="card-subtitle text-muted">1 litro</h6>
                    <div class="price text-success">
                      <h4 class="mt-3">$125</h4>
                    </div>
                    <a href="#" class="btn btn-success d-block mt-3">
                      <i class="fas fa-shopping-cart mr-2"></i> Agregar al
                      carrito
                    </a>
                  </div>
                </div>
                <div class="card border-0 card-product shadow p-2">
                  <img
                    class="card-img"
                    src="https://www.obioorganico.com/wp-content/uploads/2021/06/chintete-artesania-de-madera-1-300x300.png"
                    alt="Vans"
                  />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <a href="#" class="card-link text-danger like">
                      <i class="fas fa-heart"></i>
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Chinete</h4>
                    <h6 class="card-subtitle text-muted">1 litro</h6>
                    <div class="price text-success">
                      <h4 class="mt-3">$125</h4>
                    </div>
                    <a href="#" class="btn btn-success d-block mt-3">
                      <i class="fas fa-shopping-cart mr-2"></i> Agregar al
                      carrito
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-deck mb-5">
                <div class="card border-0 card-product shadow p-2">
                  <img
                    class="card-img"
                    src="https://suum.mx/wp-content/uploads/2020/12/Tcrema20_1.jpg"
                    alt="Vans"
                  />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <a href="#" class="card-link text-danger like">
                      <i class="fas fa-heart"></i>
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Crema Corporal</h4>
                    <h6 class="card-subtitle text-muted">1 litro</h6>
                    <div class="price text-success">
                      <h4 class="mt-3">$125</h4>
                    </div>
                    <a href="#" class="btn btn-success d-block mt-3">
                      <i class="fas fa-shopping-cart mr-2"></i> Agregar al
                      carrito
                    </a>
                  </div>
                </div>
                <div class="card border-0 card-product shadow p-2">
                  <img
                    class="card-img"
                    src="https://www.obioorganico.com/wp-content/uploads/2021/06/tosepan-crema-facial-dia-humectante-1-300x300.png"
                    alt="Vans"
                  />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <a href="#" class="card-link text-danger like">
                      <i class="fas fa-heart"></i>
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Crema facial</h4>
                    <h6 class="card-subtitle text-muted">1 litro</h6>
                    <div class="price text-success">
                      <h4 class="mt-3">$125</h4>
                    </div>
                    <a href="#" class="btn btn-success d-block mt-3">
                      <i class="fas fa-shopping-cart mr-2"></i> Agregar al
                      carrito
                    </a>
                  </div>
                </div>
                <div class="card border-0 card-product shadow p-2">
                  <img
                    class="card-img"
                    src="https://suum.mx/wp-content/uploads/2020/10/Tshamp20_1.jpg"
                    alt="Vans"
                  />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <a href="#" class="card-link text-danger like">
                      <i class="fas fa-heart"></i>
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Shampoo</h4>
                    <h6 class="card-subtitle text-muted">1 litro</h6>
                    <div class="price text-success">
                      <h4 class="mt-3">$125</h4>
                    </div>
                    <a href="#" class="btn btn-success d-block mt-3">
                      <i class="fas fa-shopping-cart mr-2"></i> Agregar al
                      carrito
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-deck mb-5">
                <div class="card border-0 card-product shadow p-2">
                  <img
                    class="card-img"
                    src="https://www.obioorganico.com/wp-content/uploads/2021/06/olla-mediana-de-hoja-de-pino-1.png"
                    alt="Vans"
                  />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <a href="#" class="card-link text-danger like">
                      <i class="fas fa-heart"></i>
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Panero</h4>
                    <h6 class="card-subtitle text-muted">1 litro</h6>
                    <div class="price text-success">
                      <h4 class="mt-3">$125</h4>
                    </div>
                    <a href="#" class="btn btn-success d-block mt-3">
                      <i class="fas fa-shopping-cart mr-2"></i> Agregar al
                      carrito
                    </a>
                  </div>
                </div>
                <div class="card border-0 card-product shadow p-2">
                  <img
                    class="card-img"
                    src="https://images-na.ssl-images-amazon.com/images/I/811kxMJpn9L._SX500_.jpg"
                    alt="Vans"
                  />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <a href="#" class="card-link text-danger like">
                      <i class="fas fa-heart"></i>
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Servilletero</h4>
                    <h6 class="card-subtitle text-muted">1 litro</h6>
                    <div class="price text-success">
                      <h4 class="mt-3">$125</h4>
                    </div>
                    <a href="#" class="btn btn-success d-block mt-3">
                      <i class="fas fa-shopping-cart mr-2"></i> Agregar al
                      carrito
                    </a>
                  </div>
                </div>
                <div class="card border-0 card-product shadow p-2">
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
                      <i class="fas fa-shopping-cart mr-2"></i> Agregar al
                      carrito
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12">
            <div class="card border-0 shadow p-5 mb-5">
              <h3 className="font-weight-bold text-center mb-5">
                Todas las categorías
              </h3>
              <div class="card-deck justify-content-center">
                <div class="card col-md-2 border-0">
                  <img
                    class="card-img"
                    src="https://tiendajuanvaldez.com/wp-content/uploads/2020/10/Cafe-Origen-Kit-x2-500g.jpg"
                    alt="miel"
                  />
                  <div class="card-body h5 font-weight-bold text-center">
                    Cafés de Origen
                  </div>
                </div>
                <div class="card col-md-2 border-0">
                  <img
                    class="card-img"
                    src="https://sommelier.com.pe/wp-content/uploads/01_Miel.jpg"
                    alt="miel"
                  />
                  <div class="card-body h5 font-weight-bold text-center">
                    Miel de Abeja
                  </div>
                </div>
                <div class="card col-md-2 border-0">
                  <img
                    class="card-img"
                    src="http://technocio.com/wp-content/uploads/2020/11/Artesanias-de-Quito.jpg"
                    alt="miel"
                  />
                  <div class="card-body h5 font-weight-bold text-center">
                    Artesanía
                  </div>
                </div>
                <div class="card col-md-2 border-0">
                  <img
                    class="card-img"
                    src="https://www.valor.es/wp-content/themes/enfoca-child/images/elaboracion-chocolate/fruto-cacao.png"
                    alt="miel"
                  />
                  <div class="card-body h5 font-weight-bold text-center">
                    De Cacao
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
