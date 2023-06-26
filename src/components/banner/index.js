import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination"; 
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar,   } from "swiper";
import { useCallback, useRef } from "react";
const Banner = () =>{
    return<div>
         <Swiper
            modules={[Navigation, Scrollbar, ]}
            spaceBetween={0}
            slidesPerView={1}
            navigation 
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            className="w-full h-[700px] bg-gray-500"
        >
        <SwiperSlide className="bg-white">
            <div className="max-w-7xl mx-auto flex items-center h-full">
                <div className="flex flex-col">
                    <div className="flex rounded-lg">
                        <div className="w-20 h-1 bg-sky-500 rounded-lg"></div>
                        <div className="w-10 h-1 bg-sky-200 rounded-lg"></div>
                    </div>
                    <div className="text-gray-600 text-5xl mt-12 font-medium">
                        Олон улсын 
                    </div>
                    <div className="text-blue-500 text-5xl mt-4 font-medium">
                        Мөнгөн гуйвуулга
                    </div>
                    <div className="text-gray-500 text-2xl mt-4 w-2/3">
                        Бүх төрлийн санхүүгийн үйлчилгээг нэг дороос хүлээн авах боломжтой
                    </div>
                    <div className="text-blue-500 text-2xl mt-4 w-2/3 flex  gap-4">
                        <div className="border rounded-lg border-blue-500 px-4 py-2">Google Play</div>
                        <div className="border rounded-lg border-blue-500 px-4 py-2">App Store</div>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white">
            <div className="max-w-7xl mx-auto flex items-center h-full">
                <div className="flex flex-col">
                    <div className="flex rounded-lg">
                        <div className="w-20 h-1 bg-sky-500 rounded-lg"></div>
                        <div className="w-10 h-1 bg-sky-200 rounded-lg"></div>
                    </div>
                    <div className="text-gray-600 text-5xl mt-12 font-medium">
                        Олон улсын 
                    </div>
                    <div className="text-blue-500 text-5xl mt-4 font-medium">
                        Мөнгөн гуйвуулга
                    </div>
                    <div className="text-gray-500 text-2xl mt-4 w-2/3">
                        Бүх төрлийн санхүүгийн үйлчилгээг нэг дороос хүлээн авах боломжтой
                    </div>
                    <div className="text-blue-500 text-2xl mt-4 w-2/3 flex  gap-4">
                        <div className="border rounded-lg border-blue-500 px-4 py-2">Google Play</div>
                        <div className="border rounded-lg border-blue-500 px-4 py-2">App Store</div>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white">
            <div className="max-w-7xl mx-auto flex items-center h-full">
                <div className="flex flex-col">
                    <div className="flex rounded-lg">
                        <div className="w-20 h-1 bg-sky-500 rounded-lg"></div>
                        <div className="w-10 h-1 bg-sky-200 rounded-lg"></div>
                    </div>
                    <div className="text-gray-600 text-5xl mt-12 font-medium">
                        Олон улсын 
                    </div>
                    <div className="text-blue-500 text-5xl mt-4 font-medium">
                        Мөнгөн гуйвуулга
                    </div>
                    <div className="text-gray-500 text-2xl mt-4 w-2/3">
                        Бүх төрлийн санхүүгийн үйлчилгээг нэг дороос хүлээн авах боломжтой
                    </div>
                    <div className="text-blue-500 text-2xl mt-4 w-2/3 flex  gap-4">
                        <div className="border rounded-lg border-blue-500 px-4 py-2">Google Play</div>
                        <div className="border rounded-lg border-blue-500 px-4 py-2">App Store</div>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white">
            <div className="max-w-7xl mx-auto flex items-center h-full">
                <div className="flex flex-col">
                    <div className="flex rounded-lg">
                        <div className="w-20 h-1 bg-sky-500 rounded-lg"></div>
                        <div className="w-10 h-1 bg-sky-200 rounded-lg"></div>
                    </div>
                    <div className="text-gray-600 text-5xl mt-12 font-medium">
                        Олон улсын 
                    </div>
                    <div className="text-blue-500 text-5xl mt-4 font-medium">
                        Мөнгөн гуйвуулга
                    </div>
                    <div className="text-gray-500 text-2xl mt-4 w-2/3">
                        Бүх төрлийн санхүүгийн үйлчилгээг нэг дороос хүлээн авах боломжтой
                    </div>
                    <div className="text-blue-500 text-2xl mt-4 w-2/3 flex  gap-4">
                        <div className="border rounded-lg border-blue-500 px-4 py-2">Google Play</div>
                        <div className="border rounded-lg border-blue-500 px-4 py-2">App Store</div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
         
    </Swiper>
    </div>
}

export default Banner;