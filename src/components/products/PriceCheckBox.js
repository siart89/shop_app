import React from 'react';
import { Label, CheckBox, CheckIcon } from './productsStyles.js/productsFilterStyles';
import { check } from 'react-icons-kit/fa/check';
import { useDispatch } from 'react-redux';
import { isFilterCheck } from '../store/actions/isFilterCheck';
import PropTypes from 'prop-types';

const PriceCheckBox = ({ type, isCheck }) => {
    const dispatch = useDispatch();

    return (
        <Label >
            {isCheck && <CheckIcon icon={check} size={12} />}
            <CheckBox
                type="radio"
                name="filter"
                onChange={(e) => dispatch(isFilterCheck(type, e.target.checked))}
                checked={isCheck} />
            {type}
        </Label >
    );
};

PriceCheckBox.propTypes = {
    type: PropTypes.string.isRequired,
    isCheck: PropTypes.bool.isRequired
};

export default PriceCheckBox;