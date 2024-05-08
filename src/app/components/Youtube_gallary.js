import styles from "./card.module.css"


const Card = (props) => {
    const {videoData} =props

    return(
        <div className ={styles.card}>
           <div className={styles.thumbnailImg} >
            <img  src={videoData.thumbnailUrl} alt={videoData.title} /></div>
            <h4 className={styles.title}>{videoData.title}</h4>
           <div className={styles.channelDetailes} >
           <img className={styles.channelLogoUrl} src={videoData.channelLogoUrl} alt={videoData.channelName} />
            <p  className={styles.channelName}>{videoData.channelName}</p></div>
            <div className={styles.reaction}>
            <p className={styles.likes}>likes:{videoData.likes/1000}k</p>
            <p className={styles.views}>Views:{videoData.views/1000}k</p></div>
        </div>
    )
}
export default Card