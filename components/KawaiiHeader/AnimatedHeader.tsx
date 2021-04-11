import React from 'react'
import { Header, Transition } from 'semantic-ui-react'

import { Mojito } from '@components/SVGIcons'

type AnimatedHeaderProps = {
  visible: boolean
  onClick: () => void
  onComplete: () => void
}

const AnimatedHeader = ({
  visible,
  onClick,
  onComplete,
}: AnimatedHeaderProps) => (
  <Header size="huge" as="h1" onClick={onClick}>
    Platzi
    <Transition
      animation="jiggle"
      visible={visible}
      duration={900}
      onComplete={onComplete}
    >
      <Mojito size="58px" />
    </Transition>
    Drinks
  </Header>
)

export default AnimatedHeader
