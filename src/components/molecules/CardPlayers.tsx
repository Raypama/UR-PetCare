
"use client";

// import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const players = [
    {
        name: "Lebron James",
        backgroundImg: "bg-[url('/src/assets/bg.png')]",
        img: "/src/assets/lebron.png",
    },
    {
        name: "Steph Curry",
        backgroundImg: "bg-[url('/src/assets/bg.png')]",
        img: "/src/assets/curry.png",
    },
    {
        name: "kyrie",
        backgroundImg: "bg-[url('/src/assets/bg.png')]",
        img: "/src/assets/kyrie.png",
    },
    {
        name: "Kobe",
        backgroundImg: "bg-[url('/src/assets/bg.png')]",
        img: "/src/assets/kobe.png",
    },
    {
        name: "rey restu",
        backgroundImg: "bg-[url('/src/assets/bg.png')]",
        img: "/src/assets/rey-removebg-preview.png",
    },
    {
        name: "James Harden",
        backgroundImg: "bg-[url('/src/assets/bg.png')]",
        img: "/src/assets/harden.png",
    },
    {
        name: "Giannis",
        backgroundImg: "bg-[url('/src/assets/bg.png')]",
        img: "/src/assets/giannis.png",
    },
]



export function CardPlayers() {
    return (
        <div className="max-h-fit">
            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 m-6 gap-6">
                {players.map((item, i) => (

                    <div key={i} className="h-56 mb-5">
                        <Link to={"/player-list"}>

                            <div className=" h-full w-full bg-[url('/src/assets/bg.png')]">

                                <img className=" h-full w-full  " src={item.img} />
                                <h5 className="bg-slate-600 text-2xl font-bold tracking-tight text-gray-900  dark:text-white">
                                    {item.name}
                                </h5>
                            </div>

                        </Link>
                    </div>
                ))}


            </div>

        </div>
    );
}
