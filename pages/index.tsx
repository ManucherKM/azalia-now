import Head from 'next/head'
import ProductСard from '../components/ProductСard'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Тестовое задание</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={styles.wrapper}>
          <ProductСard
            grade={4}
            isFavorites={true}
            isBasket={false}
            isHit={false}
            imgSrc={"/assets/img/img.png"}
            name={"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED"}
            price={1235}
            type={"electronics"}
          />
        </div>
      </main>
    </>
  )
}
