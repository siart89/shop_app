import React, { useState, useContext } from 'react';
import { BurgerWrapper, Title, TitleWrapper } from './headerStyles/catalogStyles';
import { navicon } from 'react-icons-kit/fa/navicon';
import { StyledIcon, Links } from './headerStyles/headerNavStyles';
import { PopUpWrapper } from '../logIn/styles/popUpWrapper';
import { remove } from 'react-icons-kit/fa/remove';
import { AllProductsContext } from '../context/AllProductsContext';


const Catalog = () => {
    const [toggle, setToggle] = useState(false);
    const { data } = useContext(AllProductsContext);
    const category = initState();

    function initState() {
        const category = new Set();
        const arr = [];
        data.goods.forEach(product => {
            category.add(product.category)
        });
         category.forEach(cat => {
             arr.push(cat);
         });
         return arr
    };


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
                <Title>All</Title>
            </TitleWrapper>

            {toggle ?
                <PopUpWrapper>
                    {category.map(cat => (
                        <Links key={cat} to={`/${cat}`} color='black' padding>{cat}</Links>
                    ))}
                </PopUpWrapper> :
                ''
            }
        </BurgerWrapper>
    );
};

export default Catalog;