const initialState = 0

// const [name,setName] = 

const handleMyCounter = (state = initialState, action) => {
    switch (action.type) {
        case "INCREASE":
            return state + 1

        break;
        case"DECREASE":
        return state - 1
        
        default:
            return state

        default:
            break;
    }
}

export default handleMyCounter