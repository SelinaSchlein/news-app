import {useEffect, useRef, useState} from "react";

export const useScrollToTop = () => {
    // Ref für den Seitenanfang definieren -> wie ein unsichtbares Lesezeichen
    const topRef = useRef<HTMLDivElement>(null);

    const [showButton, setShowButton] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            // es wird geschaut wie weit nach unten gescrollt wurde und wenn mehr als 300px dann wird der button angezeigt
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        // jedes mal wenn gescrollt wird, wird automatisch handleScroll ausgeführt
        window.addEventListener("scroll", handleScroll);

    }, []);

    // wenn der button gedrückt wird, scrollt er sanft nah oben zum topRef
    const scrollToTop = () => {
        topRef.current?.scrollIntoView({behavior: "smooth"});
    };

    return {topRef, showButton, scrollToTop};
}