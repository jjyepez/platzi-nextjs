import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<TProduct>()
  const { id } = query

  useEffect(() => {
    const url = `/api/avo/${id}`
    window
      .fetch(url)
      .then((rslt) => rslt.json())
      .then((json) => {
        console.log({ json })
        setProduct(json)
      })
  }, [id])

  return (
    <section>
      <h1>Página producto: {id}</h1>
      {JSON.stringify(product)}
    </section>
  )
}

export default ProductPage
