import Link from 'next/link'
import styles from './navigation.module.css'

export function Navigation () {
    styles
    const links = [
        {
          label: 'Home',
          route: '/'
        },
        {
          label: 'Posts',
          route: '/posts'
        },
        {
          label: 'About',
          route: '/about'
        }
      ]

    return (
        <header className={styles.header}>
          <nav className={styles.navigation}>
            {
              links.map(({label, route}) => (
                <li  key={route}>
                  <Link href={route}>{label}</Link>
                </li>
              ))
            }
          </nav>
        </header>
    )
}