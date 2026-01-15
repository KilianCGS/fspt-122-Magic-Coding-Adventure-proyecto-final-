import { useEffect, useState } from "react";
import cursorOff from "./assets/images/cursorOff.png";
import cursorOn from "./assets/images/cursorOn.png";

function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const move = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const down = () => setClicked(true);
        const up = () => setClicked(false);

        window.addEventListener("mousemove", move);
        window.addEventListener("mousedown", down);
        window.addEventListener("mouseup", up);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mousedown", down);
            window.removeEventListener("mouseup", up);
        };
    }, []);

    return (
        <img
            src={clicked ? cursorOn : cursorOff}
            alt="cursor"
            style={{
                position: "fixed",
                left: position.x,
                top: position.y,
                width: "60px",
                height: "60px",
                pointerEvents: "none",
                zIndex: 9999,
            }}
        />

    );
}

export default CustomCursor;
