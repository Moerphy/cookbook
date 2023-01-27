import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, LoadedRecipe, UnloadedRecipe } from '../../api/recipes';

export const loadRecipe = createAsyncThunk<LoadedRecipe, UnloadedRecipe>(
    'loadRecipe',
    (recipe) => API.getRecipe(recipe.name)
);