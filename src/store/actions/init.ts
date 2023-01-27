import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../api/recipes';
import { setRecipes } from '../recipe';
import { loadRecipe } from './loadRecipe';
import { setQuery } from '../app';
import { getQuery } from '../../util/query';

export const initialize = createAsyncThunk('init', (_, { dispatch }) => {
    dispatch(setQuery(getQuery()));

    return API.listRecipes()
        .then((recipes) => {
            dispatch(setRecipes(recipes));
            // no need to wait for completion
            recipes.map((recipe) => dispatch(loadRecipe(recipe)));
        });
});
