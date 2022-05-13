export const loadState = () => {
  try {
    // const serialState = localStorage.getItem('appState');
    const sessionSerialState = sessionStorage.getItem("appState");

    if (sessionSerialState === null) return undefined;
    return JSON.parse(sessionSerialState);
  } catch (error) {
    return undefined;
  }
};

export const loadCurrentState = () => {
  try {
    // const serialState = localStorage.getItem('appState');
    const SerialState = localStorage.getItem("appState");

    if (SerialState === null) return undefined;
    return JSON.parse(SerialState);
  } catch (error) {
    return undefined;
  }
};

export const saveUser = (state) => {
  try {
    const userSessionDetails = state;
    const userdetails = state;
    const serialState = [];
    serialState.push(userdetails);
    const currentState = loadCurrentState();
    console.log(currentState);
    if (currentState === undefined) {
      localStorage.setItem("appState", JSON.stringify(serialState));
      sessionStorage.setItem("appState", JSON.stringify(userSessionDetails));
    } else {
      localStorage.setItem(
        "appState",
        JSON.stringify(currentState.concat(serialState))
      );
      sessionStorage.setItem("appState", JSON.stringify(userSessionDetails));
    }
    
  } catch (error) {
    console.log(error);
  }
};
