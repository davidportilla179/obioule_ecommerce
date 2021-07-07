import CardTech from "../components/CardTech";
import CardProduct from "../components/CardProduct";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="certificado1"
        className="img-fluid"
      />
      <div className="container">
        <h1 className="py-3">Girasoles cafetaleros</h1>
        <div className="row">
          <div className="col col-lg-8 pt-5">
            <p>
              La miel real es simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              La miel real es simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <h3 className="py-3">Técnicas de cosecha sustentable</h3>

            <div className="row justify-content-md-center">
              <div className="col col-md-6 col-lg-4">
                <CardTech
                  title={"Recolección"}
                  img={
                    "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  }
                />
              </div>
              <div className="col col-md-6 col-lg-4">
                <CardTech
                  title={"Selección"}
                  img={
                    "https://images.pexels.com/photos/2711959/pexels-photo-2711959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  }
                />
              </div>
              <div className="col col-md-6 col-lg-4">
                <CardTech
                  title={"Empaquetado"}
                  img={
                    "https://images.pexels.com/photos/3737655/pexels-photo-3737655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  }
                />
              </div>
            </div>
          </div>

          <div className="col col-lg-4">
            <h3>Certificaciones</h3>
            <div className="row align-items-center">
              <div className="col col-md-12">
                <img
                  src="https://www.expoknews.com/wp-content/uploads/2018/04/wildlife-habitat-council-que-es-1.jpg"
                  alt="certificado1"
                  className="img-fluid"
                />
              </div>
              <div className="col col-md-12 py-3">
                <img
                  src="https://http2.mlstatic.com/D_NQ_NP_705043-MLM30381068759_052019-O.jpg"
                  alt="certificado1"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <h3 className="py-3">Productos que vende</h3>

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
    </div>
  );
}
