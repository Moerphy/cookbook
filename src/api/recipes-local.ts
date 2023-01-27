import { Recipe } from '@cooklang/cooklang-ts';
import { LoadedRecipe, RecipeApi, UnloadedRecipe } from './recipes';

export class LocalRecipesApi implements RecipeApi {

    getRecipe(name: string) {
        return fetch(`recipes/${name}.cook`)
            .then((response) => response.text())
            .then((value) => ({
                ...new Recipe(value),
                name
            } as LoadedRecipe));
    }

    listRecipes(): Promise<UnloadedRecipe[]> {
        return Promise.resolve([
            {
                name: 'example'
            },
            {
                name: 'example2'
            },
            {
                name: 'veggie-burger'
            }
        ]);
    }

}