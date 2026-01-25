import { useState } from 'react';
import styles from './ListForm.module.scss';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { addList } from '../../redux/store';


const ListForm = props => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.listForm}>
            <span className={styles.label}>Title:</span> 
            <input className={styles.input} type="text" value={title}  onChange={e => setTitle(e.target.value)} />

            <span className={styles.label}>Description:</span>
            <input className={styles.input} type="text" value={description} onChange={e => setDescription(e.target.value)} />

            <Button>ADD LIST</Button>
        </form>
        );
};

export default ListForm;