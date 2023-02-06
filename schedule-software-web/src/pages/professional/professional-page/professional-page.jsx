import { useState } from 'react'
import { ItemButton } from '../../../components/buttons/item-button/item-button'
import { Input } from '../../../components/input/input'
import { localLanguage } from '../../../data/language-selector'
import { professionals } from '../../../data/professional-data'
import { PPHeader } from './professional-page-header/professional-page-header'

import './professional-page.css'

export function ProfessionalPage() {
    const [text, setText] = useState('')

    return (
        <div className="professional-page">
            <PPHeader />
            <div className='pp-search-bar-div'>
                <Input placeholder={localLanguage.search} label="temporary label" value={text} setValue={setText} />
            </div>
            <div className='pp-professional-list'>
                {
                    professionals.map((prof) => {
                        if (prof.name.toLowerCase().includes(text.toLowerCase())) {
                            return (
                                <ItemButton image={prof.photo} title={prof.name} subtitle={prof.occupation} />
                            )
                        }
                    })
                }

            </div>
        </div>
    )
}