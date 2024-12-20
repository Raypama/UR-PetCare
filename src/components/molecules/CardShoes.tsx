
"use client";

import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import numeral from "numeral";

const shoes = [
    {
        title: "ASICS",
        description: "DeepBlue",
        price: 799000,
        image: "/src/assets/sepatu1.jpg"
    },
    {
        title: "MIZUNO ferari",
        description: "General White",
        price: 999000,
        image: "/src/assets/sepatu2.jpg"
    },
    {
        title: "NIKE HURU HARA",
        description: "Black Moral",
        price: 1799000,
        image: "/src/assets/sepatu3.jpg"
    },
    {
        title: "Nike Running",
        description: "white spoked",
        price: 499000,
        image: "/src/assets/sepatu4.jpg"
    },
    {
        title: "UA Lockdown 7",
        description: "White UA Basic",
        price: 899000,
        image: "/src/assets/sepatu6.jpg"
    },

]

export function CardShoes() {
    return (
        <div className="grid grid-cols-5  md:grid-cols-4 sm:grid-cols-3 gap-4">
            {shoes.map((item, i) => (
                <div key={i}   >
                    <Link to={"/card-list"}>
                        <Card
                            className="min-h-full"
                            renderImage={() => <img src={item.image} alt="image 1" />}
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.title}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {item.description}
                            </p>
                            <p className="font-medium text-gray-700 dark:text-gray-400">
                                Rp. {numeral(item.price).format('0,0')}
                            </p>
                        </Card>
                    </Link>
                </div>
            ))}
        </div>
    );
}
