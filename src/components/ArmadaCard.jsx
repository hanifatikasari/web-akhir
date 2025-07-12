import React from "react";
import '../pages/armada.css';

function ArmadaCard(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 d-flex flex-column transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white">
        <img
          src={props.image}
          alt={props.nama}
          className="card-img-top"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">{props.nama}</h5>
          <p className="card-desc p-3">{props.deskripsi}</p>
          <p className="card-harga fw-bold mt-auto">{props.harga}</p>
          <a href="#" className="btn btn-warning mt-auto">
            Sewa Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
export default ArmadaCard;