import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authAPI } from '../services/auth';
import { messageAPI } from '../services/message';
import sessionReducer from './session';

const rootReducer = combineReducers({
  sessionReducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [messageAPI.reducerPath]: messageAPI.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPI.middleware).concat(messageAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch