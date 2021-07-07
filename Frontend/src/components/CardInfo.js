import "../assets/styles/CardProduct.css";

const Product = ({ category, title, description, img }) => {
  return (
    <>
      <div className="row justify-content-center align-items-center border shadow ">
        <div className="col-sm-12 col-md-4">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="col-sm-12 col-md-8">
          <div className="card-body">
            <span className="card-number card-circle subtle">01</span>
            <p className="card-author subtle">{category}</p>
            <h2 className="h1">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
