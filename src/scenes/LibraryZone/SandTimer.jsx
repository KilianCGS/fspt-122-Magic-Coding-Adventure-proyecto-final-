import { useEffect, useState } from "react";
import SandImg from "../../assets/images/SandHourglass.png";
import "./LibraryZone.css";

export default function SandTimer({ seconds = 120, onTimeUp }) {
    const [timeLeft, setTimeLeft] = useState(seconds);

    useEffect(() => {
        setTimeLeft(seconds);
        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    onTimeUp();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds, onTimeUp]);

    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;

    return (
        <div className="sand-timer">
            <img src={SandImg} alt="Reloj de arena" className="sand-img" />
            <span>{`${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}</span>
        </div>
    );
}
