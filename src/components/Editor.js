import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as graphActions from '../actions/graphActions'
import * as uiActions from '../actions/uiActions'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

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
        <p>{JSON.stringify(props.auth)}</p>
        <RaisedButton
          label="save"
          onTouchTap={props.uiActions.toggleSaveDialog}
          backgroundColor='#494949'
          labelColor='#FFF'/>
        <RaisedButton
          label="share"
          onTouchTap={props.uiActions.toggleShareDialog}
          backgroundColor='#494949'
          labelColor='#FFF'/>
      </CardActions>
    </Card>
)

const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch => (
  {
    graphActions: bindActionCreators(graphActions, dispatch),
    uiActions: bindActionCreators(uiActions, dispatch)
  }
);

export default connect( mapStateToProps, mapDispatchToProps)(Editor)
