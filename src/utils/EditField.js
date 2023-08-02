import React from "react";

const EditField = (props) => {
  const { name, type, placeholder, setvalue,value } = props;
  return (
    <div>
      <div>
        <label>{name}</label>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => setvalue(e.target.value)}
       defaultValue={value}
      />
    </div>
  );
};

export default EditField;
