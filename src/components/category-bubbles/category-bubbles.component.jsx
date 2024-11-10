import { Button } from '../button/button.component'

export const Bubbles = ({ bubbles }) => {
    return (
        <div className='section bubbles'>
            {
                bubbles.map((bubble) => (
                    <Button key={bubble.id} buttonSize='small' buttonType='white' text={bubble.name}></Button>
                ))
            }
        </div>
    )
}