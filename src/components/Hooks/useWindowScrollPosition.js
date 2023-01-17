import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useWindowScrollPosition(localStorageKey, setCondition) {
    const [scrollYStorage, setScrollYStorage] = useLocalStorage(localStorageKey, 0);
    useEffect(() => {
        if (setCondition) {
            window.scrollTo(50, scrollYStorage)
        }
    }, [setCondition, scrollYStorage])

    useEffect(() => {
        return () => {
            setScrollYStorage(window.scrollY)
        };
    },[])
}