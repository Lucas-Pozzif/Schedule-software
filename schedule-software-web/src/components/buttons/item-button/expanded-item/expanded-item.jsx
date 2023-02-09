import { useState } from "react";
import { langData } from "../../../../data/data management/database-management";
import { timeFormatter } from "../../../../functions/time-formatter/time-formatter";

import './expanded-item.css'

function From({ from, selected }) {
    return (
        <>
            {
                from ?
                    <p className={`from-text ${selected ? 'secondary-color' : 'terciary-color'}`}> {langData.fromText}</p > :
                    null
            }
        </>
    )
}
function ValueButton({ value, selected }) {
    const displayValue = value ? value : selected ? langData.selected.masculine.singular : langData.select;
    return (
        <div className={`value-button ${selected ? "secondary-color-background" : "terciary-color-background"}`}>
            <p className={`value-text ${selected ? "terciary-color" : "secondary-color"}`}>{displayValue}</p>
        </div>
    );
}
function Duration({ duration, selected }) {
    const durationRange = timeFormatter(duration);
    return <p className={`duration-text ${selected ? "secondary-color" : "terciary-color"}`}>{durationRange}</p>;
}
function Stage({ stage, selected }) {
    return (
        <p className={`stage-text ${selected ? 'secondary-color' : 'terciary-color'}`}>{stage}</p>
    )
}

export function IBExpandedItem(
    {
        index,
        maxIndex,
        stage,
        from,
        value,
        duration,

        selected,
        setSelected
    }
) {

    function selectionHandler(index) {
        const newArray = [...selected]
        newArray[index] = !selected[index]
        
        setSelected(newArray)
    }

    return (
        <div
            className={`expanded-item ${selected[index] ? 'terciary-color-background' : 'secondary-color-background'}     ${index == 0 ? 'borderRadiusUp' : index == maxIndex ? 'borderRadiusDown' : null}`}
            onClick={() => {
                selectionHandler(index)
            }}>
            <Stage stage={stage} selected={selected[index]} />
            <div className={`right-block`}>
                <From from={from} selected={selected[index]} />
                <div className={`value-block`}>
                    <ValueButton value={value} selected={selected[index]} />
                    <Duration duration={duration} selected={selected[index]} />
                </div>
            </div>
        </div>
    )

}