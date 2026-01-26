import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsReducer';

const Card = props => {

    const dispatch = useDispatch();

    return ( 
        <li className={styles.card}> {props.title} 
            <button type="button" className={clsx(styles.favoriteButton, props.isFavorite && styles.isFavorite)} onClick={() => dispatch(toggleCardFavorite(props.id))}>
                <span className={clsx('fa', props.isFavorite ? 'fa-star' : 'fa-star-o')}></span>
            </button>
        {!props.hideRemove && (
            <button type="button" className={styles.removeButton} onClick={() => dispatch(removeCard(props.id))}>
                <span className="fa fa-trash"></span>
            </button>
        )}
        </li>
    );
};

export default Card;