import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root:{
    "& .MuiDialog-paper":{backgroundColor: '#385161',}
    
  },
});


export default function SearchModal({open ,onClose,rowData,rowId,deleteData}){
  const classes = useStyles()
  
  const[sl_no,SetSl_no]=React.useState(0)
  
  React.useEffect(()=>{
    SetSl_no(rowId)
  },[rowData])
  
  if(!open) return null
  const handleSubmit = (e) => {
    e.preventDefault()
    deleteData({sl_no})
    SetSl_no(0)
  }  
  
    return(
        <div>
        <Dialog open={open} onClose={onClose} className={classes.root}>
          <DialogTitle style={{color:'white'}}>Delete Records ?</DialogTitle>
          <DialogContent>
            <DialogContentText style={{color:'white'}}>
              Are you sure you want to delete these Record[s]?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit} style={{color:'white'}}>Delete</Button>
            <Button onClick={onClose} style={{color:'white'}}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}