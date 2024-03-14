import { contact, social } from "../../components/icons";

const Hero = () => {
    return (
        <div className="center_div flex-col">
            <div className="w-full h-[50vh] bg-no-repeat bg-center bg-cover bg-[url('https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=600')]"></div>
            <div className="w-[150px] h-[150px]  rounded-full -mt-[70px] z-50">
                <img
                    src="https://images.pexels.com/photos/4049671/pexels-photo-4049671.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="w-full h-full rounded-full"
                />
            </div>
            <div className="center_div py-4 text-black flex-col gap-y-2">
                <h1 className="text-3xl font-bold">Jane Scott</h1>
                <h1 className="text-md font-semibold">Developer</h1>
            </div>
            {/* social */}
            <div className="center_div py-10 gap-x-10">
                {social.map((res, index) => {
                    return (
                        <div
                            key={index}
                            className="size-[70px] text-2xl text-white rounded-full gradient center_div"
                        >
                            {<res.icon />}
                        </div>
                    );
                })}
            </div>
            {/* contact */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-12  py-10">
                {contact.map((res, index) => {
                    return (
                        <div
                            key={index}
                            className="w-[400px] h-[120px] flex items-center px-10 bg-white shadow-2xl rounded-2xl"
                        >
                            <div className="flex justify-start items-center gap-x-10">
                                <div className="!text-4xl !text-green">
                                    {<res.icon className="!text-pink-500" />}
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <span className="text-xl font-semibold">
                                        {res.title}
                                    </span>
                                    <span> {res.subTitle}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Hero;
