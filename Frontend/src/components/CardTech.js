import "../assets/styles/CardTech.css";

export default function CardTech(props) {
  return (
    <>
      <figure>
        <h2>{props.title}</h2>
        <img src={props.img} alt="" />
        <figcaption>
          <h3>{props.title}</h3>
          <p>
            Los granos se recolectan a mano, uno a uno, seleccionando aquellos
            que están maduros y dejando en el cafeto los que aún no están a
            punto y que se recogerán más adelante.
          </p>
          <button>Más información</button>
        </figcaption>
      </figure>
    </>
  );
}
