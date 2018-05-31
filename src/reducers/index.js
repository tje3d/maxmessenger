import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createEpicMiddleware, combineEpics } from "redux-observable";

import EpicAuth from "@src/epics/auth";

import ReducerAuth, { StateAuth } from "./auth";

const persistedReducer = persistReducer(
    {
        key: "root",
        storage,
        // blacklist: ["login"]
    },
    combineReducers({
        auth: ReducerAuth,
    })
);

export const store = createStore(
    persistedReducer,
    {
        auth: StateAuth,
    },
    applyMiddleware(
        createEpicMiddleware(
            combineEpics(
                EpicAuth.logout,
            )
        )
    )
);

export const persistor = persistStore(store);
