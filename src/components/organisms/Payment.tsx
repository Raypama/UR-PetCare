import React from "react";
import Qr from "../../assets/QR.png";


interface PaymentProps {
  onClose: () => void;
}

const Payment: React.FC<PaymentProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Modal Box */}
      <div className="bg-white relative p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Payment</h2>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-black text-2xl hover:text-gray-700"
          >
            ✕
          </button>

        <div className="flex  flex-col items-center">
          <img
            src={Qr}
            alt="QRIS"
            className="w-full h-full object-cover mb-3"
          />
          <p className="text-gray-700">VA BCA MOBILE</p>
          <span className="font-semibold text-lg">8110732887336</span>
        </div>
      </div>
    </div>
  );
};

export default Payment;
