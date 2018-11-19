import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import LeftRightSection from './LeftRightSection'
import iTeaching from './media/teaching.jpg'
import iSquare from './media/square.png'
import iWideRect from './media/wide-rectangle.png'

const Title = ({ children }) => {
  return (<Typography variant='h4' align='center'>{children}</Typography>)
}

const Home = (props) => {
  const { classes } = props
  return (
    <div>
      <LeftRightSection image={iTeaching} imageSide='left'>
        <Title>Teaching</Title>
      </LeftRightSection>
      <LeftRightSection image={iTeaching} imageSide='right'>
      <Title>Teaching</Title>
      </LeftRightSection>
      <LeftRightSection image={iSquare} imageSide='left'>
        <Title>Square</Title>
      </LeftRightSection>
      <LeftRightSection image={iWideRect} imageSide='right'>
        <Title>Wide Rectangle</Title>
      </LeftRightSection>
    </div>
  )
}

const styles = {}

export default withStyles(styles)(Home)