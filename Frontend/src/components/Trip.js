import "../assets/styles/Trip.css";

const Trip = () => {
  return (
    <>
      <div class="row shop-tracking-status">
        <div class="col-md-12">
          <div class="well">
            <div class="form-horizontal">
              <div class="form-group">
                <label
                  for="inputOrderTrackingID"
                  class="col-sm-2 control-label"
                >
                  Order id
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="inputOrderTrackingID"
                    value=""
                    placeholder="Ingresa el ID del pedido"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button
                    type="button"
                    id="shopGetOrderStatusID"
                    class="btn btn-success"
                  >
                    Rastrear paquete
                  </button>
                </div>
              </div>
            </div>

            <h4>Estado del paquete :</h4>

            <div class="order-status">
              <div class="order-status-timeline">
                <div class="order-status-timeline-completion c3"></div>
              </div>

              <div class="image-order-status image-order-status-new active img-circle">
                <span class="status">Aceptadi</span>
                <div class="icon"></div>
              </div>
              <div class="image-order-status image-order-status-active active img-circle">
                <span class="status">En proceso</span>
                <div class="icon"></div>
              </div>
              <div class="image-order-status image-order-status-intransit active img-circle">
                <span class="status">Enviado</span>
                <div class="icon"></div>
              </div>
              <div class="image-order-status image-order-status-delivered active img-circle">
                <span class="status">Entregado</span>
                <div class="icon"></div>
              </div>
              <div class="image-order-status image-order-status-completed active img-circle">
                <span class="status">Completado</span>
                <div class="icon"></div>
              </div>
            </div>

            <ul class="list-group">
              <li class="list-group-item">
                <span class="prefix">Paquete solicitado:</span>
                <span class="label label-success">06.06.2021</span>
              </li>
              <li class="list-group-item">
                <span class="prefix">Última actualización:</span>
                <span class="label label-success">06.07.2021</span>
              </li>
              <li class="list-group-item">
                <span class="prefix">Comentario:</span>
                <span class="label label-success">
                  Paquete acaba de llegar a la CDMX
                </span>
              </li>
              <li class="list-group-item">
                Está en proceso de entrega el paquete
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trip;
