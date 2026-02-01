import { useState, useEffect } from "react";
import SceneRouter from "./scenes/WorldScenes/SceneRouter";
import LoginScreen from "./scenes/LoginScreen/LoginScreen";
import LoaderOverlay from "./Components/Loader/LoaderOverlay";
import { TimeProvider } from "./context/TimeContext";
import { GameOverProvider } from "./context/GameOverContext";
import CustomCursor from "./CustomCursor";

function App() {
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    const [inGame, setInGame] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
        setInGame(false);
    };

    const handleStartGame = () => {
        setInGame(true);
    };

    return (
        <GameOverProvider>
            <TimeProvider>
                <CustomCursor />
                <LoaderOverlay visible={loading} />

                {!loading && !inGame && (
                    <LoginScreen
                        onLogin={handleLogin}
                        loggedIn={loggedIn}
                        onStartGame={handleStartGame}
                        onLogout={handleLogout}
                    />
                )}

                {!loading && inGame && <SceneRouter />}
            </TimeProvider>
        </GameOverProvider>
    );
}

export default App;
