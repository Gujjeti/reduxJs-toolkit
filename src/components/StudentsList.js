import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactTooltip from 'react-tooltip';
import { NavLink } from 'react-router-dom';
import {fetchAllData} from './features/actions/studentActions'

const StudentsList = () => {

    const {students, loading, error} = useSelector((state) => state.students)

    
    const dispatch = useDispatch();
  

  useEffect(() => {
     dispatch(fetchAllData())
  }, [])

    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-md-12">
                  <div className="card text-center">
  <h5 className="card-header">Students List:</h5>
  <div className="card-body">
    <div className="row justify-content-end">
     <div className="col-2">
         <NavLink to="/addstudent" className="btn btn-primary d-block">Add Student</NavLink>
         
     </div>
       <div className="col-md-3">
            <form className="container-fluid">
    <div className="input-group">
     
      <input type="text" className="form-control" placeholder="Search student here" aria-label="Username" aria-describedby="basic-addon1"/>
       <span className="input-group-text" id="basic-addon1"><i className="bi bi-search"></i></span>
    </div>
  </form>
       </div>
    </div>
   <div className="row mt-1 g-3">
                {loading && (
                   <div className="loader">
                        <div className="spinner-border text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
 
</div>  <span className="loader-text">Loading...</span>
                   </div>
                )}

                {error && (
                  <div className="bg-danger text-white p-5">
                        <h1>{error.name}</h1>
                    <h1>{error.message}</h1>
                    
                  </div>
                )}

                { 
                  students &&  students.map((student, index) =>{
                        return (
                                  <div className="col-md-3" key={index}> 
                   <div className="card shadow-lg">
                   
        {/* <img src={`https://i.pravatar.cc/300?img=${index+1}`}  className="mt-3 rounded-circle " alt=""/> */}
  <div className="card-body">
    <h5 className="card-title m-3">{student.title}</h5>
     <p className="card-text"><i className="bi bi-geo-alt"></i> {student.body}  </p>
    
    <div className="actions-btn d-flex justify-content-between m-4 mb-2 mt-5">
        
   <NavLink to={`/editstudent/${student.id}`} className="card-link" data-tip="Edit Student" data-background-color="#222"><i className="bi bi-pencil-fill"></i></NavLink>
   

     <NavLink to="!#" className="card-link" data-tip="View Student" data-background-color="#222"><i className="bi bi-eye-fill"></i></NavLink>

      <NavLink to="!#" className="card-link" data-tip="Delete Student" data-background-color="#222"><i className="bi bi-trash-fill"></i></NavLink>
        <ReactTooltip />
    </div>
  </div>
</div>
               </div>
                        )
                    })
                }
              

           </div>
    
  </div>
  <div className="card-footer text-muted">
   Updated 2 days ago
  </div>

</div>



                </div>
            </div>
           
        </div>
        
    )
}

export default StudentsList
