import CarouselImg from "../components/molecules/Carousel.tsx/CarouselImg";
import MainTemplate from "../components/templates/MainTemplate";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <MainTemplate pageTitle="Ur PetCare's">
      <div>
        <CarouselImg />
      </div>
      {/* section 1 */}
      <div className="w-full pt-5">
        <div className="flex flex-col md:flex-row items-center md:h-96">
          <div className="w-full md:w-2/4 p-3  md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold mb-4 sm:mb-6">
              Karena Hewan Kesayanganmu
              <br />
              Layak Mendapatkan yang <br />
              <span className="text-4xl sm:text-5xl md:text-6xl">Terbaik.</span>
            </h1>
            <p className="font-semibold mb-2 text-sm sm:text-base">
              Mulai dari perawatan grooming, kesehatan, hingga kebutuhan harian
              hewan kesayangan, semuanya ada di{" "}
              <span className="text-blue-950 font-semibold text-sm sm:text-base italic">
                <NavLink to={"/"}>
                  Ur.Pet<span className="text-emerald-400">Cares..</span>
                </NavLink>
              </span>
              .
            </p>
            <p className="font-semibold text-sm sm:text-base">
              Nikmati layanan terbaik untuk hewan kesayanganmu dengan harga
              spesial! Hewan bahagia, kamu pun tenang! 😊
            </p>
          </div>
          <div className="w-full md:w-2/4 flex justify-center mt-5 md:mt-0">
            <img
              src="/assets/dogcats-Photoroom.png"
              className="w-3/4 sm:w-2/4 md:w-full max-h-80 object-contain"
              alt="petcare"
            />
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Home;
