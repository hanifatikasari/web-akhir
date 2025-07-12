import TestimoniCard from "./TestimoniCard";

function TestimoniSection() {
  return (
    <section className="testimoni py-5">
      <div className="container">
        <h1 className="text-center mb-5">Testimoni</h1>
        <div className="row g-4 justify-content-center">
          <TestimoniCard
            text="Mobil nyaman, bersih, driver handal dan profesional"
            nama="Ali"
            tanggal="9 Maret, 2025"
            image="images/cust1.jpeg"
          />
          <TestimoniCard
            text="Fit my expectation! Senang bisa memakai jasa Velocity Rent"
            nama="Selly"
            tanggal="8 Agustus, 2024"
            image="images/cust2.jpeg"
          />
          <TestimoniCard
            text="Travel nyaman dan aman, banyak pilihan armada yang harga dan kualitas tidak mengecewakan. Good job VR"
            nama="Sugiono"
            tanggal="31 Januari, 2025"
            image="images/cust3.jpeg"
          />
        </div>
      </div>
    </section>
  );
}

export default TestimoniSection;