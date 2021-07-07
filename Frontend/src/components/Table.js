import "../assets/styles/Table.css";
import { Link } from "react-router-dom";

const Table = () => {
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
                        <th>Nombre de la cooperativa</th>
                        <th>Estado</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Cooperativa 1</td>
                        <td>San Luis Potosí</td>
                        <td>
                          <Link to="/analytics/cooperativa1">
                            <button
                              className="btn btn-outline-success mr-2 my-2 my-sm-0"
                              type="submit"
                            >
                              Ver Detalles
                            </button>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Cooperativa 2</td>
                        <td>Yucatán</td>
                        <td>
                          <Link to="/analytics/cooperativa1">
                            <button
                              className="btn btn-outline-success mr-2 my-2 my-sm-0"
                              type="submit"
                            >
                              Ver Detalles
                            </button>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Cooperativa 3</td>
                        <td>Estado de México</td>
                        <td>
                          <Link to="/analytics/cooperativa1">
                            <button
                              className="btn btn-outline-success mr-2 my-2 my-sm-0"
                              type="submit"
                            >
                              Ver Detalles
                            </button>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Cooperativa 4</td>
                        <td>Estado de México</td>
                        <td>
                          <Link to="/analytics/cooperativa1">
                            <button
                              className="btn btn-outline-success mr-2 my-2 my-sm-0"
                              type="submit"
                            >
                              Ver Detalles
                            </button>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Cooperativa 5</td>
                        <td>Estado de México</td>
                        <td>
                          <Link to="/analytics/cooperativa1">
                            <button
                              className="btn btn-outline-success mr-2 my-2 my-sm-0"
                              type="submit"
                            >
                              Ver Detalles
                            </button>
                          </Link>
                        </td>
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

export default Table;
