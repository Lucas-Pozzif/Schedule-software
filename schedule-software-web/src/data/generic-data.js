
function generateTimeValues() {
    const time = [];


    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 4; j++) {
            var minutes = `${j * 15}`
            if (minutes.length <= 1) {
                minutes = `0${minutes}`
            }

            const timeValue = `${i}:${minutes}`
            time.push(timeValue)
        }
    }
    return time
}

const time = generateTimeValues()


export {time as timeData }