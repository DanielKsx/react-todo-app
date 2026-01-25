import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchText } from '../../redux/store';


const SearchForm = () => {

    const dispatch = useDispatch();
    const searchText = useSelector(state => state.searchText);

    const handleChange = (e) => {
        dispatch(updateSearchText(e.target.value));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder="Search..." value={searchText} onChange={handleChange}/>
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;