import React from "react";
import Input from '../../app/components/SingleInput';

export const renderFields = (schema) => {

  console.log(schema)

    const fields = schema.map(field => {
      console.log(field)
        return <Input
                    name={field.name}
                    id={field.name}
                    placeholder={field.placeholder}
                    type={field.inputType}
                    value={field.value}
                    title={field.label}
                    onChange={field.onChange}
                    // onBlur={props.blurFunc}
                    // onFocus={props.focusFunc}
                    />
    })
    return fields;
  
  }
  
