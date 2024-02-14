let initalState = {
    "active_link": 0
}



export const AuthReducer = (state = initalState, action) => {

    switch (action.type) {
        case "ACTIVE_LINK":
            return {
                ...state,
                active_link: action.payload

            }
        default:
            return state
    }
}