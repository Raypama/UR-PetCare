import { Carousel } from "flowbite-react"

function CarouselImg() {
    return (
        <div className="h-56 sm:h-64 xl:h-80  relative 2xl:h-96">
            <Carousel slideInterval={900}>
                <img
                    src="/src/assets/banner-1.png"
                    alt="..."
                    className="absolute object-cover w-full h-full"
                />
                <img
                    src="/src/assets/banner-2.png"
                    alt="..."
                    className="absolute object-cover w-full h-full"
                />
                <img
                    src="/src/assets/banner-3.png"
                    alt="..."
                    className="absolute object-cover w-full h-full"
                />
                <img
                    src="/src/assets/banner-4.png"
                    alt="..."
                    className="absolute object-cover w-full h-full"
                />
                <img
                    src="/src/assets/banner-5.png"
                    alt="..."
                    className="absolute object-cover w-full h-full"
                />
            </Carousel>
        </div>
    )
}

export default CarouselImg