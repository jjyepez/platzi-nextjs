import React, { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

import fetch from 'isomorphic-unfetch'

export const getStaticProps = async () => {
  // se ejecuta en backend con nodejs al momento de crear el componente
  let url = 'https://curso-nextjs-jjy.vercel.app/api/avo'
  let { data }: TAPIAvoResponse = await fetch(url).then((response) =>
    response.json()
  )
  return {
    props: {
      productList: data,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
