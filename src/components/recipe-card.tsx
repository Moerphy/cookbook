import React from 'react';
import styled from '@emotion/styled';
import { Recipe } from '../api/recipes';

const RecipeCardWrapper = styled.div`
    box-sizing: border-box;
    width: 400px;
    height: 300px;
    margin: 4px;
    border: 1px solid white;
    
    flex: 0 0 380px;
    margin-right: 4px;
`;

interface RecipeCardProps {
    recipe: Recipe;
}

export function RecipeCard(props: RecipeCardProps) {
    const { recipe } = props;

    return (
        <RecipeCardWrapper>
            {recipe.name}
        </RecipeCardWrapper>
    );
}
