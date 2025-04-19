import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        // 리듀서들이 여기에 추가될 예정입니다
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 