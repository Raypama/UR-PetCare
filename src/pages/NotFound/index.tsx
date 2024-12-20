// import React from 'react'

import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="w-3/5 h-auto m-20 text-center py-48   bg-slate-950 rounded shadow-md mx-auto">
                <h1 className="text-white text-xl">404</h1>
                <h2 className="text-2xl text-red-600 pb-5">Not Found!</h2>
                <h2 className="text-white text-lg  decoration-red-600 underline">"404! Halaman ini sedang liburan panjang. Tapi jangan khawatir,<br /> kami punya banyak halaman lain untuk dikunjungi."</h2>
                <div className="w-full h-10 mt-2">
                    <Link to={"/"} className="  bg-white rounded h-7 shadow-md shadow-yellow-100 font-semibold font-serif  ">Kembali ke Laman Utama</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
