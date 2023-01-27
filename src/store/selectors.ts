import { RootState } from './store';
import { createSelector } from '@reduxjs/toolkit';

// data
export const getRecipeSlice = (state: RootState) => state.data;

export const getRecipes = createSelector(getRecipeSlice, (slice) => slice.list);

export const getIsRecipesLoading = createSelector(getRecipeSlice, (slice) => slice.isLoading);

// app
export const getAppSlice = (state: RootState) => state.app;

export const getQuery = createSelector(getAppSlice, (slice) => slice.query);

// combined
export const getFilteredRecipes = getRecipes; // TODO