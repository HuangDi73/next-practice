import Image from "next/image";
import styles from "./PostCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://img.freepik.com/premium-photo/united-arab-emirates-alif-mobility-pavilion-dubai-expo-2020_516328-82.jpg?w=360"
            alt="Post Card Image"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>12.11.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>
          Lorem, ipsum dolor.
        </h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure minus saepe totam laborum distinctio qui quibusdam hic nulla possimus. Assumenda molestias facere sed neque, eligendi nulla eveniet dolor qui.
        </p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard;