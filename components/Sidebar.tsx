// type
import { FormEvent } from "react";

// components
import { WeatherInfo } from "./WeatherCard";

// context
import { useSearch } from "@/context/SearchContext";

// icons
import { RiCelsiusFill } from "react-icons/ri";

interface SidebarProps {
    data: any;
    fetchData: () => void;
}

export default function Sidebar({ data, fetchData }: SidebarProps) {
    const { search, setSearch } = useSearch();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        fetchData();
        setSearch("");
    };

    return (
        <>
            <div className="w-full md:w-[45%] lg:w-[40%] md:ml-auto h-screen bg-white p-4 backdrop-blur-md bg-opacity-30 shadow-lg md:rounded-xl">
                <form
                    onSubmit={handleSubmit}
                    className="flex items-center justify-center py-8"
                >
                    <input
                        className="py-2 w-[350px] bg-gray-300 rounded-xl pl-3"
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
                <h1 className="font-medium text-center uppercase tracking-[2px] mb-4 text-gray-300">
                    Weather Details
                </h1>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <p className=" text-gray-300 font-medium">Feels like</p>
                        {data && (
                            <span className="flex items-center gap-[2px] text-gray-300 font-semibold">
                                {(data?.main.feels_like).toFixed(0)}{" "}
                                <span>
                                    <RiCelsiusFill />
                                </span>
                            </span>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-gray-300 font-medium">Humidity</p>
                        {data && (
                            <span className="text-gray-300 font-semibold">
                                {data?.main.humidity}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-gray-300 font-medium">Pressure</p>
                        {data && (
                            <span className="text-gray-300 font-semibold">
                                {(data?.main.pressure).toFixed(0)}
                            </span>
                        )}
                    </div>
                </div>
                <hr className="border-t border-gray-300 my-4" />
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-300">Country</p>
                        <span className="font-semibold text-gray-300">
                            {data?.sys?.country}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-300">Weather</p>
                        <>
                            {data?.weather?.map((x: WeatherInfo) => (
                                <span
                                    className="font-semibold text-gray-300"
                                    key={x.id}
                                >
                                    {x.main}
                                </span>
                            ))}
                        </>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className=" font-medium text-gray-300">
                            Description
                        </p>
                        <>
                            {data?.weather.map((x: WeatherInfo) => (
                                <span
                                    className=" font-semibold capitalize text-gray-300"
                                    key={x.id}
                                >
                                    {x.description}
                                </span>
                            ))}
                        </>
                    </div>
                </div>
                <hr className="border-t border-gray-300 my-4" />
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-300">Wind</p>
                        {data && (
                            <span className="font-medium text-gray-300">
                                {data?.wind.speed} km/h
                            </span>
                        )}
                    </div>
                </div>
                <hr className="border-t border-gray-300 my-4" />
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-300">
                            Max temperature
                        </p>
                        {data && (
                            <span className="flex items-center gap-[2px] font-medium text-gray-300">
                                {(data?.main.temp_max).toFixed(0)}
                                <span>
                                    <RiCelsiusFill />
                                </span>
                            </span>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-300">
                            Min temperature
                        </p>
                        {data && (
                            <span className="flex items-center gap-[2px] font-medium text-gray-300">
                                {(data?.main.temp_min).toFixed(0)}
                                <span>
                                    <RiCelsiusFill />
                                </span>
                            </span>
                        )}
                    </div>
                    <hr className="border-t border-gray-300 my-4" />
                </div>
            </div>
        </>
    );
}
