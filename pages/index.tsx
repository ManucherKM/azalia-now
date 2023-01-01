import Head from 'next/head'
import List from '../components/List'
import ProductСard from '../components/ProductСard'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const fakeData = [
    {
      id: Date.now() + Math.floor(Math.random() * 99999999999999),
      grade: 5,
      isFavorites: false,
      isBasket: true,
      isHit: true,
      imgSrc: "/assets/img/img.png",
      name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
      price: 7300,
      type: "electronics",
    },
    {
      id: Date.now() + Math.floor(Math.random() * 99999999999999),
      grade: 5,
      isFavorites: false,
      isBasket: false,
      isHit: true,
      imgSrc: "/assets/img/img.png",
      name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
      price: 4300,
      type: "electronics",
    },
    {
      id: Date.now() + Math.floor(Math.random() * 99999999999999),
      grade: 5,
      isFavorites: false,
      isBasket: false,
      isHit: false,
      imgSrc: "/assets/img/img.png",
      name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
      price: 53300,
      type: "electronics",
    },
    {
      id: Date.now() + Math.floor(Math.random() * 99999999999999),
      grade: 5,
      isFavorites: false,
      isBasket: true,
      isHit: true,
      imgSrc: "/assets/img/img.png",
      name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
      price: 1300,
      type: "electronics",
    },
    {
      id: Date.now() + Math.floor(Math.random() * 99999999999999),
      grade: 4.4,
      isFavorites: false,
      isBasket: true,
      isHit: true,
      imgSrc: "/assets/img/img.png",
      name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
      price: 5300,
      type: "electronics",
    },
    {
      id: Date.now() + Math.floor(Math.random() * 99999999999999),
      grade: 4,
      isFavorites: false,
      isBasket: false,
      isHit: false,
      imgSrc: "/assets/img/img.png",
      name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
      price: 5300,
      type: "electronics",
    },
    {
      id: Date.now() + Math.floor(Math.random() * 99999999999999),
      grade: 1,
      isFavorites: true,
      isBasket: true,
      isHit: true,
      imgSrc: "/assets/img/img.png",
      name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
      price: 5300,
      type: "electronics",
    },
    {
      id: Date.now() + Math.floor(Math.random() * 99999999999999),
      grade: 3,
      isFavorites: false,
      isBasket: true,
      isHit: false,
      imgSrc: "/assets/img/img.png",
      name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
      price: 5300,
      type: "electronics",
    },
    {
      id: Date.now() + Math.floor(Math.random() * 99999999999999),
      grade: 5,
      isFavorites: false,
      isBasket: true,
      isHit: true,
      imgSrc: "/assets/img/img.png",
      name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
      price: 5300,
      type: "electronics",
    },
  ]
  return (
    <>
      <Head>
        <title>Тестовое задание</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={styles.wrapper}>
          <List
            arr={fakeData}
            render={item =>
              <ProductСard
                key={item.id}
                grade={item.grade}
                isFavorites={item.isFavorites}
                isBasket={item.isBasket}
                isHit={item.isHit}
                imgSrc={item.imgSrc}
                name={item.name}
                price={item.price}
                type={item.type}
              />
            }
          />

        </div>
      </main>
    </>
  )
}
