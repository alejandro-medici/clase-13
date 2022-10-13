import React from "react";

// Defino un estado por defecto
// de mi web-app
const defaultState = {
    darkMode : false,
    color: 10000
};

const MainContext = React.createContext(defaultState);

export default MainContext;