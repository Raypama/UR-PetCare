
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-200 to-white  ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-6 bg-gray-900 text-white">
        <div>
          <h2 className="text-3xl font-bold">High Jeans..</h2>
          <p className="text-lg">2023 collections</p>
          <Link to="/shop" className="text-white hover:text-gray-300 ">shop now on ⓒ</Link>
        </div>
        <div className="text-6xl font-extrabold opacity-20 mt-4 md:mt-0">
          Shop Now
        </div>
      </div>
    </footer>
  );
}

export default Footer;