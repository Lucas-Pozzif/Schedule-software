import { subtitleHandler } from '../../../functions/subtitle-handler/subtitle-handler'
import { DetailButton } from '../detail-button/detail-button'
import { ReturnButton } from '../return-button/return-button'
import './profile-button.css'

export function ProfileButton({
    title,
    subtitle,
    image

}) {
    return (
        <div className='pb-profile-button'>
            <div className='pb-return-button'>
            <ReturnButton size={40} />
            </div>
            <div className='pb-right-block'>
                <div className='pb-title-block'>
                    <p className='pb-title-text'>{title}</p>
                    {
                        subtitle ?
                            <DetailButton text={subtitleHandler(subtitle)}></DetailButton> :
                            null
                    }
                </div>
                {image ?
                    <img className='pb-profile-picture' src={image}></img> :
                    null
                }
            </div>
        </div>
    )
}