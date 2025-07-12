import FAQItem from "./FAQItem";

function FAQSection(){
  return (
    <div className="pemesanan-faq">
      <div className="row">
        <div className="col-12">
          <h1 className="m-4 text-center fw-bold">Frequently Ask Question</h1>
        </div>
        <div className="col-12">
          <div className="accordion" id="accordionExample">

            <FAQItem
              id="collapseOne"
              question="Dimana letak kantor Velocity Rent?"
              collapsed={false}
              show={false}
            >
              <span className="fw-bold">Velocity Rent terletak di</span> <a href="#">Baros, Kec. Pekalongan Tim., Kota Pekalongan, Jawa Tengah 51129</a>
            </FAQItem>

            <FAQItem
              id="collapseTwo"
              question="Nomor utama yang bisa dihubungi"
              collapsed={true}
              show={false}
            >
              Kami memiliki layanan nomor seluler utama yang dapat dihubungi melalui call center atau media online
              seperti WhatsApp dan Line melalui nomor berikut <span className="fw-bold"><a href="#">081234567890</a></span>
            </FAQItem>

            <FAQItem
              id="collapseThree"
              question="Titik pusat kantor Velocity Rent (Maps)"
              collapsed={true}
              show={true}
            >
              <p className="fw-bold pb-4">Berikut adalah titik pusat maps kantor VR resmi</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506993.89001183544!2d109.17158305!3d-6.9037840000000035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70250c22515ef9%3A0x42a1dc60951fccf!2sRental%20Mobil%20Pekalongan%20(Janoko)!5e0!3m2!1sid!2sid!4v1746745150068!5m2!1sid!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </FAQItem>

          </div>
        </div>
      </div>
    </div>
  );
}
export default FAQSection;