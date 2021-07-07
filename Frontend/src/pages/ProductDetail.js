import CardInfo from "../components/CardInfo";
import { Link } from "react-router-dom";
import "../assets/styles/Products.css";
import CardProduct from "../components/CardProduct";

const ProductDetail = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row my-4">
          <div className="col-md-5">
            <img
              className="img-fluid"
              src="https://www.obioorganico.com/wp-content/uploads/2021/06/la_iguana_sana_cafe_tostado_y_molido_500g_2.png"
              alt=""
            />
          </div>
          <div className="col-md-7">
            <h1>Café orgánico tostado y molido La Iguana Sana</h1>
            <h2 className="text-success">
              $127.48 <strike className="del small text-muted"> $190.50</strike>
            </h2>
            <h3 className="pt-4 pb-3">Cantidad</h3>
            <select class="custom-select">
              <option selected>Cantidad...</option>
              <option value="1">1 unidad</option>
              <option value="2">2 unidades</option>
              <option value="3">3 unidades</option>
              <option value="4">4 unidades</option>
              <option value="5">5 unidades</option>
            </select>

            <div className="container pt-5">
              <button
                className="btn btn-outline-success d-block mb-4"
                type="submit"
              >
                <h2 className="h5">Agregar al carrito</h2>
              </button>
              <button className="btn btn-success d-block" type="submit">
                <h2 className="h5">Comprar ahora</h2>
              </button>
            </div>
          </div>
        </div>
        <CardInfo
          category="Café"
          title="¿Qué es el café orgánico tostado?"
          description="Café orgánico tostado y molido La Iguana Sana
          Mezcla arábiga y robusta puro medio, de aroma frutal, sabor fuerte. La presencia de café robusta proporciona un sabor un poco “quemado” y amargo, mientras que el café arábico nos dará un sabor un tanto más dulce o frutal.
          En los meses de octubre a febrero, este café es cosechado, por cafeticultores que también son cacaoteros, integrados al Centro Agroecológico San Francisco de Asís, S.A. de C.V., de la región del Soconusco, Chiapas. Los cuales emplean en sus agroecosistemas cafetaleros un proceso de producción orgánico y de aplicación de prácticas amigables con la biodiversidad."
          img="https://images.pexels.com/photos/4264046/pexels-photo-4264046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />

        <div className="my-5">
          <CardInfo
            category="Cooperativa"
            title="¿Quienes somos?"
            description="Somos una entidad de certificación con uno de los reconocimientos más amplios en los ámbitos nacional e internacional. Esto a pesar de que los inicios fueron difíciles e inciertos, dado que existían muchas dudas entre productores y compradores de que una certificadora mexicana pudiera cumplir con las rígidas normas internacionales de la agricultura orgánica."
            img="https://images.pexels.com/photos/7125588/pexels-photo-7125588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </div>

        <h2 className="py-5">Productos Relacionados</h2>

        <div className="row">
          <div className="col col-md-4 my-4">
            <Link to="/products/1" className="link-card">
              <CardProduct
                category="Miel"
                title="Miel Multiflora"
                description="Miel de abeja Multiflora, color ámbar, de aroma floral gracias a
                  la gran diversidad de floraciones de la selva tropical,
                  predominando en el néctar el t’sit’silche, ja’bin, yaxnik, y el
                  tajonal."
                img="https://s15.postimg.cc/temvv7u4r/recipe.jpg"
              />
            </Link>
          </div>
          <div className="col col-md-4 my-4">
            <CardProduct
              category="Miel"
              title="Miel Multiflora"
              description="Miel de abeja Multiflora, color ámbar, de aroma floral gracias a
                la gran diversidad de floraciones de la selva tropical,
                predominando en el néctar el t’sit’silche, ja’bin, yaxnik, y el
                tajonal."
              img="https://s15.postimg.cc/temvv7u4r/recipe.jpg"
            />
          </div>
          <div className="col col-md-4 my-4">
            <CardProduct
              category="Miel"
              title="Miel Multiflora"
              description="Miel de abeja Multiflora, color ámbar, de aroma floral gracias a
                la gran diversidad de floraciones de la selva tropical,
                predominando en el néctar el t’sit’silche, ja’bin, yaxnik, y el
                tajonal."
              img="https://s15.postimg.cc/temvv7u4r/recipe.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
