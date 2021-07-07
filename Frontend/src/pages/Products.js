import CardProduct from "../components/CardProduct";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className="container">
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

export default Products;
