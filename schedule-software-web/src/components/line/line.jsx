import './line.css'

export function Line({
    vertical
}) {

    return (
        <div className={`${vertical ? 'vertical-line' : 'horizontal-line'}`}>
        </div>
    )
}