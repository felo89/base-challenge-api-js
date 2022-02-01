import { SWRConfig } from 'swr'
import styles from '../styles/Home.module.css'
import Header from './header'
import Product from './product'

export default function Home() {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <Product />
        </main>
      </div>
    </SWRConfig>
  )
}
