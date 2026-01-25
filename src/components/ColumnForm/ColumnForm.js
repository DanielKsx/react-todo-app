import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';


const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId: props.listId }));
        setTitle('');
        setIcon('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <span className={styles.label}>Title:</span> 
            <input className={styles.input} type="text" value={title}  onChange={e => setTitle(e.target.value)} />

            <span className={styles.label}>Icon:</span>
            <input className={styles.input} type="text" value={icon} onChange={e => setIcon(e.target.value)} />

            <Button>ADD COLUMN</Button>
        </form>
        );
};

export default ColumnForm;