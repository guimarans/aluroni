import styles from './Item.module.scss';
import logo from 'assets/logo.svg';
import { PerformanceObserver } from 'perf_hooks';


export default function Item() {
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={logo} alt="imagem" />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2></h2>
                    <p></p>
                </div>
                <div className={styles.item__tags}>
                    <div className={styles.item__tipo}> </div>
                    <div className={styles.item__porcao}></div>
                    <div className={styles.item__qtdpessoas}></div>
                    <div className={styles.item__valor}></div>
                </div>
            </div>
        </div>
    )
}