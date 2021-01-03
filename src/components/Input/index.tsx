import React from 'react';
import * as Styles  from './styles';

export const Input = ({ value, unit, onChangeHandler, children} : any) => {
    return (
    <Styles.TimeInputArea>
        <Styles.TimeInput as="input" 
            type="number"  
            step="1" 
            data-unit={unit}
            onChange={onChangeHandler}
            id={unit}
            value={value} 
        />
        <Styles.Label as="label" htmlFor={unit} >{children}</Styles.Label>
    </Styles.TimeInputArea>
    );
}
