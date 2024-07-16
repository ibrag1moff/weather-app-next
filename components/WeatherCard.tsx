"use client";
// next
import { useEffect, useState } from "react";

// utils
import { fetchWeatherData, weatherData } from "@/utils/weather";

// icons
import { RiCelsiusFill } from "react-icons/ri";

// components
import Sidebar from "./Sidebar";

// context
import { useSearch } from "@/context/SearchContext";

export interface WeatherInfo {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export default function WeatherCard() {
    const [data, setData] = useState<weatherData | null>(null);
    const [error, setError] = useState<string>("");
    const [currentDay, setCurrentDay] = useState<string>("");
    const { search } = useSearch();

    // fetch data
    const fetchData = async () => {
        if (search) {
            try {
                const weatherData = await fetchWeatherData(search);
                setData(weatherData);
            } catch (e) {
                setError(`Something went wrong!\nTry again in a few minutes!`);
                console.error("Error fetching weather data:", e);
            }
        }
    };

    // find current day
    useEffect(() => {
        let currentDate = new Date();
        let daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const day = daysOfWeek[currentDate.getDay()];
        setCurrentDay(day);
    }, []);

    // update background
    useEffect(() => {
        const updateBackgroundImage = () => {
            if (data) {
                const weather = data.weather.main?.toLowerCase();
                let imageUrl;
                switch (weather) {
                    case "clear":
                        imageUrl =
                            "https://4kwallpapers.com/images/wallpapers/clear-sky-sunset-dusk-blue-sky-starry-sky-horizon-beach-2560x1440-4044.jpg";
                        break;
                    case "clouds":
                        imageUrl =
                            "https://images5.alphacoders.com/132/thumb-350-1327980.png";
                        break;
                    case "rain":
                        imageUrl =
                            "https://cdn.britannica.com/65/123865-050-687A9E4C/Rain.jpg";
                        break;
                    case "snow":
                        imageUrl =
                            "https://cdn.mos.cms.futurecdn.net/ZAhFASRscCscBUj33239dH-1200-80.jpg";
                        break;
                    default:
                        imageUrl =
                            "https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg";
                }
                document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${imageUrl})`;
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundPosition = "center";
            }
        };

        updateBackgroundImage();
    }, [data]);

    return (
        <>
            <div className="flex flex-col items-center justify-center text-center mt-20 mb-12 md:m-0 md:absolute md:left-8 md:bottom-4 md:z-10 md:flex-row md:gap-3">
                {data ? (
                    <>
                        <h1 className="flex items-center gap-1 font-bold text-4xl md:text-5xl">
                            {data.main.temp.toFixed(0)}
                            <RiCelsiusFill size={32} />
                        </h1>
                        <div className="flex flex-col items-center md:items-start gap-[-10px]">
                            <span className="font-bold text-5xl text-center md:text-3xl lg:text-4xl">
                                {data.name}
                            </span>
                            <span className="text-center text-md text-gray-300">
                                {currentDay}
                            </span>
                        </div>
                    </>
                ) : (
                    <div>
                        <h1 className="font-semibold text-2xl md:text-3xl max-w-[400px]">
                            {error}
                        </h1>
                    </div>
                )}
            </div>
            <Sidebar data={data} fetchData={fetchData} />
        </>
    );
}
