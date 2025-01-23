import CarouselImg from "../components/molecules/Carousel.tsx/CarouselImg";
import MainTemplate from "../components/templates/MainTemplate";
// import { CardPlayers } from "../molecules/CardPlayers"
// import { CardShoes } from "../components/molecules/CardShoes";
// import Category from "../components/molecules/Category";
// import { CardPlayers } from "../components/molecules/CardPlayers";
import { NavLink } from "react-router-dom";
// import { CardPlayers } from "../molecules/CardPlayers";

const Home = () => {
  return (
    <MainTemplate
      pageTitle="Ur PetCare's"
    >
      <div className="mt-32">
        <CarouselImg />
      </div>
      {/* section 1 */}
      <div className="w-full pt-5">
        <div className="flex h-96">
          <div className="w-2/4 p-3">
            <h1 className="text-5xl font-sans font-bold mb-6">
              Karena Hewan Kesayanganmu
              <br />
              Layak Mendapatkan yang <br />{" "}
              <span className="text-6xl">Terbaik.</span>
            </h1>
            <p className="font-semibold mb-2 ">
              Mulai dari perawatan grooming, kesehatan, hingga kebutuhan harian
              hewan kesayangan, semuanya ada di{" "}
              <span className="text-blue-950 font-semibold text-sm font-sans  italic">
                <NavLink to={"/"}>Ur.Pet<span className="text-emerald-400">Cares..</span></NavLink>
              </span>
              .
            </p>
            <p className="font-semibold">
              Nikmati layanan terbaik untuk hewan kesayanganmu dengan harga
              spesial! Hewan bahagia, kamu pun tenang! 😊
            </p>
          </div>
          <div className="w-2/4">
            <img
              src="/src/assets/dogcats-Photoroom.png"
              className="h-full object-contain"
              alt="petcare "
            />
          </div>
        </div>
      </div>
      {/* section 2 */}
      {/* <div>
        <Category />
      </div> */}
      {/* section3 */}
      {/* <div className="mt-7 px-14">
        <h2 className="font-bold text-2xl">Flash Sale</h2>
        <div className="mb-10">
          <img
            className="w-screen"
            src="/src/assets/banner-diskon.jpg"
            alt=""
          />
        </div>
        <CardShoes />
      </div> */}
      {/* section4 */}
      {/* <div>
        <h3 className="mt-9 pb-4 text-2xl font-bold">Browse by Players</h3>
        <div>
          <CardPlayers />
        </div>
      </div> */}
    </MainTemplate>
  );
};

export default Home;
