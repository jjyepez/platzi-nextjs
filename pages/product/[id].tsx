import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'
import { GetStaticProps } from 'next'

export const getStaticPaths = async () => {
  const url = 'https://curso-nextjs-jjy.vercel.app/api/avo'
  const response = await fetch(url)
  const { data: productList }: TAPIAvoResponse = await response.json()

  const paths = productList.map(({ id }) => ({
    params: { id },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  // se ejecuta en backend con nodejs al momento de crear el componente
  let url = `https://curso-nextjs-jjy.vercel.app/api/avo/${id}`
  let product: TProduct = await fetch(url).then((response) => response.json())
  return {
    props: {
      product,
    },
  }
}
const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
