import React from 'react'
import { Header, Divider, Table } from 'semantic-ui-react'

const ProductAttributes = ({ description, ...otherAttributes }: any) => {
  let otherAttributesExt: any = {}
  otherAttributesExt['Ingredients'] = []
  Object.keys(otherAttributes).forEach((key) => {
    if (key.includes('strIngredient') || key.includes('strMeasure')) {
      let ingredient = key
        .replace('strIngredient', '')
        .replace('strMeasure', '')
      if (!otherAttributesExt['Ingredients'][ingredient]) {
        otherAttributesExt['Ingredients'][ingredient] = {}
      }
      otherAttributesExt['Ingredients'][ingredient][
        key.replace(ingredient, '')
      ] = otherAttributes[key]
    }
  })

  let ingredients = otherAttributesExt.Ingredients.filter(
    (item: any) => item.strIngredient
  ).map((item: any) => {
    return (item.strMeasure ? item.strMeasure + ', ' : '') + item.strIngredient
  })

  const showKeys: any = {
    strDrink: 'Drink Name',
    strDrinkAlternate: '',
    strVideo: '',
    strCategory: '',
    strIBA: '',
    strAlcoholic: '',
    strGlass: '',
    strInstructions: '',
  }

  const keyToLabel = (key: string) =>
    showKeys[key].trim() == ''
      ? key.replace(/str/, '').replace(/([a-z])([A-Z])/g, '$1 $2')
      : showKeys[key]
  return (
    <section className="container">
      <Header as="h3">About this drink</Header>
      <p>{description}</p>

      <Divider />

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2">Drink Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Object.keys(otherAttributes).map(
            (key) =>
              Object.keys(showKeys).includes(key) &&
              otherAttributes[key as keyof typeof otherAttributes] && (
                <Table.Row key={key}>
                  <Table.Cell className="attr-name">
                    {keyToLabel(key)}
                  </Table.Cell>
                  <Table.Cell>
                    {otherAttributes[key as keyof typeof otherAttributes]}
                  </Table.Cell>
                </Table.Row>
              )
          )}
          <Table.Row>
            <Table.Cell>Ingredients</Table.Cell>
            <Table.Cell>
              {ingredients.map((item: any) => {
                return <div key={item}>{item}</div>
              })}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <style jsx>{`
        .container :global(.attr-name) {
          text-transform: capitalize;
          white-space: nowrap;
        }
      `}</style>
    </section>
  )
}

export default ProductAttributes
