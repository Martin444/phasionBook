import React from 'react'
import styled from 'styled-components'

import useCategory from '../../../Hooks/useCategory';
import { CategoryModel } from '../../../Models/category_model';

export default function CategotyNav() {

    const { categories, categorieNav,setCategorieFilter }: {categories: CategoryModel[], categorieNav: string, setCategorieFilter:(categorie: string) => void} = useCategory();

    return (
        <CategorySection>
            {
                categories.map(category => {
                    return <ItemSelector
                    key={category.id}
                    onClick={() => {
                        setCategorieFilter(category.id)
                    }}
                    selected={categorieNav === category.id}>
                        {category.nameCategory}
                    
                    </ItemSelector>
                })
            }
        </CategorySection>
    )

}
interface ItemSelectorProps {
    selected: boolean
}

const ItemSelector = styled.button<ItemSelectorProps>(props => ({
    background: props.selected ? '#13D4E6' : '#ffffff',
    border: 'none',
    borderRadius: '5px',
    padding: '0.9em',
    fontWeight: '800',
    cursor: 'pointer',
    
}));

const CategorySection = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    ${ItemSelector}:hover{
        background: rgba(0, 0, 0, 0.1);
    }
`;


