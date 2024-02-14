import {createStore,combineReducers, applyMiddleware} from "redux"
import { ProjectReducer } from "../Reducer/ProjReducer"
import {thunk} from "redux-thunk"
import { AuthReducer } from "../Reducer/AuthReducer"

const Store = createStore(
    combineReducers({
        project_reducer:ProjectReducer,
        auth_reducer:AuthReducer
    }),
    applyMiddleware(thunk)
)
export default Store