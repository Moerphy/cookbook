import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ListQuery {
    view: 'list';
}

export interface RecipeQuery {
    view: 'recipe';
    recipe: string;
}

export interface CookQuery {
    view: 'cook';
    recipe: string;
    step: number;
}

export type AppQuery = ListQuery | RecipeQuery | CookQuery;

/*
function isQueryType<T extends AppQuery>(query: AppQuery, viewName: T['view']): query is T {
    return query.view === viewName;
}

export const isListQuery = (query: AppQuery): query is ListQuery => isQueryType(query, 'list');

export const isRecipeQuery = (query: AppQuery): query is RecipeQuery => isQueryType(query, 'recipe');

export const isCookQuery = (query: AppQuery): query is CookQuery => isQueryType(query, 'cook');
*/

interface AppState {
    query: AppQuery;
}

// Define the initial state using that type
const initialState: AppState = {
    query: {
        view: 'list'
    }
};

export const appSlice = createSlice({
    name: 'app',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {

        setQuery: (state, action: PayloadAction<AppQuery>) => {
            state.query = action.payload;
        }

    }

});

export const { setQuery } = appSlice.actions;

export const appReducer = appSlice.reducer;