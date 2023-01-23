import { Recipe } from '@cooklang/cooklang-ts';
import { RecipeApi, RecipeMetadata } from './recipes';
import config from '../../config.json';
import { Nullable } from '../util/types';

const API_BASE_PATH = 'https://api.github.com';

interface GithubContent {
    name: string;
    type: string;
    content: string;
}

export class GithubRecipesApi implements RecipeApi {

    // https://api.github.com/$

    // /repos/{owner}/{repo}/contents/{path}
    getRecipe(name: string): Promise<Recipe> {
        return fetch(`${API_BASE_PATH}/repos/${config.user}/contents/recipes/${name}.cook`)
            .then((response) => response.json() as Promise<GithubContent>)
            .then((value) => (new Recipe(atob(value.content))));
    }

    // /repos/:owner/:repo/contents/:path
    listRecipes(): Promise<RecipeMetadata[]> {
        return fetch(`${API_BASE_PATH}/repos/${config.user}/contents/recipes/`)
            .then((response) => response.json() as Promise<GithubContent[]>)
            .then((values) => values.map((value) => {
                if (value.type === 'file' && value.name.indexOf('.cook') >= 0) {
                    return {
                        name: value.name.substring(0, value.name.indexOf('.cook'))
                    } as RecipeMetadata;
                }
                return null;
            }).filter((meta: Nullable<RecipeMetadata>): meta is RecipeMetadata => !!meta));
    }

}