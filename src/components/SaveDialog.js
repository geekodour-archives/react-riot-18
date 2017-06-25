import React from 'react'
import Dialog from 'material-ui/Dialog'

const SaveDialog = props => {
  if(props.params.mindmapid){
    return (
    <Dialog
      title="Sorry! don't have modification mutation yet!"
      modal={false}
      open={props.saveDialogOpen}
      onRequestClose={props.toggleSaveDialog}>
    </Dialog>
    )
  }

  if(props.userInfo){
    return (
    <Dialog
      title="Saved!"
      modal={false}
      open={props.saveDialogOpen}
      onRequestClose={props.toggleSaveDialog}>
    </Dialog>
    )
  }

  return(
    <Dialog
      title="Need to be logged in!"
      modal={false}
      open={props.saveDialogOpen}
      onRequestClose={props.toggleSaveDialog}>
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
