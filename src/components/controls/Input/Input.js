import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

/**
 * Custom text field (input)
 * @param {any} props React component props
 * @returns {JSX.Element} React component
 * */
export const Input = (props) => {
    const { value, label, onChange } = props;

    /**
     * Change handler for input
     * @param {Event} ev - event object
     * @returns {void}
     */
    const handleChange = (ev) => {
        onChange(ev.target.value);
    };

    return (
        <div className="input">
            {label && <div className="input-label">{label}</div>}
            <input
                className="input-input"
                value={value}
                label={label}
                onChange={handleChange}
            />
        </div>
    );
};


Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string
};
