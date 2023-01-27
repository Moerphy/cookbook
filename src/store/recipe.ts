import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Recipe } from '../api/recipes';
import { loadRecipe } from './actions/loadRecipe';

interface RecipesState {
    list: Recipe[];
    isLoading: boolean;
}

// Define the initial state using that type
const initialState: RecipesState = {
    list: [],
    isLoading: false
};

export const recipesSlice = createSlice({
    name: 'recipes',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {

        setRecipes: (state, action: PayloadAction<Recipe[]>) => {
            state.list = action.payload;
        },

        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }

    },

    extraReducers: (builder) => {

        builder.addCase(loadRecipe.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(loadRecipe.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(loadRecipe.fulfilled, (state, action) => {
            const loadedRecipe = action.payload;
            const recipeIndex = state.list.findIndex((recipe) => recipe.name === loadedRecipe.name);
            if (recipeIndex >= 0) {
                state.list[recipeIndex] = loadedRecipe;
            } else {
                state.list.push(loadedRecipe);
            }
            state.isLoading = false;
        });
    }
});

export const { setRecipes, setLoading } = recipesSlice.actions;

export const recipesReducer = recipesSlice.reducer;
