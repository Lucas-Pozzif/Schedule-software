
import './input.css'

export function Input
    ({
        label,
        placeholder,
        value,
        setValue

    }) {

    return (
        <div className='input-div'>
            <label className='input-label'>
                {label}
            </label>
            <input className="input" placeholder={placeholder} value={value} onChange={(value) => setValue(value.target.value)}></input>
        </div>
    )

}