import { isDevMode } from '../util/devmode';
import { GithubRecipesApi } from './recipes-github';
import { LocalRecipesApi } from './recipes-local';
import { Cookware, Ingredient, Metadata, ShoppingList, Step } from '@cooklang/cooklang-ts';

export interface UnloadedRecipe {
    name: string;
}

export type LoadedRecipe = UnloadedRecipe & {
    ingredients: Array<Ingredient>;
    cookwares: Array<Cookware>;
    metadata: Metadata;
    steps: Array<Step>;
    shoppingList: ShoppingList;
};

export type Recipe = UnloadedRecipe | LoadedRecipe;
/*
export function isLoadedRecipe(recipe: Recipe): recipe is LoadedRecipe {
    return 'ingredients' in recipe;
}
 */

export interface RecipeApi {

    getRecipe: (name: string) => Promise<LoadedRecipe>;

    listRecipes: () => Promise<UnloadedRecipe[]>;

}

export const API = isDevMode() ? new LocalRecipesApi() : new GithubRecipesApi();
