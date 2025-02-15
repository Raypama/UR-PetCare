import { Carousel } from "flowbite-react"

function CarouselImg() {
    return (
        <div className="h-96 bg-transparent relative 2xl:h-96">
            <Carousel slideInterval={5000} >
                <img
                    src="/src/assets/bannerpetcare1.png"
                    alt="..."
                    className="absolute object-contain bg-emerald-800 w-full h-96"
                />
                <img
                    src="/src/assets/bannerpetcare2.png"
                    alt="..."
                    className="absolute object-contain bg-emerald-800 w-full h-96"
                />
               
               
            </Carousel>
        </div>
    )
}

export default CarouselImg