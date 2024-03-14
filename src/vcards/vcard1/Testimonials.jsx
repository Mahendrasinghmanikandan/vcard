import { service } from "../../components/icons";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
    return (
        <div className="w-screen min-h-screen center_div items-start pt-20">
            <div className="w-[300px] capitalize font-semibold px-10 h-[100px] gradient rounded-bl-full absolute right-0 center_div text-white text-4xl">
                Testimonials
            </div>
            {/* services */}
            <div className=" py-10 pt-[200px] flex items-center justify-center bg-red-400 !w-screen">
                <Swiper
                    slidesPerView={3}
                    className="w-[70vw]  py-10 px-10 "
                    spaceBetween={30}
                    centeredSlides={true}
                >
                    {service.map((res, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div
                                    key={index}
                                    className="w-[300px] h-[200px] py-10 group relative flex items-center justify-center px-10 bg-white shadow-2xl rounded-2xl"
                                >
                                    <div className="flex justify-center group flex-col items-center gap-x-10 gap-y-10">
                                        <div className="!text-4xl shadow-inner w-[100px] h-[100px] center_div rounded-full">
                                            {
                                                <img
                                                    src={res.icon}
                                                    className="rounded-full w-full h-full group-hover:scale-110 transition-all duration-500"
                                                />
                                            }
                                        </div>
                                        <div className="flex flex-col gap-y-2 items-center">
                                            <span className="text-xl font-semibold">
                                                {res.name}
                                            </span>
                                            <span className="line-clamp-3 text-center">
                                                {res.description}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
