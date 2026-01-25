import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.inner}>
                    <Link to="/" className={styles.logo}>
                        <i className="fa fa-tasks"></i>
                    </Link>
                    <ul className={styles.list}>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.link} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.link} to="/favorite">Favorite</NavLink>
                        </li>
                        <li>
                            <NavLink  className={({ isActive }) => isActive ? styles.linkActive : styles.link} to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
                    
    )
};

export default NavBar;