import React from 'react'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'
//import * as graphActions from '../actions/graphActions'

//import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
//import TextField from 'material-ui/TextField'
//import RaisedButton from 'material-ui/RaisedButton'

const DialogBox = props => (
  <Dialog
    title="Dialog With Actions"
    actions={actions}
    modal={false}
    open={this.state.open}
    onRequestClose={this.handleClose}>
    The actions in this window were passed in as an array of React objects.
  </Dialog>
)

// const mapStateToProps = state => ({ auth: state.auth });
// const mapDispatchToProps = dispatch => (
//   {
//     graphActions: bindActionCreators(graphActions, dispatch)
//   }
// );

export default DialogBox
//export default connect( mapStateToProps, mapDispatchToProps)(Editor)
