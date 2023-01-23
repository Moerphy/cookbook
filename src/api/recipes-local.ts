import { Recipe } from '@cooklang/cooklang-ts';
import { RecipeApi, RecipeMetadata } from './recipes';

export class LocalRecipesApi implements RecipeApi {

    getRecipe(name: string): Promise<Recipe> {
        return fetch(`recipes/${name}.cook`)
            .then((response) => response.text())
            .then((value) => new Recipe(value));
    }

    listRecipes(): Promise<RecipeMetadata[]> {
        return Promise.resolve([
            {
                name: 'example'
            }
        ]);
    }

}