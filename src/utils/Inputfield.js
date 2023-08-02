import React from 'react'

const Input=(props)=>{
    const {placeholder,type,Icon,setvalue} = props
    return(
        <>
        <div className=" input_box mt-4 mb-4 p-2 w-full border-2 border-neutral-100 rounded-lg outline-none flex">
        <label style={{ color: "#032541" }}>
          <Icon />
        </label>
        <input
          className="outline-none pl-2 w-full"
          placeholder={placeholder}
          type={type}
          onChange={(e)=>setvalue(e.target.value)}
        /> 
      </div>
        </>
    )
}

export default Input;