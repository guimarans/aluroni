import React, { memo } from 'react';
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const Elemento = memo(() => {
  return <CgSearch size={20} color="#4C4D5E" />;
});
Elemento.displayName = 'Ícone de busca';

export default function Buscador({ busca, setBusca }: Props) {
  return (
    <div className={styles.buscador}>
      <input
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
        placeholder="Buscar"
      />
      <Elemento />
    </div>
  );
}