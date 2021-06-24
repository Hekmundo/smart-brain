import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectIsUserLoggedIn = createSelector(
  [selectUser],
  (user) => !!user.currentUser
);

export const selectCurrentUserId = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.id
);

export const selectCurrentUserEntries = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.entries
);

export const selectCurrentUserName = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.name
);
