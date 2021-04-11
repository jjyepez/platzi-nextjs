import React from 'react'
import { Item, Label } from 'semantic-ui-react'

import AddToCart from './AddToCart'
import ProductAttributes from './ProductAttributes'

type ProductSummaryProps = {
  product: TProduct
}

const ProductSummary = ({ product }: ProductSummaryProps) => (
  <>
    <Item.Group as="section">
      <Item style={{ alignItems: 'center' }}>
        <Item.Image size="medium">
          <img src={product.image} alt={product.name} />
        </Item.Image>
        <Item.Content>
          <Item.Header as="h1">{product.name}</Item.Header>
          <Item.Description>
            <p>US$ {product.price.toFixed(2)}</p>
            <Label>{`SKU: ${product.sku}`}</Label>
          </Item.Description>
          <Item.Extra>
            <AddToCart product={product} />
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
    <ProductAttributes {...product.attributes} />
  </>
)

export default ProductSummary
