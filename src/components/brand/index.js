import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination"; 
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar,   } from "swiper";
import { useCallback, useRef } from "react";
const Brand = () =>{
    return<div>
         <Swiper
            // modules={[Navigation ]}
            spaceBetween={0}
            slidesPerView={5} 
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            className="w-full h-[150px] bg-white"
        >
        <SwiperSlide className="bg-sky-50 h-full w-full"><div className="flex items-center justify-center h-full w-full">Brand</div></SwiperSlide>
        <SwiperSlide className="bg-sky-50 h-full w-full"><div className="flex items-center justify-center h-full w-full">Brand</div></SwiperSlide>
        <SwiperSlide className="bg-sky-50 h-full w-full"><div className="flex items-center justify-center h-full w-full">Brand</div></SwiperSlide>
        <SwiperSlide className="bg-sky-50 h-full w-full"><div className="flex items-center justify-center h-full w-full">Brand</div></SwiperSlide>
        <SwiperSlide className="bg-sky-50 h-full w-full"><div className="flex items-center justify-center h-full w-full">Brand</div></SwiperSlide>
        <SwiperSlide className="bg-sky-50 h-full w-full"><div className="flex items-center justify-center h-full w-full">Brand</div></SwiperSlide>
        <SwiperSlide className="bg-sky-50 h-full w-full"><div className="flex items-center justify-center h-full w-full">Brand</div></SwiperSlide>
        <SwiperSlide className="bg-sky-50 h-full w-full"><div className="flex items-center justify-center h-full w-full">Brand</div></SwiperSlide>
         
    </Swiper>
    </div>
}

export default Brand;