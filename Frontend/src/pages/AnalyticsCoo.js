import React from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import Trip from "../components/Trip";
// import { DataGrid } from "@material-ui/data-grid";

/*  Primera Gráfica: cantidad de productos vendidos en los últmis días */
const dataVentas = {
  labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
  title: "Si",
  datasets: [
    {
      label: "Productos vendidos",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
};
/* Informacion de las gráficas de pastel */
const dataCatMásDemandadas = {
  labels: ["Cafe", "Miel", "Chocolate"],
  datasets: [
    {
      label: "Categorías más solicitadas",
      data: [165, 69, 80],
      backgroundColor: [
        "rgba(5,192,192,1)",
        "rgba(85,100,192,1)",
        "rgba(95,50,192,1)"
      ]
    }
  ]
};

/*** Cooperativas con mas ventas ****/
const dataCoopMasVentas = {
  labels: [
    "Copperativa 1",
    "Copperativa 2",
    "Copperativa 3",
    "Copperativa 4",
    "Copperativa 5"
  ],
  datasets: [
    {
      label: "Categorías más solicitadas",
      data: [100, 250, 180, 312, 189],
      backgroundColor: ["#E2674C", "#5EE24C", "#F5511D", "#1D37F5", "#F5C11D"]
    }
  ]
};

const dataAgeClients = {
  labels: ["25 años", "35 años", "30 años", "38 años", "42 años"],
  datasets: [
    {
      label: "Categorías más solicitadas",
      data: [100, 250, 180, 312, 189],
      backgroundColor: ["#E2674C", "#5EE24C", "#F5511D", "#1D37F5", "#F5C11D"]
    }
  ]
};

/*** Productos más vendidos ****/
const dataProductsMasVendidos = {
  labels: ["Miel de maple", "Café soluble", "Miel fosilizada", "Café orgánico"],
  datasets: [
    {
      label: "Productos más vendidos",
      data: [650, 180, 222, 312],
      backgroundColor: ["#826816", "#168232", "#821675", "#821642"]
    }
  ]
};

/*** Productos más vendidos ****/
const dataOrigenClientes = {
  labels: [
    "Jalisco",
    "Zacatecas",
    "Veracruz",
    "México",
    "Aguascalientes",
    "San luis potosí"
  ],
  datasets: [
    {
      label: "Productos más vendidos",
      data: [1002, 450, 750, 1550, 620, 789],
      backgroundColor: [
        "#826816",
        "#168232",
        "#821675",
        "#821642",
        "#168232",
        "#5EE24C"
      ]
    }
  ]
};

/* Tabla de cooperativas  */
const columns = [
  { field: "id", headerName: "id", width: 110 },
  { field: "Cooperativa", headerName: "Cooperativa", width: 200 },
  { field: "Origen", headerName: "Origen", width: 150 },
  { field: "Activa", headerName: "Activa", width: 150 }
];

const rows = [
  {
    id: 1,
    Cooperativa: "Copperativa numero 1",
    Origen: "Oaxaca",
    Activa: "Activa"
  },
  {
    id: 2,
    Cooperativa: "Copperativa numero 2",
    Origen: "Veracruz",
    Activa: "Activa"
  },
  {
    id: 3,
    Cooperativa: "Copperativa numero 3",
    Origen: "Chiapas",
    Activa: "Activa"
  },
  {
    id: 4,
    Cooperativa: "Copperativa numero 4",
    Origen: "Chiapas",
    Activa: "Activa"
  },
  {
    id: 5,
    Cooperativa: "Copperativa numero 5",
    Origen: "Veracruz",
    Activa: "Inactiva"
  }
];

const Table2 = () => {
  return (
    <>
      <div class="container">
        <div class="row py-5">
          <div class="col-lg-10 mx-auto">
            <div class="card rounded shadow border-0">
              <div class="card-body  bg-white rounded">
                <div class="table-responsive">
                  <table
                    id="example"
                    class="table table-striped table-bordered"
                  >
                    <thead>
                      <tr>
                        <th>Nombre del producto</th>
                        <th>Categoria</th>
                        <th>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Café orgánico tostado Iguana Sana</td>
                        <td>Café</td>
                        <td>50</td>
                      </tr>
                      <tr>
                        <td>Café orgánico tostado Majomut</td>
                        <td>Café</td>
                        <td>31</td>
                      </tr>
                      <tr>
                        <td>Café soluble Uciri</td>
                        <td>Café</td>
                        <td>27</td>
                      </tr>
                      <tr>
                        <td>Pomada Biodolor Pajti</td>
                        <td>Medicinal</td>
                        <td>10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Table3 = () => {
  return (
    <>
      <div class="container">
        <div class="row py-5">
          <div class="col-lg-10 mx-auto">
            <div class="card rounded shadow border-0">
              <div class="card-body  bg-white rounded">
                <div class="table-responsive">
                  <table
                    id="example"
                    class="table table-striped table-bordered"
                  >
                    <thead>
                      <tr>
                        <th>Estados</th>
                        <th>No. de Clientes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Chiapas</td>
                        <td>45</td>
                      </tr>
                      <tr>
                        <td>Estado de México</td>
                        <td>200</td>
                      </tr>
                      <tr>
                        <td>Yucatán</td>
                        <td>25</td>
                      </tr>
                      <tr>
                        <td>Guerrero</td>
                        <td>100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default class AnalyticsCoo extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>Analítica de la Cooperativa 1</h2>
          <div className="container">
            <Line
              data={dataVentas}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Ventas de los últimos días",
                    fontSize: 48
                  },
                  legend: {
                    display: false,
                    position: "bottom"
                  }
                }
              }}
            />
          </div>
          <div className="row my-5 justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <Doughnut
                data={dataProductsMasVendidos}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: "Productos más vendidos"
                    },
                    legend: {
                      display: true,
                      position: "right",
                      labels: {
                        fontSize: 8,
                        boxWidth: 20,
                        boxHeight: 10
                      }
                    }
                  }
                }}
              />
            </div>
            <div className="col-sm-6 col-lg-4">
              <Doughnut
                data={dataOrigenClientes}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: "Zonas donde más productos se venden"
                    },
                    legend: {
                      display: true,
                      position: "right",
                      labels: {
                        fontSize: 8,
                        boxWidth: 20,
                        boxHeight: 10
                      }
                    }
                  }
                }}
              />
            </div>
            <div className="col-sm-6 col-lg-4">
              <Doughnut
                data={dataCatMásDemandadas}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: "Categorias más demandadas"
                    },
                    legend: {
                      display: true,
                      position: "right",
                      labels: {
                        fontSize: 8,
                        boxWidth: 20,
                        boxHeight: 10
                      }
                    }
                  }
                }}
              />
            </div>
            <div className="col-sm-6 col-lg-4">
              <Doughnut
                data={dataCoopMasVentas}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: "Cooperativas con más ventas totales"
                    },
                    legend: {
                      display: true,
                      position: "right",
                      labels: {
                        fontSize: 8,
                        boxWidth: 20,
                        boxHeight: 10
                      }
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <h2>Productos más vendidos</h2>
          <Table2 />
        </div>

        <div className="container">
          <h2>Información de tus clientes</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3>Edades</h3>
              <Doughnut
                data={dataAgeClients}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: "Edades"
                    },
                    legend: {
                      display: true,
                      position: "right",
                      labels: {
                        fontSize: 8,
                        boxWidth: 20,
                        boxHeight: 10
                      }
                    }
                  }
                }}
              />
            </div>
            <div className="col-md-6">
              <h3>Regiones</h3>
              <Table3 />
            </div>
          </div>
          <h2 className="py-4">PEDIDOS:</h2>
          <Trip />

          <h3 className="py-4">Ubicación exacta del paquete</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.608805998126!2d-99.16439297976001!3d19.429301212284695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff33846b3299%3A0x1fd31328356b921e!2sReforma%20222!5e0!3m2!1ses!2smx!4v1625617280655!5m2!1ses!2smx"
            width="100%"
            height="600"
            loading="lazy"
            className="mt-3"
          ></iframe>
        </div>
      </div>
    );
  }
}
