/* import { useState } from "react";

import StackScreen from "./scenes/StackScreen/StackScreen";
import WorldScene from "./scenes/WorldScenes/WorldScene";

import AlchemyZone from "./scenes/AlchemyZone/AlchemyZone";
import LibraryZone from "./scenes/LibraryZone/LibraryZone";
import QuizGame from "./scenes/GardenZone/QuizGame";
import Iframe from "./scenes/StudyZone/Iframe";

import AppShell from "./layout/AppShell/AppShell";
import LoaderOverlay from "./components/loader/LoaderOverlay";

import { TimeProvider } from "./context/TimeContext";
import { GameOverProvider } from "./context/GameOverContext";
import { IdleProvider } from "./context/IdleContext";

function App() {
    const [screen, setScreen] = useState("stack");
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

    return (


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

export default App; */


//------------------------------------- LOGIN SCREEN
/*
import { useState } from "react";
import LoginScreen from "./scenes/LoginScreen/LoginScreen";
import BeginningChapter from "./scenes/BeginningChapter/BeginningChapter";
import TeamShowcase from "./components/AboutUs/TeamShowcase/TeamShowcase";
import CustomCursor from "./CustomCursor";
import { IdleProvider } from "./context/IdleContext";
import MusicLayout from "./layout/MusicLayout";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [inGame, setInGame] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    return (
        <IdleProvider>
            <CustomCursor />

            <MusicLayout>
                {!inGame && !showAbout && (
                    <LoginScreen
                        loggedIn={loggedIn}
                        onStartGame={() => setInGame(true)}
                        onLogout={() => setLoggedIn(false)}
                        onAbout={() => setShowAbout(true)}
                        onLogin={() => setLoggedIn(true)}
                    />
                )}

                {showAbout && !inGame && (
                    <TeamShowcase onBack={() => setShowAbout(false)} />
                )}

                {inGame && <BeginningChapter />}
            </MusicLayout>
        </IdleProvider>
    );
}

export default App;

*/

//------------------------------------------- CODIGO ENTERO SUPUESTAMENTE VALIDO PORFAVOR DIOSITO NUNCA HE CREIDO EN TI PERO HOY SI

import { useState } from "react";

import LoginScreen from "./scenes/LoginScreen/LoginScreen";
import TeamShowcase from "./components/AboutUs/TeamShowcase/TeamShowcase";
import BeginningChapter from "./scenes/BeginningChapter/BeginningChapter";

import StackScreen from "./scenes/StackScreen/StackScreen";
import WorldScene from "./scenes/WorldScenes/WorldScene";

import AlchemyZone from "./scenes/AlchemyZone/AlchemyZone";
import LibraryZone from "./scenes/LibraryZone/LibraryZone";
import QuizGame from "./scenes/GardenZone/QuizGame";
import Iframe from "./scenes/StudyZone/Iframe";

import AppShell from "./layout/AppShell/AppShell";
import MusicLayout from "./layout/MusicLayout";
import LoaderOverlay from "./components/loader/LoaderOverlay";
import CustomCursor from "./CustomCursor";

import { IdleProvider } from "./context/IdleContext";
import { TimeProvider } from "./context/TimeContext";
import { GameOverProvider } from "./context/GameOverContext";

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
        <IdleProvider>
            <GameOverProvider>
                <TimeProvider>
                    <CustomCursor />
                    <MusicLayout>

                        {!inGame && !showAbout && (
                            <LoginScreen
                                loggedIn={loggedIn}
                                onLogin={() => setLoggedIn(true)}
                                onLogout={() => setLoggedIn(false)}
                                onAbout={() => setShowAbout(true)}
                                onStartGame={() => setInGame(true)}
                            />
                        )}

                        {showAbout && !inGame && (
                            <TeamShowcase onBack={() => setShowAbout(false)} />
                        )}

                        {inGame && screen === "intro" && (
                            <BeginningChapter
                                onFinish={() => {
                                    setLoading(true);
                                    setTimeout(() => {
                                        setScreen("stack");
                                        setLoading(false);
                                    }, 800);
                                }}
                            />
                        )}

                        {inGame && screen !== "intro" && (
                            <>
                                {screen === "stack" && (
                                    <StackScreen
                                        onStart={goToWorld}
                                        onBackToMenu={backToLogin}
                                    />
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
                            </>
                        )}

                        <LoaderOverlay visible={loading} />

                    </MusicLayout>
                </TimeProvider>
            </GameOverProvider>
        </IdleProvider>
    );
}

export default App;
