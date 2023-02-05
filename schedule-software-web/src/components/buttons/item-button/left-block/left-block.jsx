import React from "react";
import { localLanguage } from "../../../../data/language-selector";
import { DetailButton } from "../../detail-button/detail-button";

import './left-block.css';

export function IBLeftBlock({
    image,
    title,
    subtitle,
    selected

}) {


    function subtitleHandler() {
        const listLength = subtitle.length

        while (subtitle.length > 3) {
            subtitle.pop()
        }
        var textValue = subtitle.join(', ')

        if (subtitle.length != listLength) {
            var other = localLanguage.other.plural;

            if (listLength - subtitle.length == 1) {
                other = localLanguage.other.singular
            }

            textValue = `${textValue} & ${listLength - subtitle.length} ${other}`
        } else {
            textValue = textValue.split('')
            textValue[textValue.lastIndexOf(',')] = ' &'
            textValue.join('')
        }

        return textValue
    }

    return (
        <div className='left-block'>
            {image ?
                <img className='image' src={image}></img> :
                null
            }
            <div className={`title-block`}>
                <p className={`title-text ${selected?'secondary-color':'terciary-color'}`}>{title}</p>
                {
                    subtitle ?
                        <DetailButton text={subtitleHandler(subtitle)} status={selected}></DetailButton> :
                        null
                }
            </div>
        </div>
    )
}