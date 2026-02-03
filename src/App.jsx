import { useState, useEffect } from "react";
import SceneRouter from "./scenes/WorldScenes/SceneRouter";
import LoaderOverlay from "./Components/Loader/LoaderOverlay";
import { TimeProvider } from "./context/TimeContext";
import { GameOverProvider } from "./context/GameOverContext";
import CustomCursor from "./CustomCursor";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [inGame, setInGame] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    const [screen, setScreen] = useState("intro");
    const [loading, setLoading] = useState(false);
    const [activeZone, setActiveZone] = useState(null);

    const goToWorld = () => {
        setLoading(true);
        setTimeout(() => {
            setScreen("world");
            setLoading(false);
        }, 800);
    };

    const goToZone = (zoneId) => {
        setActiveZone(zoneId);
        setLoading(true);
        setTimeout(() => {
            setScreen("zone");
            setLoading(false);
        }, 800);
    };

    const backToWorld = () => {
        setLoading(true);
        setTimeout(() => {
            setScreen("world");
            setActiveZone(null);
            setLoading(false);
        }, 800);
    };

    const backToLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setInGame(false);
            setLoggedIn(false);
            setShowAbout(false);
            setScreen("intro");
            setActiveZone(null);
            setLoading(false);
        }, 800);
    };

    return (
        <GameOverProvider>
            <TimeProvider>
                <CustomCursor />
                <LoaderOverlay visible={loading} />

                {!loading && <SceneRouter />}
            </TimeProvider>
        </GameOverProvider>
    );
}

export default App;
