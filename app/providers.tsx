// context
import SearchProvider from "@/context/SearchContext";

interface ProviderProps {
    children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
    return <SearchProvider>{children}</SearchProvider>;
}
