import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.inner}>
                    <a href="/" className={styles.logo}>
                        <i className="fa fa-tasks"></i>
                    </a>
                    <ul className={styles.list}>
                        <li>
                            <a href="/" className={styles.link}>Home</a>
                        </li>
                        <li>
                            <a href="/favorite" className={styles.link}>Favorite</a>
                        </li>
                        <li>
                            <a href="/about" className={styles.link}>About</a>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
                    
    )
};

export default NavBar;