// src/pages/Armada.jsx
import React from "react";
import "./Armada.css";
import ArmadaCard from "../components/ArmadaCard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Armada() {
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
  }, [location]);
  return (
    <div className="container py-5 armada-page">
      <h1 className="text-center mb-5" id="armada">Semua Armada</h1>
      <div className="row">
        <ArmadaCard 
          image="images/car1.jpeg"
          nama="Toyota Supra MK4"
          deskripsi="Mobil sport dari generasi keempat dari mobil sport Toyota Supra, yang diproduksi dari tahun 1993 hingga 2002. Performa mesinnya yang bertenaga, desain yang aerodinamis.mesin 2JZ-GTE, mesin 3.0L twin-turbo inline-six yang legendaris, yang mampu menghasilkan tenaga besar"
          harga="Rp 8.000.000 / hari"
        />
        <ArmadaCard
          image="images/car2.jpeg"
          nama="Porsche 911"
          deskripsi="Ditenagai dua pilihan mesin Bensin berkapasitas 3745 cc. 911 tersedia dengan transmisi Otomatis and Manual tergantung variannya. 911 adalah Convertible 2 seater dengan panjang 4535 mm, lebar 2024 mm, wheelbase 2450 mm. serta ground clearance 161 mm"
          harga="Rp 12.500.000 / hari"
        />
        <ArmadaCard
          image="images/car3.jpeg"
          nama="Porsche 912"
          deskripsi="Varian entry-level dari 911 ini juga ditawarkan dalam gaya bodi kompak 2+2 Coupé dan Targa. 912 yang lincah ini dibekali mesin 1,6 liter flat-4 berpendingin udara dari 356 terakhir, yang sedikit diturunkan tenaganya menjadi 102 tenaga kuda SAE pada 5.800 rpm."
          harga="Rp 13.800.000 / hari"
        />
        <ArmadaCard
          image="images/car5 (1).jpeg"
          nama="Jeep Wrangler Rubicon 392"
          deskripsi="Dilengkapi dengan suspensi yang ditingkatkan, ban besar, dan fitur-fitur seperti sistem penggerak 4WD full-time dengan rasio gigi rendah, serta kemampuan menerjang banjir yang baik. "
          harga="Rp 10.000.000 / hari"
        />
        <ArmadaCard
          image="images/car5 (2).jpeg"
          nama="Ford Anglia 105E"
          deskripsi="Anglia 105E menggunakan mesin 4 silinder segaris 997cc (105E) yang baru dikembangkan, atau opsi mesin 1.2 liter (123E). Mesin 997cc menghasilkan tenaga sekitar 39 bhp pada 5000 rpm. Menggunakan transmisi manual 4 kecepatan."
          harga="Rp 15.800.000 / hari"
        />
        <ArmadaCard
          image="images/car5 (3).jpeg"
          nama="Porsche Taycan Turbo S 2024"
          deskripsi="mobil listrik performa tinggi yang menawarkan akselerasi luar biasa dan teknologi canggih. Model ini merupakan varian teratas dari Taycan, menampilkan tenaga hingga 764 hp dan mampu berakselerasi dari 0-100 km/jam dalam 2.4 detik"
          harga="Rp 5.000.000 / hari"
        />
        <ArmadaCard
          image="images/car5 (4).jpeg"
          nama="Volkswagen CrossPolo"
          deskripsi="cocok untuk mereka yang menginginkan mobil kompak dengan tampilan yang lebih gagah dan kemampuan melewati berbagai kondisi jalan di perkotaan. Ditenagai oleh 1197cc 4-silinder Bensin Mesin menghasilkan tenaga 105 hp dengan torsi 175 Nm. Dilengkapi dengan pilihan transmisi 7-Speed Dual Clutch."
          harga="Rp 2.500.000 / hari"
        />
        <ArmadaCard
          image="images/car5 (5).jpeg"
          nama="Porsche 964 Turbo S 'Leichtbau'"
          deskripsi="Menggunakan mesin 3.3 liter turbocharged flat-six (M30/69) yang menghasilkan 381 hp dan torsi 362 lb-ft. Mampu berakselerasi dari 0-60 mph dalam 4.6 detik dan mencapai kecepatan tertinggi sekitar 180 mph (290 km/jam).memiliki interior yang lebih ringan dengan fitur kenyamanan yang dikurangi untuk mengurangi berat keseluruhan.  "
          harga="Rp 1.800.000 / hari"
        />
        <ArmadaCard
          image="images/car5 (6).jpeg"
          nama="Jeep Wrangler (JT)"
          deskripsi="Jeep Gladiator (JT) bagian belakang. Gladiator ukuran sedang empat pintu berkapasitas lima penumpang. Jeep JT menawarkan berbagai fitur, termasuk sistem penggerak empat roda, pengunci diferensial, dan suspensi yang dirancang untuk medan berat. "
          harga="Rp 500.000 / hari"
        />
      </div>
    </div>
  );
}