
import { useState } from 'react';
import './input.css'

export function Input
    ({
        label,
        placeholder,
        value,
        setValue,
        errorMessage
    }) {
    const [touched, setTouched] = useState(false)

    return (
        <div className={`input-div ${(touched && errorMessage)? 'visible-error':null}`}>
            <p className='input-label'>
                {label}
            </p>
            <input
                onFocus={(e) => {
                    if (!touched) {
                        setTouched(true);
                    }
                }}
                className="input"
                placeholder={placeholder}
                value={value}
                onChange={(value) => { try { setValue(value.target.value); } catch (e) { } }}
            ></input>
            <p className='error'>{
                touched ?
                    errorMessage :
                    null
            }</p>
        </div>
    )

}