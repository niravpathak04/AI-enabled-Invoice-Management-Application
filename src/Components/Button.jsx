import React from "react";
import SearchModal from "./SearchModal";
import DeleteModal from "./DeleteModal";
import AddModal from "./AddModal"
import EditModal from "./EditModal";



export default function Button({advSearch,addData,rowData,rowId,editData,deleteData,normalSearch}){
    const[isOpen, setIsOpen]=React.useState(false)
    const[isOpenDelete,setIsOpenDelete]=React.useState(false)
    const[isOpenAdd, setIsOpenAdd]=React.useState(false)
    const[isOpenEdit, setIsOpenEdit]=React.useState(false)
    
    const[normSearch,setNormSearch]=React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        normalSearch(normSearch)
    }

    const refreshPage=()=>{window.location.reload();}
    // console.log(rowData.business_code)
    return(
        <div className="button-container">
            <button className="button-predict" style={{fontSize:'small'}}>PREDICT</button>
            <button className="button" style={{fontSize:'small'}}>ANALYTICS VIEW</button>
            
            <button onClick={()=> setIsOpen(true)} className="button" style={{fontSize:'x-small',height:'3rem'}}>ADVANCED SEARCH</button>
            <SearchModal open={isOpen} onClose={()=> setIsOpen(false)}  advSearch={advSearch}>
            </SearchModal>
            
            <button onClick={refreshPage} className="button-refresh">re</button>

            <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder='Search Customer Number'
            className='search-field'
            name='cust_number'
            onChange={(e)=> setNormSearch(e.target.value)}
            />
          
            </form>

            <button onClick={()=> setIsOpenAdd(true)} className="button" style={{fontSize:'small',marginLeft:'18px'}}>ADD</button>
            <AddModal open={isOpenAdd} onClose={()=> setIsOpenAdd(false)} addData={addData}>
            </AddModal>

            <button onClick={()=> setIsOpenEdit(true)} className="button" style={{fontSize:'small'}}>EDIT</button>
            <EditModal open={isOpenEdit} onClose={()=> setIsOpenEdit(false)} rowData={rowData} editData={editData} rowId={rowId}>
            </EditModal>

            <button onClick={()=> setIsOpenDelete(true)} className="button" style={{fontSize:'small'}}>DELETE</button>
            <DeleteModal open={isOpenDelete} onClose={()=> setIsOpenDelete(false)} rowData={rowData} rowId={rowId} deleteData={deleteData}>
            </DeleteModal>
        </div>
    )
}
