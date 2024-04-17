import React, { useState } from 'react'
import category from './Category'
import axios from 'axios'

const AddCategory = () => {
    const [category, setCategory] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post({category})
        .then(result => console.log(result.data))
        .catch(err => console.log(err))
    }
  return (
    <div >
        <div className='bg-white mx-10 d-flex justify-content-center align-items-center h-75 Category'>
    <div className='p-3 rounded w-25 border border-success mb-2'>
            <h2>Add Category</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='Category'><strong>Category:</strong></label>
                <input type='Category' name='Category' placeholder='Enter Category' 
                onChange={(e) => setCategory(e.target.value)} className='form-control rounded-0'/>
            </div>
          

            <button className='btn btn-outline-secondary w-100 rounded-20 mb-2' >Add Category</button>
            
        </form>
        
    </div>    
    </div>
    </div>
  )
}

export default AddCategory