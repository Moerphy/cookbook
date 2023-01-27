import React from 'react';
import { useSelector } from 'react-redux';
import { getQuery } from './store/selectors';
import { CookView } from './views/cook';
import { RecipeView } from './views/recipe';
import { ListView } from './views/list';
import styled from '@emotion/styled';

/*
 Routes:
    - default (none): list, search
    - ?view=recipe
    - ?view=cook
        &step=42
 */

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const AppWrapper = styled.div`
    max-width: 100%;
`;

function App() {
    const query = useSelector(getQuery);

    let Component;
    switch (query.view) {
        case 'cook':
            Component = CookView;
            break;
        case 'recipe':
            Component = RecipeView;
            break;
        default:
            Component = ListView;
            break;
    }

    return (
        <AppContainer>
            <AppWrapper>
                <Component/>
            </AppWrapper>
        </AppContainer>
    );
}

export default App;
