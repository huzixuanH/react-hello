import { configureStore } from '@reduxjs/toolkit';
import personReducer from '../modules/Person';

export const store = configureStore({
  reducer: {
    person: personReducer,
    // 其他Reducer,...
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
