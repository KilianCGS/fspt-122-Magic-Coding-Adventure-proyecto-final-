import SandTimer from "../../components/SandTimer/SandTimer";
import "./AppShell.css";

export default function AppShell({ children }) {
    return (
        <div className="app-shell">
            <div className="shell-top">
                <div className="shell-left">INVENTARIO</div>
                <SandTimer />
                <div className="shell-right">AUDIO</div>
            </div>

            <div className="scene-content">
                {children}
            </div>

            <div className="shell-bottom">
                <div className="shell-left">SALIR DE LA ZONA</div>
                <div className="shell-right">ASISTENTE MÁGICO</div>
            </div>
        </div>
    );
}
