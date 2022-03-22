import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authAPI } from '../services';
import sessionReducer from './session';

const rootReducer = combineReducers({
  sessionReducer,
  [authAPI.reducerPath]: authAPI.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch