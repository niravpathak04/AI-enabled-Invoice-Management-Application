import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root:{
    "& .MuiDialog-paper":{backgroundColor: '#385161'},
    "& .MuiDialog-paperWidthLg":{maxWidth:"lg"}
    
  },
});

export default function AddModal({open ,onClose,addData}) {
    
  const classes = useStyles()
  const theme = useTheme();
  //const [fullWidth, setFullWidth] = React.useState(true);
  //const [maxWidth, setMaxWidth] = React.useState('sm');
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  const[business_code,setBusiCode] = React.useState("")
  const[cust_number,setCustNum] = React.useState("")
  const[clear_date,setClearDate] = React.useState("")
  const[buisness_year,setBusiYear] = React.useState("")
  const[doc_id,setDocId] = React.useState("")

  const[posting_date,setPostDate] = React.useState("")
  const[document_create_date,setDocCreateDate] = React.useState("")
  const[due_in_date,setDueDate] = React.useState("")
  const[invoice_currency,setInvCur] = React.useState("")
  const[document_type,setDocType] = React.useState("")

  const[posting_id,setPostId] = React.useState("")
  const[total_open_amount,setTotOpenAmt] = React.useState("")
  const[baseline_create_date,setBaseCreateDate] = React.useState("")
  const[cust_payment_terms,setCustPayTerms] = React.useState("")
  const[invoice_id,setInvId] = React.useState("")


  if(!open) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    addData({business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id})
}

    return(
        <div>
      <Dialog open={open} onClose={onClose} className={classes.root} maxWidth='lg'>
        <DialogTitle style={{color:'white'}}>Add Data</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <form className='AddModal'>
          <TextField
            autoFocus
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="business_code"
            label="Business Code"
            type="text"
            fullWidth
            variant="standard"
            name='business_code'
            value={business_code}
            onChange={(e)=> setBusiCode(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="cust_number"
            label="Customer Number"
            type="text"
            fullWidth
            variant="standard"
            name='cust_number'
            value={cust_number}
            onChange={(e)=> setCustNum(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            placeholder=" "
            id="clear_date"
            label="Clear Date"
            type="date"
            fullWidth
            variant="standard"
            name='clear_date'
            value={clear_date}
            onChange={(e)=> setClearDate(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="buisness_year"
            label="Business Year"
            type="text"
            fullWidth
            variant="standard"
            name='buisness_year'
            value={buisness_year}
            onChange={(e)=> setBusiYear(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="doc_id"
            label="Document Id"
            type="text"
            fullWidth
            variant="standard"
            name='doc_id'
            value={doc_id}
            onChange={(e)=> setDocId(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="posting_date"
            label="Posting Date"
            type="date"
            fullWidth
            variant="standard"
            name='posting_date'
            value={posting_date}
            onChange={(e)=> setPostDate(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="document_create_date"
            label="Document Create Date"
            type="date"
            fullWidth
            variant="standard"
            name='document_create_date'
            value={document_create_date}
            onChange={(e)=> setDocCreateDate(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="due_in_date"
            label="Due Date"
            type="date"
            fullWidth
            variant="standard"
            name='due_in_date'
            value={due_in_date}
            onChange={(e)=> setDueDate(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="invoice_currency"
            label="Invoice Currency"
            type="text"
            fullWidth
            variant="standard"
            name='invoice_currency'
            value={invoice_currency}
            onChange={(e)=> setInvCur(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="document_type"
            label="Document Type"
            type="text"
            fullWidth
            variant="standard"
            name='document_type'
            value={document_type}
            onChange={(e)=> setDocType(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="posting_id"
            label="Posting Id"
            type="text"
            fullWidth
            variant="standard"
            name='posting_id'
            value={posting_id}
            onChange={(e)=> setPostId(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="total_open_amount"
            label="Total Open Amount"
            type="text"
            fullWidth
            variant="standard"
            name='total_open_amount'
            value={total_open_amount}
            onChange={(e)=> setTotOpenAmt(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="baseline_create_date"
            label="Baseline Create Date"
            type="date"
            fullWidth
            variant="standard"
            name='baseline_create_date'
            value={baseline_create_date}
            onChange={(e)=> setBaseCreateDate(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="cust_payment_terms"
            label="Customer Payment Terms"
            type="text"
            fullWidth
            variant="standard"
            name='cust_payment_terms'
            value={cust_payment_terms}
            onChange={(e)=> setCustPayTerms(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="invoice_id"
            label="Invoice Id"
            type="text"
            fullWidth
            variant="standard"
            name='invoice_id'
            value={invoice_id}
            onChange={(e)=> setInvId(e.target.value)}
          />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} style={{color:'white'}}>Submit</Button>
          <Button onClick={onClose} style={{color:'white'}}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}