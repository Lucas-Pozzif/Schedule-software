
import './input.css'

export function Input
    ({
        label,
        placeholder,
        value,
        setValue

    }) {

    return (
        <label>
            {label}
            <input className="input" placeholder={placeholder} value={value} onChange={(value) => {
                setValue(value.target.value)
            }}></input>
        </label>
    )

}