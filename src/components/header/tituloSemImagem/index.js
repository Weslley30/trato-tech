import styles from './tituloSemImagem.module.scss';

export default function TituloSemImagem({titulo, description}){
    return(
        <div className={styles.container}>
            <h1 className={styles.titulo}>
                {titulo}
            </h1>
            <h2 className={styles.descricao}>
                {description}
            </h2>
        </div>
    );
}