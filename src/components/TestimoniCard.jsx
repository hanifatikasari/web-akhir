function TestimoniCard(props) {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="p-4 bg-white rounded shadow-sm h-100">
        <h5 className="mb-4 text-start">“{props.text}”</h5>
        <div className="d-flex align-items-center gap-3">
          <img
            src={props.image}
            alt={props.nama}
            className="rounded-circle"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
          <div>
            <h6 className="mb-0 fw-bold text-start">{props.nama}</h6>
            <small className="text-muted">{props.tanggal}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimoniCard;