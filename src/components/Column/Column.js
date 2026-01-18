import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {

    const searchText = useSelector(state => state.searchText);
    const cards = useSelector(state => state.cards.filter(card => {
        const matchesColumn = card.columnId === props.id;

        const query = (searchText || '').trim().toLowerCase();
        if(!query) return matchesColumn;

        const matchesSearch = card.title.toLowerCase().includes(query);
        return matchesColumn && matchesSearch;
    })
);
    
    return (<article className={styles.column}>
        <h2 className={styles.title}>
            <span className={styles.icon + ' fa fa-' + props.icon}>
                </span>{props.title}
            </h2>
        
        <ul className={styles.cards}>
            {cards.map(card => <Card key={card.id} title={card.title} />)}
        </ul>
        <CardForm columnId={props.id} />
    </article>
    );
};

export default Column;