"use client";
// next
import { useContext, createContext, ReactNode, useState } from "react";

type SearchProviderProps = {
    children: ReactNode;
};

type searchContext = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const searchContext = createContext({} as searchContext);

export const useSearch = () => useContext(searchContext);

export default function SearchProvider({ children }: SearchProviderProps) {
    const [search, setSearch] = useState<string>("");
    return (
        <searchContext.Provider value={{ search, setSearch }}>
            {children}
        </searchContext.Provider>
    );
}
