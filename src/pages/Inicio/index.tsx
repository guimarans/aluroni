import cardapio from 'data/Cardapio.json';
import styles from './Inicio.module.scss';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);

  return(
    <section>
      <h3 className={styles.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(item => 
          (<div key={item.id} className={styles.recomendado}>
            <picture className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </picture>
            <button className={styles.recomendado__botao}> Ver mais </button>
          </div>)
        )};
      </div>

      <div className={styles.nossaCasa}>
        <img src="" alt="" />

        <address className={styles.nossaCassa__endereco}></address>
      </div>
    </section>
  );
}