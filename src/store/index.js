import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = applyMiddleware(thunk, createLogger());

const store = createStore(persistedReducer, middlewares);

const persistor = persistStore(store);

export { store, persistor };
