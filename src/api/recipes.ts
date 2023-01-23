import { Recipe } from '@cooklang/cooklang-ts';
import { isDevMode } from '../util/devmode';
import { GithubRecipesApi } from './recipes-github';
import { LocalRecipesApi } from './recipes-local';

export interface RecipeMetadata {
    name: string;
}

export interface RecipeApi {

    listRecipes: () => Promise<RecipeMetadata[]>;

    getRecipe: (name: string) => Promise<Recipe>;

}

export const API = isDevMode() ? new LocalRecipesApi() : new GithubRecipesApi();
