import React from "react";
import Qr from "/assets/QR.png";


interface PaymentProps {
  onClose: () => void;
}

const Payment: React.FC<PaymentProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      {/* Modal Box */}
      <div className="bg-white relative p-4 sm:p-6 rounded-lg shadow-lg max-w-xs sm:max-w-sm w-full">
        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">Payment</h2>
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-3 right-2 sm:right-3 text-black text-xl sm:text-2xl hover:text-gray-700"
        >
          ✕
        </button>
  
        <div className="flex flex-col items-center">
          <img
            src={Qr}
            alt="QRIS"
            className="w-32 sm:w-40 h-32 sm:h-40 object-cover mb-2 sm:mb-3 rounded-lg shadow-md"
          />
          <p className="text-sm sm:text-base text-gray-700">VA BCA MOBILE</p>
          <span className="font-semibold text-base sm:text-lg">8110732887336</span>
        </div>
      </div>
    </div>
  );
  
};

export default Payment;
