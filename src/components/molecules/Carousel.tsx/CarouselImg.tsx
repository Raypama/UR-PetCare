import { Carousel } from "flowbite-react"

function CarouselImg() {
    return (
        <div className="h-56 sm:h-64 md:h-80 lg:h-96 bg-transparent relative 2xl:h-[500px]">
          <Carousel slideInterval={5000}>
            <img
              src="/assets/bannerpetcare1.png"
              alt="..."
              className="w-full h-full object-cover md:object-contain bg-emerald-800"
            />
            <img
              src="/assets/bannerpetcare2.png"
              alt="..."
              className="w-full h-full object-cover md:object-contain bg-emerald-800"
            />
          </Carousel>
        </div>
      );
    }      

export default CarouselImg