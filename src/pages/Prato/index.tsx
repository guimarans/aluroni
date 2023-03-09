import styles from './Prato.module.scss';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import cardapio from 'data/cardapio.json';
import { useNavigate } from 'react-router-dom';

export default function Prato() {
  const { state } = useLocation();
  const { prato } = state as {prato: typeof cardapio[0]};
  const navigate = useNavigate();
  return (
    <>
      <button 
        className={styles.voltar}
        onClick={() => navigate(-1)}
      >{'< Voltar'}</button>
      <section className={styles.container}>
        <h1 className={styles.titulo}> {prato.title} </h1>
        <picture className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </picture>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}> {prato.description} </p>
          <div className={styles.tags}>
            <span className={classNames({
              [styles.tags__tipo]: true,
              [styles[`tags__tipo__${prato.category.label.toLowerCase()}`]]: true
            })}>
              {prato.category.label}
            </span>
            <span className={styles.tags__porcao}>
              {prato.size}g
            </span>
            <span className={styles.tags__qtdpessoas}>
              Serve {prato.serving} pessoa{prato.serving === 1 ? '' : 's'}
            </span>
            <span className={styles.tags__valor}>
              {prato.price.toFixed(2)}
            </span>

          </div>
        </div>
      </section>
    </>
  );
}