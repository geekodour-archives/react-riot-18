import React from 'react'
import Drawer from 'material-ui/Drawer'

const Dock = props => (
  <Drawer
    docked={false}
    width={400}
    openSecondary={true}
    open={props.dockOpen}
    onRequestChange={props.toggleDock}>
          cool stuff
  </Drawer>
)

//const mapStateToProps = state => ({ auth: state.auth, ui: state.ui });
//const mapDispatchToProps = dispatch => (
//  {
//    uiActions: bindActionCreators(uiActions, dispatch)
//  }
//);

//export default connect( mapStateToProps, mapDispatchToProps)(DialogBox)
export default Dock
