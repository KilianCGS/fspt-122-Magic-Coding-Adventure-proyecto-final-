<<<<<<< HEAD
import { useState } from "react";

import StackScreen from "./scenes/StackScreen/StackScreen";
import WorldScene from "./scenes/WorldScenes/WorldScene";

import AlchemyZone from "./scenes/AlchemyZone/AlchemyZone";
import LibraryZone from "./scenes/LibraryZone/LibraryZone";
import QuizGame from "./scenes/QuizGame/QuizGame";
import Iframe from "./scenes/StudyZone/Iframe";

import AppShell from "./layout/AppShell/AppShell";
import LoaderOverlay from "./components/loader/LoaderOverlay";
=======
/* import { useEffect, useState } from "react";

import LoginScreen from "./scenes/LoginScreen/LoginScreen";
import BeginningChapter from "./scenes/BeginningChapter/BeginningChapter";
import StackScreen from "./scenes/StackScreen/StackScreen";
import LoaderOverlay from "./components/Loader/LoaderOverlay";
>>>>>>> origin/Boss-Branch

import { TimeProvider } from "./context/TimeContext";
import { GameOverProvider } from "./context/GameOverContext";
import { IdleProvider } from "./context/IdleContext";

function App() {
    const [screen, setScreen] = useState("login");
    const [loggedIn, setLoggedIn] = useState(false);
    const [scrollSigned, setScrollSigned] = useState(false);
    const [loading, setLoading] = useState(false);

    const goWithLoader = (nextScreen) => {
        setLoading(true);
        setTimeout(() => {
            setScreen(nextScreen);
            setLoading(false);
        }, 1200);
    };

<<<<<<< HEAD
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
=======
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;

        fetch("http://127.0.0.1:5000/api/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => res.ok ? res.json() : null)
            .then(data => {
                if (!data) return;
                setLoggedIn(true);
                setScrollSigned(data.scroll_signed);
                setScreen("login");
            });
    }, []);

    const handleStartGame = () => {
        if (scrollSigned) {
            goWithLoader("stack");
        } else {
            setScreen("beginning");
        }
    };

    if (screen === "login") {
        return (
            <>
                <LoaderOverlay visible={loading} />
                <LoginScreen
                    loggedIn={loggedIn}
                    onLogin={() => setLoggedIn(true)}
                    onLogout={() => {
                        localStorage.removeItem("token");
                        setLoggedIn(false);
                        setScrollSigned(false);
                        setScreen("login");
                    }}
                    onStartGame={handleStartGame}
                />
            </>
        );
    }
>>>>>>> origin/Boss-Branch

    if (screen === "beginning") {
        return (
            <>
                <LoaderOverlay visible={loading} />
                <BeginningChapter
                    onFinish={() => {
                        setScrollSigned(true);
                        goWithLoader("stack");
                    }}
                />
            </>
        );
    }

    if (screen === "stack") {
        return (
            <>
                <LoaderOverlay visible={loading} />
                <StackScreen
                    onStart={() => {
                        console.log("Aquí irá el mapa");
                    }}
                    onBackToMenu={() => {
                        setScreen("login");
                    }}
                />
            </>
        );
    }

    return null;
}

export default App; */


//------------------------------------------------------------------



/* import AppShell from "./layout/AppShell/AppShell";
import AlchemyZone from "./scenes/AlchemyZone/AlchemyZone";

import { InventoryProvider } from "./context/InventoryContext";
import { TimeProvider } from "./context/TimeContext";
import { GameOverProvider } from "./context/GameOverContext";
import { IdleProvider } from "./context/IdleContext";

function App() {
    return (
<<<<<<< HEAD
        <GameOverProvider>
            <IdleProvider>
                <TimeProvider>

                    {screen === "stack" && (
                        <StackScreen onStart={goToWorld} />
                    )}

                    {screen === "world" && (
                        <WorldScene
                            onBack={() => setScreen("stack")}
                            onEnterZone={goToZone}
                        />
                    )}

                    {screen === "zone" && activeZone === "Alchemy_Lab" && (
                        <AppShell onExit={backToWorld}>
                            <AlchemyZone />
                        </AppShell>
                    )}

                    {screen === "zone" && activeZone === "Library" && (
                        <AppShell onExit={backToWorld}>
                            <LibraryZone />
                        </AppShell>
                    )}

                    {screen === "zone" && activeZone === "Garden_Courtyard" && (
                        <AppShell onExit={backToWorld}>
                            <QuizGame />
                        </AppShell>
                    )}

                    {screen === "zone" && activeZone === "Study_Room" && (
                        <Iframe onExit={backToWorld} />
                    )}

                    <LoaderOverlay visible={loading} />

                </TimeProvider>
            </IdleProvider>
        </GameOverProvider>
    );
}

export default App;
=======
        <IdleProvider>
            <GameOverProvider>
                <TimeProvider>
                    <InventoryProvider>
                        <AppShell onExitZone={() => { }}>
                            <AlchemyZone />
                        </AppShell>
                    </InventoryProvider>
                </TimeProvider>
            </GameOverProvider>
        </IdleProvider>
    );
}

export default App;  */

import BeginningChapter from "./scenes/BeginningChapter/BeginningChapter";

function App() {
    return <BeginningChapter />;

}

export default App;
>>>>>>> origin/Boss-Branch
