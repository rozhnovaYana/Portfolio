import Image from "next/image";
import styles from "./cardsList.module.scss";
import Link from "next/link";
import { type ContentItem } from "@/helpers/markdown-reader";

interface IItems {
  title: string;
  fetchData: () => ContentItem[];
}

export function CardsList({ title, fetchData }: IItems) {
  const items = fetchData();
  const titleSlug = title.toLowerCase();

  return (
    <div className={styles.card}>
      <h2 className={styles["card-title"]}>{title}</h2>
      <ul className={styles["card-items"]}>
        {items?.map((p) => (
          <li key={p.slug} className={styles.item}>
            <div className={styles["item-image"]}>
              <Image
                sizes="(max-width: 768px) 50vw, 100vw"
                fill
                src={p?.coverImage}
                alt={title}
              />
            </div>
            <div className={styles["item-content"]}>
              <div className={styles["item-title"]}>{p?.title}</div>
              <div className={styles["item-description"]}>{p?.description}</div>
            </div>
            <Link
              className={styles["item-button"]}
              href={`${titleSlug}/${p.slug}`}
            >
              A Read More
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
