import { configureStore } from "@reduxjs/toolkit";

import base from "./reducers/main";

import logger from "redux-logger";

export default configureStore({
    reducer: {
        base: base,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
