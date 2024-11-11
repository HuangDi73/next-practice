import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Creative Thought Agency.</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis velit officiis earum aut? Inventore, ipsam pariatur?
            </p>
            <div className={styles.buttons}>
              <button className={styles.button}>Learn More</button>
              <button className={styles.button}>Contact</button>
            </div>
            <div className={styles.brands}>
              <Image src="/brands.png" alt="Brands Image" fill className={styles.brandsImg} />
            </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/hero.gif" alt="Hero Gif" fill className={styles.heroImg} />
        </div>
    </div>
  )
}
