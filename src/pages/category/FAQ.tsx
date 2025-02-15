import { useState } from "react";
import MainTemplate from "../../components/templates/MainTemplate";

const faqs = [
  {
    question: "Apa layanan yang ditawarkan oleh PetCare?",
    answer: "PetCare menawarkan layanan perawatan hewan peliharaan seperti grooming, vaksinasi, penitipan, dan konsultasi dokter hewan."
  },
  {
    question: "Bagaimana cara melakukan booking layanan?",
    answer: "Anda dapat melakukan booking melalui website kami dengan login/register terlebih dahulu,dan pilih service yang dibutuhkan dan lanjut pilih tanggal & waktu yang tersedia."
  },
  {
    question: "Apakah PetCare menerima hewan peliharaan jenis apa saja?",
    answer: "Kami menerima berbagai jenis hewan peliharaan seperti anjing, kucing, kelinci, dan hewan kecil lainnya."
  },
  {
    question: "Apakah ada layanan darurat di PetCare?",
    answer: "Sayangnya saat ini belum, dikarenakan saat ini toko kami belum 24 jam buka"
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <MainTemplate pageTitle="Faq - PetCares">

    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">FAQ - PetCare</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <button
              className="w-full text-left flex justify-between items-center text-lg font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
    </MainTemplate>
  );
};

export default FAQ;
