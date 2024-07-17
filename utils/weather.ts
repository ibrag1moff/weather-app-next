// axios
import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export type weatherData = {
    base: string;
    clouds: { all: number };
    cod: number;
    dt: number;
    id: number;
    main: {
        feels_like: number;
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    visibility: number;
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
        wind: { speed: number; deg: number };
    }[];
};

export const fetchWeatherData = async (query: string) => {
    const res = await axios.get(
        `${BASE_URL}?q=${query}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
    );
    return res.data;
};
