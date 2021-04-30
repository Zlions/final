import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import reducer from "./reducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
