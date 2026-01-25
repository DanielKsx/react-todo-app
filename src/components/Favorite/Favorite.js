import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';

const Favorite = () => {

    const favoriteCards = useSelector(getFavoriteCards); 

    if (favoriteCards.length === 0){
        return (
            <div className={styles.favorite}>
                <PageTitle>FAVORITE</PageTitle>
                <p className={styles.empty}>No cards..</p>
            </div>
        );
    }
    
    return (
        <div className={styles.favorite}>
            <PageTitle>FAVORITE</PageTitle>
            <ul className={styles.cards}> {favoriteCards.map(card => (
                <Card key={card.id} {...card} />
            ))}
            </ul>
        </div>
    );
};

export default Favorite;