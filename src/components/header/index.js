import styles from './header.module.scss';
import TituloComImagem from './tituloComimagem';
import TituloSemImagem from './tituloSemImagem';

export default function Header({ titulo, description, className = '', imagem, children}){
    return(
        <header className={styles.header}>
           { titulo && !imagem && <TituloSemImagem titulo={titulo} description={description}>{children}</TituloSemImagem>}
           { titulo && imagem && <TituloComImagem titulo={titulo} description={description} imagem={imagem} className={className}>{children}</TituloComImagem>}
        </header> 
    );
}