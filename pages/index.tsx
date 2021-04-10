import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((rslt) => rslt.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <div>
        {productList.map((product, i) => (
          <div key={i}>{product.name}</div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
