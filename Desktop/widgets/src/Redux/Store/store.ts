import { configureStore, combineReducers } from '@reduxjs/toolkit';
import activitySummaryReducer  from '../Features/ActivitySummary/activitySummary.reducer';

const rootReducer = combineReducers({
  activitySummary:activitySummaryReducer
});

const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
   