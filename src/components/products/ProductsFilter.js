import React from 'react';
import { FilterWrapper, FilterForm, PriceFilterBox, InputPrice } from './productsStyles.js/productsFilterStyles';
import PriceCheckBox from './PriceCheckBox';
import { useSelector } from 'react-redux';

const ProductsFilter = () => {
    const types = useSelector(state => state.filterTypes);
    
    return (
        <FilterWrapper>
            
            <FilterForm >
           
                <PriceFilterBox>
                    <InputPrice type="text" />  <InputPrice type="text" />
                </PriceFilterBox>
                {types.map(elem => (
                    <PriceCheckBox
                        type={elem.type}
                        key={elem.type}
                        isCheck={elem.check}
                    />
                ))}
            </FilterForm>
        </FilterWrapper>
    );
};

export default ProductsFilter;