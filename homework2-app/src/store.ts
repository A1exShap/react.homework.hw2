import { configureStore } from '@reduxjs/toolkit';

import userReducer from './stateManagement/userReducer';

const store = configureStore({
    reducer: {
        user: userReducer
    },
});
export default store;