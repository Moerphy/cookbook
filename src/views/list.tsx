import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { getFilteredRecipes } from '../store/selectors';
import { RecipeCard } from '../components/recipe-card';

const ListViewWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    
    & > * {
    }
   
`;

export function ListView() {
    const recipes = useSelector(getFilteredRecipes);

    return (
        <ListViewWrapper>
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.name}
                    recipe={recipe}
                />
            ))}
        </ListViewWrapper>
    );
}
