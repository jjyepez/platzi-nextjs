import React from 'react'
import { Header, Transition, Confirm } from 'semantic-ui-react'

import { MojitoVacio } from '@components/SVGIcons'

const RottenHeader = () => (
  <Header size="huge" as="h1">
    Platzi
    <MojitoVacio size="58px" />
    Drinks
  </Header>
)

export default RottenHeader
