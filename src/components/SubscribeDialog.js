import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@material-ui/core'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import React, { forwardRef } from 'react'
import { hideAttachCardDialog, showAttachCardDialog } from '../redux/actions/attachCardDialog.action'
import { MiniUser } from '../pages/profile/components/MiniUser'
import Payment from '../pages/Finance/payment'

  const Transition = forwardRef(function Transition(
    props,
    ref
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const SubscribeDialog = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userData)
  const isOpen = useSelector(
    state => {
      return state?.uiReducer?.subscribeInsufficientAmountDialog;
    }
  );
  const handleClose = () => {
    dispatch(hideAttachCardDialog());
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          Please attach your card
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Payment/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
