import numeral from "numeral";
import { Link, useLocation } from "react-router-dom";
import dogCatSans from "../../assets/dogcatsans.jpg";

interface ServiceProps {
  id: number;
  name: string;
  description: string;
  price: number;
  onSelectService?: (id: number) => void; // Tambahkan prop baru
  isDetail?: boolean;
}

const ServiceCard = ({
  id,
  name,
  description,
  price,
  onSelectService,
  isDetail,
}: ServiceProps) => {
  const location = useLocation();
  const isBookingPage = location.pathname.startsWith(`/booking/`);
  return (
    <div
      onClick={() => onSelectService?.(id)} // Kirim ID ke parent saat diklik
      className={`${
        isBookingPage ? " min-h-40" : ""
      } flex flex-col justify-between cursor-pointer shadow-md border   min-h-56 hover:bg-slate-200 transition`}
    >
      <div
        className="bg-cover bg-center h-auto w-full"
        // style={{ backgroundImage: `url(${dogCatSans})` }}
      >
        <div className="flex-col  h-full">
          <img src={dogCatSans} alt="" />
          <div className="px-2">

          <h1 className="mb-1 text-lg font-semibold">
            <span className="font-semibold">Service :</span> {name}
          </h1>
          <p className="mb-2 text-base">
            <span className="font-semibold">Desc :</span> {description}
          </p>
          <p className="text-base mb-4">
            <span className="font-semibold">Price :</span>
            <span className="italic"> Rp. {numeral(price).format("0,0")}</span>
          </p>
          </div>
        </div>
      </div>
      <div>
        {!isDetail && (
          <div className="">
            <Link to={`/booking/${id}`} >
            <div className="px-2">

              <button
                className={`text-center w-full shadow-md min-h-10 rounded mb-2  bg-emerald-300 hover:motion-preset-oscillate motion-duration-1500 ${
                  !isBookingPage ? "" : "hidden"
                }`}
              >
                Book Service
              </button>
            </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default ServiceCard;
