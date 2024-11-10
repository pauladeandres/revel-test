import styles from '@/styles/Slide.module.css'

import { Button } from '../button/button.component'

export const RevelSlide = ({ slide }) => {

    const { id, image, title, text } = slide

    return (
        <div key={id} style={{ backgroundImage: `url(${image})` }} className={`${styles['fullscreen-slide']}`}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
            <a>
                <Button text='Discover' buttonType='purple' buttonSize='medium'></Button>
            </a>
        </div>
    )
}