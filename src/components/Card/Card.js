import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {

    const dispatch = useDispatch();

    return ( 
        <li className={styles.card}> {props.title} 
        <button type="button" className={clsx(styles.favoriteButton, props.isFavorite && styles.isFavorite)} onClick={() => dispatch(toggleCardFavorite(props.id))}>
            <span className={clsx('fa', props.isFavorite ? 'fa-star' : 'fa-star-o')}></span>
        </button>
        </li>
    );
};

export default Card;