import { Link } from "react-router-dom";



const FooterH = () => {
  const newDate = new Date().getFullYear();
  return (
    <div>
      <footer className="bg-gray-100 ">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-6 md:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <Link to={"/"} className="flex items-center space-x-3">
                  <img
                    src="/assets/petlogo.png"
                    className="h-10 w-auto"
                    alt="petcare Logo"
                  />
                  <h1 className="text-blue-950 font-semibold text-lg md:text-xl font-sans italic">
                    Ur.Pet<span className="text-emerald-400">Cares..</span>
                  </h1>
                </Link>
              </div>
              <p className="mt-2 text-xs md:text-sm text-gray-900 ">
                © {newDate} R41.Dev
              </p>
            </div>
  
            <div className="text-center md:text-left">
              <h2 className="mb-2 text-sm md:text-base font-semibold text-gray-900 uppercase ">
                Connect with us
              </h2>
              <ul className="text-gray-500  font-medium space-y-1">
                <li>
                  <Link to="#" className="hover:underline">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Twitter/X
                  </Link>
                </li>
              </ul>
            </div>
  
            <div className="text-center md:text-left">
              <h2 className="mb-2 text-sm md:text-base font-semibold text-gray-900 uppercase ">
                Help
              </h2>
              <ul className="text-gray-500  font-medium space-y-1">
                <li>
                  <Link to="/about" className="hover:underline">
                    Blog & News
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
  
            <div className="text-center md:text-left">
              <h2 className="mb-2 text-sm md:text-base font-semibold text-gray-900 uppercase ">
                Other
              </h2>
              <p className="text-gray-500  font-medium text-xs md:text-sm">
                Operasional: <br /> 09:00 AM - 08:00 PM
              </p>
            </div>
          </div>
  
          <div className="px-4 py-4   mt-6">
            <p className="text-center text-sm md:text-base font-semibold text-gray-900 ">
              #petcares | groom | and.growth.ur.pets
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
  
};

export default FooterH;
