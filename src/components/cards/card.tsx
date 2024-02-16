import Image from "next/image";
import styles from "./card.module.scss";

interface IItem {
  id: string;
  title: string;
  description: string;
  coverImage: string;
}
interface IItems {
  title: string;
  items: IItem[];
}

export function Card({ title, items }: IItems) {
  return (
    <div className={styles.card}>
      <h2 className={styles["card-title"]}>{title}</h2>
      <ul className={styles["card-items"]}>
        {items.map((p) => (
          <li key={p.id} className={styles.item}>
            <div className={styles["item-image"]}>
              <Image
                sizes="(max-width: 768px) 50vw, 100vw"
                fill
                src={p.coverImage}
                alt={title}
              />
            </div>
            <div className={styles["item-title"]}>{p.title}</div>
            <div className={styles["item-description"]}>{p.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
