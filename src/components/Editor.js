import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as graphActions from '../actions/graphActions'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

const Editor = props => (
  <Card>
      <CardHeader title="Markdown Editor" />
      <CardText>
        <TextField
          hintText="Write in markdown"
          multiLine={true}
          rows={10}
          onChange={(o,n)=>{console.log(n);props.graphActions.parseMd(n)}}
          rowsMax={10}
        />
      </CardText>
      <CardActions>
        <FlatButton label="save" />
        <FlatButton label="share" />
      </CardActions>
  </Card>
)

const mapDispatchToProps = dispatch => (
  {
    graphActions: bindActionCreators(graphActions, dispatch)
  }
);

export default connect( null, mapDispatchToProps)(Editor)