import Navbar from 'components/navbar';
import styles from './paginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import Footer from 'components/footer';

export default function PaginaPadrao(){
    return(
        <div className={styles.container}>
            <Navbar/>
            <div className={styles['container-outlet']}>
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
}