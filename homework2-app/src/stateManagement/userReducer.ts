import { User } from "../models/user";

interface State {
    user: User | null;
}

const initialState: State = {
    user: null
}

export const Actions = Object.freeze({
    setUser: (user: User) => ({ type: '[USER_STATE] USER_SET', payload: user })
});

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case '[USER_STATE] USER_SET':
            console.log('USER', action.payload);
            return { ...state, user: action.payload };

        default:
            return state;
    }
};
export default userReducer;