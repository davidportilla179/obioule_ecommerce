import React from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import Table from "../components/Table";

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

export default class Analytics extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>Analítica de la plataforma</h2>
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
          <h2>Cooperativas</h2>
          <Table />
        </div>
      </div>
    );
  }
}
