
import { useState } from "react";
import LoginScreen from "./scenes/LoginScreen/LoginScreen";
import CustomCursor from "./CustomCursor";
import "./App.css";
import BeginningChapter from "./scenes/BeginningChapter/BeginningChapter";



function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [inGame, setInGame] = useState(false);
    const [username, setUsername] = useState("");

    const handleLogin = (user) => {
        setLoggedIn(true);
        setUsername(user);
    };

    const handleStartGame = () => {
        setInGame(true);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
        setInGame(false);
        setUsername("");
    };

    return (
        <>
            <CustomCursor />

            {!inGame && (
                <LoginScreen

                    onLogin={handleLogin}
                    loggedIn={loggedIn}
                    onStartGame={handleStartGame}
                    onLogout={handleLogout}
                />

            )}
            {inGame && <BeginningChapter />}

        </>
    );
}

export default App;



// import { useState } from "react";
// import LibraryZone from "./scenes/LibraryZone/LibraryZone";

// function App() {
//     const [resetKey, setResetKey] = useState(0);

//     const handleReset = () => {
//         setResetKey(k => k + 1);
//     };

//     return (
//         <div className="app-root">
//             <LibraryZone key={resetKey} onReset={handleReset} />
//         </div>
//     );
// }

// export default App;
