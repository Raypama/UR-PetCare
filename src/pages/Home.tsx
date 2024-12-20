import CarouselImg from "../components/molecules/Carousel.tsx/CarouselImg";
import MainTemplate from "../components/templates/MainTemplate";
// import { CardPlayers } from "../molecules/CardPlayers"
import { CardShoes } from "../components/molecules/CardShoes";
import Category from "../components/molecules/Category";
import { CardPlayers } from "../components/molecules/CardPlayers";
// import { CardPlayers } from "../molecules/CardPlayers";

const Home = () => {
  return (
    <MainTemplate
      pageTitle="(dev)Hoops Point Indonesia Toko Jual Sepatu Basket Original Sneakers Nike Original Adidas
    Puma Jordan"
    >
      <div className="mt-44">
        <CarouselImg />
      </div>
      {/* section 1 */}
      <div>
        <Category />
      </div>
      {/* section2 */}
      <div className="mt-7 px-14">
        <h2 className="font-bold text-2xl">Flash Sale</h2>
        <div className="mb-10">
          <img
            className="w-screen"
            src="/src/assets/banner-diskon.jpg"
            alt=""
          />
        </div>
        <CardShoes />
      </div>
      {/* section3 */}
      <div>
        <h3 className="mt-9 pb-4 text-2xl font-bold">Browse by Players</h3>
        <div>
          <CardPlayers />
        </div>
      </div>
    </MainTemplate>
  );
};

export default Home;
