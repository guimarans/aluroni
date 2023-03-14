import styles from './Prato.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import cardapio from 'data/cardapio.json';

export default function Prato() {
  const navigate = useNavigate();
  const { id } = useParams();
  const prato = cardapio.find(item => item.id === Number(id));

  if(!prato) {
    return '';
  }

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