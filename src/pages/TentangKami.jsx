import React from "react";
import "./TentangKami.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TentangKami() {

    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const target = document.querySelector(location.hash);
            if (target) {
                setTimeout(() => {
                    target.scrollIntoView({ behavior: "smooth" });
                }, 100); // tunggu render selesai
            }
        }
    }, [location]); // perhatikan: lokasi berubah, scroll dijalankan

    return (
        <main className="content-wrapper tentang-kami-wrapper">
            <div className="container-tengtang-kami">
                <div className="row">
                    <div className="col-12 col-md-8 mt-4 d-flex flex-column justify-content-center">
                        <h1>Tentang Kami</h1>
                        <p>
                            Velocity Rent adalah perusahaan jasa penyewaan mobil terpercaya yang berlokasi di Kota Pekalongan. Sejak berdiri pada tahun 2015, kami telah berkomitmen menjadi mitra transportasi yang profesional dan dapat diandalkan bagi setiap pelanggan, baik individu, keluarga, maupun perusahaan. Dengan pengalaman bertahun-tahun, kami menghadirkan solusi transportasi yang efisien, aman, dan nyaman untuk berbagai keperluan, mulai dari perjalanan pribadi, kebutuhan bisnis, hingga acara istimewa seperti pernikahan dan wisata keluarga.
                        </p>
                        <p>
                            Keunggulan kami terletak pada komitmen terhadap kualitas layanan. Kami tidak hanya menyediakan kendaraan yang bersih dan terawat, tetapi juga menghadirkan driver yang profesional, ramah, dan tepat waktu. Dalam setiap transaksi, kami selalu mengedepankan kepuasan pelanggan sebagai prioritas utama. Kami percaya bahwa pelayanan yang tulus dan transparan adalah kunci untuk membangun hubungan jangka panjang dengan para pelanggan kami. Oleh karena itu, Velocity Rent terus berinovasi untuk menghadirkan layanan sewa mobil yang lebih fleksibel dan sesuai dengan kebutuhan zaman.
                        </p>
                        <p>
                            Dengan harga yang kompetitif, pilihan armada yang beragam, serta sistem pemesanan yang mudah dan responsif, Velocity Rent siap menjadi solusi transportasi terpercaya di Pekalongan dan sekitarnya. Kami sangat menghargai setiap masukan dan kepercayaan yang diberikan pelanggan, karena dari sanalah kami terus berkembang. Terima kasih atas dukungan dan loyalitas Anda, pelanggan setia kami. Bersama Velocity Rent, perjalanan Anda akan selalu menyenangkan, aman, dan penuh kenyamanan.
                        </p>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src="images/about-us.jpg" className="w-100" alt="Tentang Kami" />
                    </div>
                </div>

                {/* === FORM KIRIM PESAN === */}
            </div>
            <section className="form" id="form" >
                <h1>Beri Komentar Anda</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="nama_depan">Nama Depan:</label>
                            <input type="text" id="nama_depan" name="nama_depan" placeholder="velocity" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nama_belakang">Nama Belakang:</label>
                            <input type="text" id="nama_belakang" name="nama_belakang" placeholder="rent" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Alamat Email:</label>
                        <input type="text" id="email" name="email" placeholder="velocityrent@gmail.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="pesan">Pesan Anda:</label>
                        <textarea id="pesan" name="pesan" placeholder="Masukkan komentar atau pertanyaan anda"></textarea>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </section>
        </main>
    );
}

export default TentangKami;