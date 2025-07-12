import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import TestimoniSection from './components/TestimoniSection';
import FAQSection from './components/FAQSection';
import FooteSection from './components/FooterSection';
import { Routes, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import TentangKami from './pages/TentangKami';
import Armada from './pages/Armada';
import './App.css';

function App() {
  return (
    <>
      {/* === NAVBAR === */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="images/logo.png" alt="logo" style={{ width: '150px', height: 'auto', marginTop: 0 }} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">BERANDA</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/TentangKami#form" className="nav-link">KIRIM PESAN</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  LAINNYA
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/TentangKami" className="dropdown-item">Tentang Kami</NavLink>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <NavLink to="/Armada#armada" className="dropdown-item">ARMADA</NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* === ROUTES === */}
      <Routes>
        <Route path="/" element={
          <>
            <main className="content-wrapper">
              <section className="hero">
                <div className="hero-text">
                  <h1>Sewa Mobil Dengan <span>Driver</span> Profesional di Kota Pekalongan</h1>
                  <p className='mb-5'>Layanan jasa sewa mobil terpercaya untuk memenuhi kebutuhan anda</p>
                  <Link to="/TentangKami">selengkapnya tentang kami</Link>
                </div>
                <div>
                  <video poster="images/car4.jpeg" autoPlay muted loop controls>
                    <source src="/video_car-rent.mp4" type="video/mp4" />
                    perangkat tidak mendukung pemutaran video
                  </video>
                </div>
              </section>

              <section className="service">
                <div>
                  <img src="images/service.png" alt="aset gambar" />
                </div>
                <div>
                  <h3>Service dan Layanan</h3>
                  <ul>
                    <li>layanan 24/7</li>
                    <li>perjalanan pribadi</li>
                    <li>bisnis/dinas</li>
                    <li>paket pariwisata/travel</li>
                    <li>wedding</li>
                    <li>paket car+driver profesional</li>
                    <li>kebersihan dan kenyamanan</li>
                    <li>harga variatif dan kompetitif</li>
                  </ul>
                </div>
              </section>

              <div className="container-fluid py-5">
                <h1 className="textv-center mb-4">Armada Kami</h1>
                <div id="carouselExampleIndicators" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                      className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
                  </div>

                  <div className="carousel-inner">
                    {/* Slide 1 */}
                    <div className="carousel-item active">
                      <div className="row gx-4 px-4">
                        <div className="col-md-4">
                          <div className="card-box">
                            <img src="images/car1.jpeg" className="d-block w-100" alt="Toyota Supra MK4" />
                            <h3 className="mt-2 text-start">Toyota Supra MK4</h3>
                            <p>untuk semua layanan, driver (optional),tidak termasuk BBM, parkir, dll, sesuai SK kami</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card-box">
                            <img src="images/car2.jpeg" className="d-block w-100" alt="Porsche 911" />
                            <h3 className="mt-2 text-start">Porsche 911</h3>
                            <p>untuk semua layanan, driver (optional),tidak termasuk BBM, parkir, dll, sesuai SK kami</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card-box">
                            <img src="images/car3.jpeg" className="d-block w-100" alt="Porsche 912" />
                            <h3 className="mt-2 text-start">Porsche 912</h3>
                            <p>untuk semua layanan, driver (optional),tidak termasuk BBM, parkir, dll, sesuai SK kami</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item">
                      <div className="row gx-4 px-4">
                        <div className="col-md-4">
                          <div className="card-box">
                            <img src="images/car5 (1).jpeg" className="d-block w-100" alt="Jeep Wrangler Rubicon 392" />
                            <h3 className="mt-2 text-start">Jeep Wrangler Rubicon 392</h3>
                            <p>untuk semua layanan, driver (optional),tidak termasuk BBM, parkir, dll, sesuai SK kami</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card-box">
                            <img src="images/car5 (2).jpeg" className="d-block w-100" alt="Flying Ford Anglia Diecast" />
                            <h3 className="mt-2 text-start">Ford Anglia 105E</h3>
                            <p>untuk semua layanan, driver (optional),tidak termasuk BBM, parkir, dll, sesuai SK kami</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card-box">
                            <img src="images/car5 (3).jpeg" className="d-block w-100" alt="Porsche Taycan Turbo S 2024" />
                            <h3 className="mt-2 text-start">Porsche Taycan Turbo S 2024</h3>
                            <p>untuk semua layanan, driver (optional),tidak termasuk BBM, parkir, dll, sesuai SK kami</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="carousel-item">
                      <div className="row gx-4 px-4">
                        <div className="col-md-4">
                          <div className="card-box">
                            <img src="images/car5 (4).jpeg" className="d-block w-100" alt="Volkswagen Cross Polo" />
                            <h3 className="mt-2 text-start">Volkswagen CrossPolo</h3>
                            <p>untuk semua layanan, driver (optional),tidak termasuk BBM, parkir, dll, sesuai SK kami</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card-box">
                            <img src="images/car5 (5).jpeg" className="d-block w-100" alt="Next 1993 PORSCHE 964 Turbo S 'Leichtbau'" />
                            <h3 className="mt-2 text-start">PORSCHE 964 Turbo S 'Leichtbau'</h3>
                            <p>untuk semua layanan, driver (optional),tidak termasuk BBM, parkir, dll, sesuai SK kami</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card-box">
                            <img src="images/car5 (6).jpeg" className="d-block w-100" alt="Jeep JL/JT High-Line" />
                            <h3 className="mt-2 text-start">Jeep JT</h3>
                            <p>untuk semua layanan, driver (optional),tidak termasuk BBM, parkir, dll, sesuai SK kami</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tombol Navigasi */}
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

                <div className="armada-btn-wrapper">
                  <Link to='/Armada#armada' ><button className="armada-btn">ALL ARMADA</button></Link>

                </div>
              </div>

            </main>

            {/* Komponen tambahan */}
            <TestimoniSection />
            <FAQSection />
          </>
        }
        />

        {/* Komponen rout antar pages */}
        <Route path="/TentangKami" element={<TentangKami />} />
        <Route path="/Armada" element={<Armada />} />
      </Routes>

      <FooteSection />
    </>
  );
}

export default App;