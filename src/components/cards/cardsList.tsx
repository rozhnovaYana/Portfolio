import Image from "next/image";
import styles from "./cardsList.module.scss";

interface IItem {
  id: string;
  title: string;
  description: string;
  coverImage: string;
}
interface IItems {
  title: string;
  fetchData: () => Promise<IItem[]>;
}

export async function CardsList({ title, fetchData }: IItems) {
  const items = await fetchData();

  return (
    <div className={styles.card}>
      <h2 className={styles["card-title"]}>{title}</h2>
      <ul className={styles["card-items"]}>
        {items?.map((p) => (
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
