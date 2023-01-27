import { AppQuery } from '../store/app';

export function getQuery(): AppQuery {
    const params = new URLSearchParams(window.location.search);
    const view = params.get('view');

    switch (view) {
        case 'recipe':
            return  {
                view: 'recipe',
                recipe: params.get('recipe') || ''
            };
        case 'cook':
            return {
                view: 'cook',
                recipe: params.get('recipe') || '',
                step: parseInt(params.get('step') || '0', 10)
            };
        default:
            return {
                view: 'list'
            };
    }
}


