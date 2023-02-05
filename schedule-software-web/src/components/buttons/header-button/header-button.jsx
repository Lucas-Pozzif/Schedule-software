import { subtitleHandler } from '../../../functions/subtitle-handler/subtitle-handler'
import { DetailButton } from '../detail-button/detail-button'
import { ReturnButton } from '../return-button/return-button'
import './header-button.css'

export function HeaderButton({
    title,
    subtitle,
    image

}) {
    return (
        <div className='hb-profile-button'>
            <div className='hb-return-button'>
            <ReturnButton size={40} />
            </div>
            <div className='hb-right-block'>
                <div className='hb-title-block'>
                    <p className='hb-title-text'>{title}</p>
                    {
                        subtitle ?
                            <DetailButton text={subtitleHandler(subtitle)}></DetailButton> :
                            null
                    }
                </div>
                {image ?
                    <img className='hb-profile-picture' src={image}></img> :
                    null
                }
            </div>
        </div>
    )
}