import './line.css'

export function Line({
    vertical,
    light
}) {

    return (
        <div className={`${vertical ? 'vertical-line' : 'horizontal-line'} ${light?'light':'dark'}`}>
        </div>
    )
}