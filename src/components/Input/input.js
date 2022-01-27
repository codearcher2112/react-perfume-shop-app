import React from 'react';
import './styles.css';

const noop = () => null;

function Input({ handleBlur = noop, handleFocus = noop, handleChange = noop, className, tabindex, errorInfo, id, type }) {

    return (
		<div className='wrapper'>
			<input
				id={id}
				onBlur={handleBlur}
				onFocus={handleFocus}
				onChange={handleChange}
				placeholder={id}
				className={`input ${errorInfo?.isError && 'error'}`} type={type} tabIndex={tabindex}
			/>
			{errorInfo?.isError && <span className='errorElement'>{errorInfo?.message}</span>}
		</div>
    );
}

export default Input;