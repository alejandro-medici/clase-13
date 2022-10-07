import { useContext } from "react";
import MainContext from "../../context/MainContext";

export default function Switch(props) {

    const {isOn} = props;
    const { darkMode, toggleDarkMode } = useContext(MainContext);

    function handleChange(e) {
        toggleDarkMode(e, darkMode);
    }

    return (
        <>
             <span>☀️</span>
             <label className="toggle-theme" htmlFor="checkbox">
                <input checked={isOn} onChange={handleChange} type="checkbox" id="checkbox" />
                <div className="slider round"></div>
            </label>
             <span>🌒</span>
        </>
    );
}