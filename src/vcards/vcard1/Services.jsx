import { service } from "../../components/icons";

const Services = () => {
    return (
        <div className="w-screen min-h-screen center_div items-start pt-20">
            <div className="w-[300px] capitalize font-semibold px-10 h-[100px] gradient rounded-br-full absolute left-0 center_div text-white text-4xl">
                our Services
            </div>
            {/* services */}
            <div className="grid grid-cols-3 gap-x-10 gap-y-12  py-10 pt-[200px] ">
                {service.map((res, index) => {
                    return (
                        <div
                            key={index}
                            className="w-[400px] h-[300px] py-10 group relative flex items-center justify-center px-10 bg-white shadow-2xl rounded-2xl"
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
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
