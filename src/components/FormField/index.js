import React from 'react'

export default function FormField ({ label, type, name, value, onChange }) {
    return (
      <div>
        <label>
          {label}: 
          {type === 'textarea' ? 
            <textarea
            type="text"
            value={value}
            name={name}
            onChange={onChange}
          /> :
          <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
          />        
        }
        </label>
      </div>
    )
}