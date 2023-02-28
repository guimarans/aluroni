import styles from './Itens.module.scss';
import cardapio from './itens.json';
import Item from './Item'
import { useState } from 'react';

export default function Itens() {
    // const [cardapio, setCardapio] = useState('');
    
    return (
        <div className={styles.itens}>
            {cardapio.map((item) => (
                <Item 
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    )
}