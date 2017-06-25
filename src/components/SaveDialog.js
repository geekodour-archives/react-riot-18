import React from 'react'
import Dialog from 'material-ui/Dialog'

const SaveDialog = props => {
  if(props.userInfo){
    return (
    <Dialog
      title="Save MindMap"
      modal={false}
      open={props.saveDialogOpen}
      onRequestClose={props.toggleSaveDialog}>
      <p>{JSON.stringify(props)}</p>
      Save stuff here
    </Dialog>
    )
  }
  return(
    <Dialog
      title="Need to be logged in!"
      modal={false}
      open={props.saveDialogOpen}
      onRequestClose={props.toggleSaveDialog}>
      <p>{JSON.stringify(props)}</p>
      Save stuff here
    </Dialog>
    )
}

//const mapStateToProps = state => ({ auth: state.auth, ui: state.ui });
//const mapDispatchToProps = dispatch => (
//  {
//    uiActions: bindActionCreators(uiActions, dispatch)
//  }
//);

//export default connect( mapStateToProps, mapDispatchToProps)(DialogBox)
export default SaveDialog
