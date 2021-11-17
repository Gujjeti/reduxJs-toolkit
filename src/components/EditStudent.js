import React,{useState} from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {  useDispatch } from 'react-redux'
import {addStudent} from './features/actions/studentActions'
import { useHistory } from 'react-router';
const EditStudent = () => {
    const dispatch = useDispatch();
    const history = useHistory();

      const {id} = useParams()
 

    const [studentvalues, setstudentValues] = useState({
        title:'',
        body:'',
      
    })


const handleInputChange = (e) =>{
setstudentValues({
    ...studentvalues,
    [e.target.name] : e.target.value
})
}

const onSubmitForm =  async (e) =>{
    e.preventDefault();
    console.log({...studentvalues, id:uuidv4()});
    await dispatch(addStudent({...studentvalues, id:uuidv4()}));

    setstudentValues({
         title:'',
        body:'',
      
    })

    history.push('/');

    }


    return (
         <div className="container-fluid mt-3">
          <div className="row justify-content-end">
               <div className="col-md-2">
                   <NavLink to="/" className="btn btn-primary d-block">Go Back to home</NavLink>
               </div>
          </div>
            <div className="row mt-3">
                <div className="col-md-12">
                            <div className="card">
  <div className="card-header">
    Edit Student
  </div>
  <div className="card-body">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <form onSubmit={(e) => onSubmitForm(e)}>
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input type="text" value={studentvalues.title} name="title" onChange={(e) => handleInputChange(e)} className="form-control" />
  </div>

   <div className="mb-3">
    <label  className="form-label">Body</label>
    <input   type="text" value={studentvalues.body} name="body" onChange={(e) => handleInputChange(e)} className="form-control" />
  </div>

  

 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            </div>
        </div>
    </div>
  </div>
</div>
                </div>

  
  </div>
</div>

    )
}

export default EditStudent
