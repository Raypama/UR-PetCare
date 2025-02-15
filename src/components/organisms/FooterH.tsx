import { Link } from "react-router-dom";



const FooterH = () => {
  const newDate = new Date().getFullYear();
  return (
    <div>
      <footer className="bg-gray-100 dark:bg-gray-700">
        <div className="mx-auto w-full max-w-screen-xl p-4">
          <div className="grid grid-cols-4 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 xl:grid-cols-4">
            <div>
              <div className="flex items-center">
                <div className="flex flex-wrap justify-between items-center   max-w-screen-xl p-4">
                  <Link
                    to={"/"}
                    className="flex items-center mx-auto space-x-3 rtl:space-x-reverse"
                  >
                    <img
                      src="/src/assets/petlogo.png"
                      className="h-10"
                      alt="petcare Logo"
                    />
                  </Link>
                </div>
                <div>
                  <h1 className="text-blue-950 font-semibold text-lg font-sans  italic">
                    Ur.Pet<span className="text-emerald-400">Cares..</span>
                  </h1>
                </div>
              </div>
              <div className=" text-center flex items-center ">
                <Link
                  to={"/"}
                  className="mb-6 text-xs  font-semibold text-gray-900 uppercase dark:text-white"
                >
                  © {newDate} R41.Dev
                </Link>
              </div>
            </div>
            <div>
              <h2 className="mb-1 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Connect with us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-1">
                  <Link to="#" className="hover:underline">
                    Facebook
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="hover:underline">
                    Instagram
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="hover:underline">
                    Twitter/X
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-1 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Blog & News
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/faq"  className="hover:underline">
                    FAQ
                  </Link>
                </li>

                
              </ul>
            </div>
            <div>
              <h2 className="mb-1 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Other
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-1">
                  <p> Operasional:</p>
                  <p> 09:00 AM - 08.00 PM</p>
                </li>
               
                
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between ">
            <p className="text-center mx-auto font-semibold">
              #petcares|groom|and.growth.ur.pets
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterH;
