export const loadState = () => {
    try {
        const serialState = localStorage.getItem('appState');

        if(serialState === null) return undefined;
        return JSON.parse(serialState);
    } catch (error) {
        return undefined;
    }
    
}

export const saveUser = (state) => {
    try {
        const userdetails = state;
        const serialState = [];
        serialState.push(userdetails);
        localStorage.setItem('appState', JSON.stringify(serialState));
    } catch (error) {
        console.log(error);
    }
}