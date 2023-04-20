import styles from './header.module.scss';
import TituloComImagem from './tituloComimagem';
import TituloSemImagem from './tituloSemImagem';

export default function Header({ titulo, description, className = '', imagem}){
    return(
        <header className={styles.header}>
           { titulo && !imagem && <TituloSemImagem titulo={titulo} description={description}/>}
           { titulo && imagem && <TituloComImagem titulo={titulo} description={description} imagem={imagem} className={className}/>}
        </header> 
    );
}