import React from "react";
import styles from "./ListaDeAnimeCard.module.css";

export default function ListaDeAnimeCard({ animes }) {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
      {Array.isArray(animes) &&
        animes
          .filter(
            (data) =>
              data &&
              data.title &&
              data.images &&
              data.images.jpg &&
              data.images.jpg.large_image_url
          ) // Filtra itens válidos
        .map((data) => (
          <article className={styles.card}>
            <img
              src={data.images.jpg.large_image_url}
              alt={"imagem de" + data.title}
              key={data.id || Math.random()} // Gera uma chave segura
              className={styles.image}
              
            />
            <h1 className={styles.title}>{data.title}</h1>
            <p >Episódios: {data.episodes}</p>
            <p>Favoritos: {data.favorites}</p>
          </article>
          ))}
      </div>
    </div>
  );
}
