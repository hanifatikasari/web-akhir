function FAQItem(props) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className={`accordion-button ${props.collapsed ? "collapsed" : ""}`} type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${props.id}`}
          aria-expanded={!props.collapsed}
          aria-controls={props.id}>
          {props.question}
        </button>
      </h2>
      <div id={props.id} className={`accordion-collapse collapse ${props.show ? "show" : ""}`}
        data-bs-parent="#accordionExample">
        <div className="accordion-body text-start">
          {props.children}
        </div>
      </div>
    </div>
  );
}
export default FAQItem;