import styles from './tituloComImagem.module.scss';

export default function TituloComImagem({titulo, description, imagem, className}) {
    return (
        <div className={`${className} ${styles.header}`}>
            <div className={styles['header-texto']}>
                <h1>{titulo}</h1>
                <h2>{description}</h2>
            </div>
            <div className={styles['header-imagem']}>
                <img 
                    alt={titulo}
                    src={imagem}
            />
            </div>
        </div>
    );
}