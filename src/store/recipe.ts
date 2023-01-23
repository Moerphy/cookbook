import { Recipe } from '@cooklang/cooklang-ts';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RecipeMetadata } from '../api/recipes';
import { Nullable } from '../util/types';

// Define a type for the slice state
interface RecipesState {
    list: RecipeMetadata[];
    selected: Nullable<{
        metadata: RecipeMetadata;
        recipe: Recipe;
    }>
}

// Define the initial state using that type
const initialState: RecipesState = {
    list: [],
    selected: null
};

export const recipesSlice = createSlice({
    name: 'recipes',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        /*
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }

         */
    },
});

export const {} = recipesSlice.actions;

export const recipesReducer = recipesSlice.reducer;