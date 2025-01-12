
import authReducer from"../features/auth/authSlice"
import { baseApi } from "../api/baseApi";
import { persistStore, persistReducer ,  FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import cartReducer from "../features/CartSlice"
import { allProjectsApi } from "../api/allReliefGoodsApi";
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';



const persistConfig ={
    key:'auth',
    storage,
};

const persistedAuthReducer = persistReducer(persistConfig,authReducer)

const persistedThemeReducer = persistReducer(persistConfig,themeReducer)
// const allReliefGoodsApi: Api<BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType>, EndpointDefinitions, "baseApi", never, any> 

 export const store = configureStore({
    reducer: {
        [baseApi.reducerPath] : baseApi.reducer,
        auth: persistedAuthReducer,
        cart: cartReducer,
        theme:persistedThemeReducer,
        allReliefGoods: allProjectsApi.reducer,
    },
    middleware: ( getDefaultMiddlewares)  => getDefaultMiddlewares({
        serializableCheck:{
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],

        }
    }).concat(baseApi.middleware)
    
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch



export const persistor = persistStore(store);