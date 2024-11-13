import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://img.freepik.com/premium-photo/united-arab-emirates-alif-mobility-pavilion-dubai-expo-2020_516328-82.jpg?w=360"
          alt="Single Post Page"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/noavatar.png"
            alt="Avatar"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Teddy Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>13.11.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet
          eaque ducimus amet laboriosam asperiores harum neque quam ratione
          nostrum? Nostrum repudiandae quisquam nobis numquam fuga corrupti
          debitis excepturi quaerat?
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
