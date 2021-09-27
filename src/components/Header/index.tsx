import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt='Logo' height={70} width={70} />
      </div>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link href='/'>Página Inicial</Link>
          </li>
          <li>
            <Link href='/'>Sobre nós</Link>
          </li>
          <li>
            <Link href='/'>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
