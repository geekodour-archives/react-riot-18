import React from 'react'
import { connect } from 'react-redux'

import {Card, CardHeader, CardText} from 'material-ui/Card'

const GraphContainer = props => (
  <Card>
      <CardHeader title="Graph Display" />
      <CardText>
        stuff
        <p>{props.graph.mdText}</p>
      </CardText>
  </Card>
)

const mapStateToProps = state => ({ graph: state.graph })

export default connect( mapStateToProps, null)(GraphContainer)
