import { Link } from "react-router-dom"



const FooterH = () => {
    return (
        <div>
            <footer className="bg-gray-100 dark:bg-gray-700">
                <div className="mx-auto w-full max-w-screen-xl p-4">
                    <div className="grid grid-cols-3 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 xl:grid-cols-5">
                        <div>
                            <div className="flex flex-wrap justify-between items-center   max-w-screen-xl p-4">
                                <Link to={"/"} className="flex items-center mx-auto space-x-3 rtl:space-x-reverse">
                                    <img src="/src/assets/petlogo.png" className="h-20" alt="petcare Logo" />

                                </Link>

                            </div>
                            <div className=" text-center ">

                                <Link to={"/"} className="mb-6 text-sm  font-semibold text-gray-900 uppercase dark:text-white">© 2024 PT. NEO CIPTA REVOLUSI</Link>
                            </div>

                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Connect with us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">Facebook</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">Instagram</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">Twitter/X</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">Blog & News</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">How To Buy</Link>
                                </li>

                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">Testimonial</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">Check Order</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">Terms and Condition</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">Payment Confirmation</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Customer Services</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">(+62)-882-4516-xx21</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">Resort Lifestyle Place  <br />jl.Sukajadi  Bandung <br />40162 indonesia</Link>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Layanan Pengaduan Konsumen
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <p>Direktorat Jenderal <br />Perlindungan Konsumen dan <br />Tertib Niaga Kementrian <br />Perdagangan Republik Indonesia</p>
                                </li>
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">(+62)-882-xx12-1888</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">sample.us@kemendag.go.id</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between ">
                        <p className="text-center mx-auto font-semibold">petcares|groom|and.growth.ur.pets</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterH

