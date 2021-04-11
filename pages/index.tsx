import React, { useEffect, useState } from 'react'

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
      <div>
        {productList.map((product, i) => (
          <div key={i}>{product.name}</div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
