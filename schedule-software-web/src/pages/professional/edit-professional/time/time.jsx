import { timeData } from "../../../../data/default-data"
import { ItemButton } from "../../../../components/buttons/item-button/item-button"
import { professionals } from "../../../../data/professional-data"
import { SmallButton } from "../../../../components/buttons/small-button/small-button";


import './time.css'
import { useState } from "react";

export function EPTime(
    {
        time,
        setTime
    }
) {
    const [before6, setBefore6] = useState()
    const [after21, setAfter21] = useState()



    return (
        <div className="ept-div">
            <div className="options">
                <div onClick={() => { setBefore6(!before6) }}>
                    <SmallButton fontsize={15} light={!before6} text={"Exibir antes das 6:00"} />
                </div>
                <div onClick={() => { setAfter21(!after21) }}>
                    <SmallButton fontsize={15} light={!after21} text={"Exibir após as 21:00"} />
                </div>
            </div>
            {timeData.map(individualTime => {

                function timeValidator() {
                    const timeIndex = timeData.indexOf(individualTime)

                    const displayBefore6 = timeIndex < 23 && before6;
                    const displayAfter21 = timeIndex > 85 && after21;
                    const displayBetween = timeIndex > 23 && timeIndex < 85;


                    if (displayBefore6 || displayAfter21 || displayBetween) {
                        return (
                            <ItemButton title={individualTime} subtitle={getOthers()} selected={time[timeIndex]} />
                        )
                    } else return (null)

                }

                function getOthers() {
                    const names = []

                    professionals.map(prof => {
                        if (prof.time[timeData.indexOf(individualTime)]) {
                            names.push(prof.name)
                        }
                    })
                    return names
                }

                function setNewTimeArray() {
                    var newArray = [...time]

                    newArray[timeData.indexOf(individualTime)] = !time[timeData.indexOf(individualTime)]

                    setTime(newArray)
                }

                return (
                    <div key={individualTime} onClick={() => setNewTimeArray()}>
                        {
                            timeValidator()
                        }
                    </div>
                )
            })}
        </div>
    )
}