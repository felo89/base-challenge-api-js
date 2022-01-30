import Image from 'next/image'

import styles from '../../../styles/Home.module.css'

const Card = ({ image, title, description, hasButton, buttonText }) => {
  return (
    // <div className={styles.card}>
    //   <Image
    //     src={`http://${image}`}
    //     alt="image"
    //     width={100}
    //     height={100}
    //   />
    //   <div className={styles.container}>
    //     <h4><b>{title}</b></h4>
    //     <p>{description}</p>
    //   </div>
    // </div>


    <div className={styles.Card}>
      <div>
        <Image
          src={`http://${image}`}
          alt="image"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__title}>{title}</div>
        <p className={styles.card__text}>{description}</p>
        {hasButton && <button className={styles.card__btn}>{buttonText}</button>}
      </div>
    </div>
  );
}

Card.getInitialProps = () => {
  return {
    image: null,
    title: '',
    description: '',
    hasButton: true,
  }
}

export default Card;