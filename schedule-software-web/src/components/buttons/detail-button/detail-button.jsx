import './detail-button.css'

export function DetailButton(parameters) {
    const text = parameters.text
    return (
        <div className='detail-button'>
            <p className='detail-button-text'>{text}</p>
        </div>
    )
}