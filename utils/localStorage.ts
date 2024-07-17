// utils
import { weatherData } from "./weather";

export const saveToLocalStorage = (key: string, value: weatherData): void => {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch (e) {
        console.error("Error saving to localStorage", e);
    }
};

export const getFromLocalStorage = (key: string): weatherData | undefined => {
    try {
        const serializedValue = localStorage.getItem(key);
        if (serializedValue === null) {
            return undefined;
        }
        return JSON.parse(serializedValue) as weatherData;
    } catch (e) {
        console.error("Error getting from localStorage", e);
        return undefined;
    }
};
