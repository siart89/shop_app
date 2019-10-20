import React, { useContext, useState } from 'react';
import { FilterWrapper, FilterForm, PriceFilterBox, InputPrice, ConfirmButton, FilterTitle } from './productsStyles.js/productsFilterStyles';
import PriceCheckBox from './PriceCheckBox';
import { useSelector } from 'react-redux';
import { Label, CheckBox, CheckIcon } from './productsStyles.js/productsFilterStyles';
import { check } from 'react-icons-kit/fa/check';
import { AllProductsContext } from '../context/AllProductsContext';
import { useDispatch } from 'react-redux';
import { inputFilter } from '../store/actions/inputFilter';

const ProductsFilter = () => {
    const types = useSelector(state => state.filterTypes);
    const { ...checking } = useContext(AllProductsContext);
    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');
    const dispatch = useDispatch();

    const isValueCorrect = () => {
        if (maxValue && minValue && +minValue > +maxValue) {
            const min = maxValue,
                max = minValue;
            setMaxValue(max);
            setMinValue(min);
        }
    };


    return (
        <FilterWrapper>
            <FilterTitle>Price</FilterTitle>

            <FilterForm onSubmit={(e) => {
                e.preventDefault();

                dispatch(inputFilter(+minValue, +maxValue));
            }}
            >

                <PriceFilterBox>
                    {minValue || maxValue ?
                        <ConfirmButton
                            onClick={() => isValueCorrect()}
                        >Show
                        </ConfirmButton> :
                        ''}

                    <InputPrice
                        type="text"
                        onChange={(e) => setMinValue(e.target.value)}
                        value={minValue} />

                    <InputPrice
                        type="text"
                        onChange={(e) => setMaxValue(e.target.value)}
                        value={maxValue} />
                </PriceFilterBox>
                <Label >
                    {checking.saleCheck && <CheckIcon icon={check} size={12} />}
                    <CheckBox
                        type="checkbox"
                        name="sale"
                        onChange={() => checking.setSaleCheck(!checking.saleCheck)}
                        value="Sale"
                    />
                    Sale
                </Label >
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