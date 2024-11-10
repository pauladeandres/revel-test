import styles from '@/styles/Image.module.css'

export const Image = ({image, title}) => {
    return (
        <div className={styles['image-container']}>
            <img src={image} alt={title}></img>
        </div>
    )
}