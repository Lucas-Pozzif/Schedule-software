import './return-button.css'

export function ReturnButton({
    color,
    size = 60

}) {

    const colorClass = color ? 'secondary-color' : 'terciary-color'

    return (
        <div>
            <svg style={{ height: size + 'px', width: size + 'px' }} className={`return-button-icon ${colorClass}`} viewBox="0 0 142 142">
                <path d="M6.65328 77.364C3.13856 73.8492 3.13856 68.1508 6.65328 64.636L64.636 6.65328C68.1508 3.13857 73.8492 3.13857 77.364 6.65328C80.8787 10.168 80.8787 15.8665 77.364 19.3812L19.3812 77.364C15.8665 80.8787 10.168 80.8787 6.65328 77.364Z" />
                <path d="M77.364 135.347C73.8492 138.861 68.1508 138.861 64.636 135.347L6.65328 77.364C3.13856 73.8492 3.13856 68.1508 6.65328 64.636C10.168 61.1213 15.8665 61.1213 19.3812 64.636L77.364 122.619C80.8787 126.134 80.8787 131.832 77.364 135.347Z" />
            </svg>
        </div>
    )
}