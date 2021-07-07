import React from "react";

import axios from "axios";

import Cafe1 from "../assets/static/Clasificador/tosepan-cafe-organico-tostado-y-molido-1.png";
import Cafe2 from "../assets/static/Clasificador/triunfo_verde_cafe_organico_tostado_molido_kraft_500g_1.png";
import Cafe3 from "../assets/static/Clasificador/biocafe_cafe_organico_soluble_200g_1.png";
import Miel1 from "../assets/static/Clasificador/miel-de-abeja-floracion-campanita-frasco-350ml-1-600x800.png";
import Miel2 from "../assets/static/Clasificador/miel_de_abeja.png";
import Miel3 from "../assets/static/Clasificador/Miel-de-abeja-pura-con-panal-comestible-organica-454gr-100-Natural.jpg";

import "../styles.css";

export default class pruebaClasificador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: [],
      once: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false
      },
      tendencia: "desconocida"
    };
  }

  add(arr) {
    let arrAll = this.state.all;
    arrAll.push(arr);
    console.log(arrAll);
    this.setState({ all: arrAll });
  }

  action(btn, arr) {
    let once = this.state.once;
    if (this.state.once[btn] === false) {
      once[btn] = true;
      this.add(arr);
      this.setState({ once });
    }
  }
  render() {
    return (
      <div>
        <div className="container mt-4">
          <h2 className="font-weight-bold mb-2">Clasificador de usuarios</h2>
          <h4>Ejemplo</h4>
          <div className="container mt-5 px-0">
            <h5 className="font-weight-bold mb-2">
              ¿Cuál de los siguientes productos compraría?
            </h5>
            <div className="card-deck border-0 mb-5" style={{ marginTop: 30 }}>
              <div className="card card-product border-0 shadow p-2">
                <img className="card-img" src={Miel1} alt="Vans" />
                <div className="card-body" style={{}}>
                  <h4 className="card-title">
                    Miel de abeja floración Cafetal Apiflor
                  </h4>
                  <h6 className="card-subtitle text-muted">500gr</h6>
                  <div className="price text-success">
                    <h4 className="mt-3">$210</h4>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    value={1}
                    onClick={(e) => {
                      // PENDIENTE DE VALORES CORRECTOS
                      this.action(e.target.value, [210, 0.9, 0.9]);
                    }}
                  >
                    Comprar
                  </button>
                </div>
              </div>
              <div className="card card-product border-0 shadow p-2">
                <img className="card-img" src={Miel2} alt="Vans" />
                <div className="card-body">
                  <h4 className="card-title">Miel de abeja orgánica</h4>
                  <h6 className="card-subtitle text-muted">500gr</h6>
                  <div className="price text-success">
                    <h4 className="mt-3">$67</h4>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    value={2}
                    onClick={(e) => {
                      // PENDIENTE DE VALORES CORRECTOS
                      this.action(e.target.value, [67, 0.5, 0.1]);
                    }}
                  >
                    Comprar
                  </button>
                </div>
              </div>
              <div className="card card-product border-0 shadow p-2">
                <img className="card-img" src={Miel3} alt="Vans" />
                <div className="card-body">
                  <h4 className="card-title">Miel de abeja orgánica NBF</h4>
                  <h6 className="card-subtitle text-muted">454gr</h6>
                  <div className="price text-success">
                    <h4 className="mt-3">$120</h4>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    value={3}
                    onClick={(e) => {
                      this.action(e.target.value, [120, 0.6, 0.6]);
                    }}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-0 mt-5">
            <h5 className="font-weight-bold mb-2">
              ¿Cual de los siguientes productos compraría?
            </h5>
            <div className="card-deck border-0 mb-5" style={{ marginTop: 30 }}>
              <div className="card card-product border-0 shadow p-2">
                <img className="card-img" src={Cafe1} alt="cafe " />

                <div className="card-body">
                  <h4 className="card-title">Tossepan</h4>
                  <h6 className="card-subtitle text-muted">500gr</h6>
                  <div className="price text-success">
                    <h4 className="mt-3">$256</h4>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    value={4}
                    onClick={(e) => {
                      this.action(e.target.value, [256, 0.8, 0.9]);
                    }}
                  >
                    Comprar
                  </button>
                </div>
              </div>
              <div className="card card-product border-0 shadow p-2">
                <img className="card-img" src={Cafe3} alt="Cafe" />
                <div className="card-body">
                  <h4 className="card-title">Café soluble orgánico</h4>
                  <h6 className="card-subtitle text-muted">500gr</h6>
                  <div className="price text-success">
                    <h4 className="mt-3">$210</h4>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    value={5}
                    onClick={(e) => {
                      //PENDIENTE DE VALORES CORRECTOS
                      this.action(e.target.value, [210, 0.7, 0.8]);
                    }}
                  >
                    Comprar
                  </button>
                </div>
              </div>
              <div className="card card-product border-0 shadow p-2">
                <img className="card-img" src={Cafe2} alt="Cafe" />

                <div className="card-body">
                  <h4 className="card-title">Triunfo verde</h4>
                  <h6 className="card-subtitle text-muted">1 litro</h6>
                  <div className="price text-success">
                    <h4 className="mt-3">$125</h4>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    value={6}
                    onClick={(e) => {
                      this.add([125, 0.6, 0.4]);
                    }}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="btn btn-primary"
              value={1}
              onClick={async (e) => {
                let cafe =
                  "cafe?price=" +
                  this.state.all[0][0] +
                  "&c_product=" +
                  this.state.all[0][1] +
                  "&c_packing=" +
                  this.state.all[0][2];
                // console.log(getString);

                let miel =
                  "miel?price=" +
                  this.state.all[1][0] +
                  "&c_product=" +
                  this.state.all[1][1] +
                  "&c_packing=" +
                  this.state.all[1][2];
                console.log(miel)
                const cafeRes = await axios.get(
                  "http://localhost:3000/" + cafe ,
                  { headers: {"Access-Control-Allow-Origin": "*"} }
                );
                const mielRes = await axios.get(
                  "http://localhost:3000/" + miel,
                  { headers: {"Access-Control-Allow-Origin": "*"} }
                );
                console.log(mielRes)
                let count = cafeRes.data + mielRes.data;
                if (count <= 3)
                  this.setState({ tendencia: "Productos accesibles" });
                else if (count <= 4)
                  this.setState({ tendencia: "Productos de precio promedi" });
                else this.setState({ tendencia: "Productos premium" });
              }}
            >
              Calcular tendencia de compra
            </button>
            <h2 className="mt-5">
              Tendencia de compra: {this.state.tendencia}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
