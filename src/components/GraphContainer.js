import React from 'react'
import { connect } from 'react-redux'
import MindMap from 'react-mindmap'

import {Card, CardHeader, CardText} from 'material-ui/Card'

const GraphContainer = props => (
  <Card>
      <CardHeader title="Graph Display" />
      <CardText>
        stuff
        <p>{props.graph.mdText}</p>
        <pre>{JSON.stringify(props.graph.graph)}</pre>
        <MindMap
        nodes={props.graph.graph.nodes}
        connections={props.graph.graph.edges}
        />
      </CardText>
  </Card>
)

const mapStateToProps = state => ({ graph: state.graph })

export default connect( mapStateToProps, null)(GraphContainer)
