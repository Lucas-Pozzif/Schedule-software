import { configData } from "../../data/data management/database-management"

export function timeFormatter(duration, range = configData.data.timeRange) {
    if (duration === undefined) { return (''); }

    const minMinutes = (duration - range) % 60;
    const minHours = Math.floor((duration - range) / 60);
    const maxMinutes = (duration + range) % 60;
    const maxHours = Math.floor((duration + range) / 60);

    const stringMinMinutes = minMinutes > 0 ? `${minMinutes}m` : '';
    const stringMinHours = minHours > 0 ? `${minHours}h` : '';
    const stringMaxMinutes = maxMinutes > 0 ? `${maxMinutes}m` : '';
    const stringMaxHours = maxHours > 0 ? `${maxHours}h` : '';
    const instant = stringMinHours + stringMinMinutes == '' ? '< 1m' : ''

    return (`${instant} ${stringMinHours} ${stringMinMinutes} - ${stringMaxHours} ${stringMaxMinutes}`)
}