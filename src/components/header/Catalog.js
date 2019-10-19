import React, { useState, useContext } from 'react';
import { BurgerWrapper, Title, TitleWrapper, Text, CatalogPopUp } from './headerStyles/catalogStyles';
import { navicon } from 'react-icons-kit/fa/navicon';
import { StyledIcon } from './headerStyles/headerNavStyles';
import { remove } from 'react-icons-kit/fa/remove';
import { AllProductsContext } from '../context/AllProductsContext';


const Catalog = () => {
    const [toggle, setToggle] = useState(false);
    const { ...data } = useContext(AllProductsContext);
    const usageCategory = initState();

    function initState() {
        const category = new Set();
        category.add('Все категории');
        const arr = [];
        data.data.goods.forEach(product => {
            category.add(product.category);
        });
        category.forEach(cat => {
            arr.push(cat);
        });
        return arr;
    }


    return (
        <BurgerWrapper>
            <TitleWrapper onClick={() => setToggle(!toggle)}>
                {toggle ?
                    <StyledIcon
                        icon={remove}
                        size={22}
                    /> :
                    <StyledIcon
                        icon={navicon}
                        size={22}
                    />
                }
                <Title>{data.category}</Title>
            </TitleWrapper>

            {toggle ?
                <CatalogPopUp>
                    {usageCategory.map(category => (
                        <Text
                            key={category}
                            color="#5c5b5a"
                            onClick={() => data.setCategory(category)}
                        >{category}</Text>
                    ))}
                </CatalogPopUp> :
                ''
            }
        </BurgerWrapper>
    );
};

export default Catalog;