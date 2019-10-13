import React from 'react';
import { Label, CheckBox, CheckIcon } from './productsStyles.js/productsFilterStyles';
import { check } from 'react-icons-kit/fa/check';
import { useDispatch } from 'react-redux';
import { isFilterCheck } from '../store/actions/isFilterCheck';


const PriceCheckBox = ({ type, isCheck }) => {
    const dispatch = useDispatch();
    
    return (
        <Label onChange={() =>  dispatch(isFilterCheck(type))}>
            {isCheck && <CheckIcon icon={check} size={12} />}
            <CheckBox type="checkbox" />
            {type}
        </Label >
    );
};

export default PriceCheckBox;