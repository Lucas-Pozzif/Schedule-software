import { useState } from 'react'
import { ItemButton } from '../../../components/buttons/item-button/item-button'
import { Input } from '../../../components/input/input'
import { localLanguage } from '../../../data/language-selector'
import { professionals } from '../../../data/professional-data'
import { PLHeader } from './professional-list-header/professional-list-header'

import './professional-list.css'

export function ProfessionalList() {
    const [text, setText] = useState('')

    return (
        <div className="professional-list-page">
            <PLHeader />
            <div className='pl-search-bar-div'>
                <Input placeholder={localLanguage.input.search} value={text} setValue={setText} />
            </div>
            <div className='pl-professional-list'>
                {
                    professionals.map((prof) => {
                        if (prof.name.toLowerCase().includes(text.toLowerCase())) {
                            return (
                                <ItemButton image={prof.photo} title={prof.name} subtitle={prof.occupations} />
                            )
                        }
                    })
                }

            </div>
        </div>
    )
}