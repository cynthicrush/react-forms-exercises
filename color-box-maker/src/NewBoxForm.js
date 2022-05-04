import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

function NewBoxForm({ createBox }) {
    const [formData, setFormData] = useState({
        height: '',
        width: '',
        backgroundColor: '',
    })

    const handleChange = evt => {
        const { name, value } = evt.target
        setFormData(formData => ({...formData, [name]: value}))
    }

    const allInput = evt => {
        evt.preventDefault();
        createBox({...formData, id: uuid()})
        setFormData({ 
            height: '',
            width: '',
            backgroundColor: '' 
        })
    }

    return(
        <div>
            <form onSubmit={allInput}>
                <div>
                    <label htmlFor='height'>Height</label>
                    <input 
                        type='text' 
                        name='height' 
                        id='height' 
                        value={formData.height}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='width'>Width</label>
                    <input 
                        type='text' 
                        name='width' 
                        id='width' 
                        value={formData.width}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='backgroundColor'>Background Color</label>
                    <input 
                        type='text' 
                        name='backgroundColor' 
                        id='backgroundColor' 
                        value={formData.backgroundColor}
                        onChange={handleChange}
                    />
                </div>
                <button id='addBoxBtn'>Add Box</button>
            </form>
        </div>
    )
}

export default NewBoxForm;