import { Recipe as CooklangRecipe } from '@cooklang/cooklang-ts';
import { RecipeApi, UnloadedRecipe } from './recipes';
import config from '../config.json';
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
    getRecipe(name: string) {
        return fetch(`${API_BASE_PATH}/repos/${config.user}/${config.repo}/contents/recipes/${name}.cook`)
            .then((response) => response.json() as Promise<GithubContent>)
            .then((value) => ({
                ...new CooklangRecipe(atob(value.content)),
                name
            }));
    }

    // /repos/:owner/:repo/contents/:path
    listRecipes(): Promise<UnloadedRecipe[]> {
        return fetch(`${API_BASE_PATH}/repos/${config.user}/${config.repo}/contents/recipes/`)
            .then((response) => response.json() as Promise<GithubContent[]>)
            .then((values) => values.map((value) => {
                if (value.type === 'file' && value.name.indexOf('.cook') >= 0) {
                    return {
                        name: value.name.substring(0, value.name.indexOf('.cook'))
                    } as UnloadedRecipe;
                }
                return null;
            }).filter((meta: Nullable<UnloadedRecipe>): meta is UnloadedRecipe => !!meta));
    }

}