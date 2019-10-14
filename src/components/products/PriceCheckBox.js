import React from 'react';
import { Label, CheckBox, CheckIcon } from './productsStyles.js/productsFilterStyles';
import { check } from 'react-icons-kit/fa/check';
import { useDispatch } from 'react-redux';
import { isFilterCheck } from '../store/actions/isFilterCheck';


const PriceCheckBox = ({ type, isCheck }) => {
    const dispatch = useDispatch();

    return (
        <Label >
            {isCheck && <CheckIcon icon={check} size={12} />}
            <CheckBox
                type={type === 'Sale' ? "checkbox" : "radio"}
                name={type === 'Sale' ? "sale" : "filter"}
                onChange={(e) => dispatch(isFilterCheck(type, e.target.checked))}
                defaultChecked={type === 'All prices' ? true : false} />
            {type}
        </Label >
    );
};

export default PriceCheckBox;