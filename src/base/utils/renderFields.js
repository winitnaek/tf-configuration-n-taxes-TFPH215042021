import React from "react";
import Input from '../../app/components/SingleInput';
import Select from '../../app/components/Select';

export const renderFields = (schema) => {

  console.log(schema)

    const fields = schema.map(field => {
      switch(field.type) {
        case"text": 
        return <Input
                    name={field.name}
                    id={field.name}
                    placeholder={field.placeholder}
                    type={field.type}
                    value={field.value}
                    title={field.label}
                    onChange={field.onChange} 
                    />
          break;
          case "select":
            console.log(field.value)
            case "select":
              return (
                <Select
                  name={field.name}
                  id={field.name}
                  placeholder={field.placeholder}
                  type={field.type}
                  value={field.value}
                  title={field.label}
                  onChange={field.onChange}
                  options={field.options}
                  onChange={field.onChange}
                />
              );
              break;
          default:
           return ( <Input
            name={field.name}
            id={field.name}
            placeholder={field.placeholder}
            type={field.type}
            value={field.value}
            title={field.label}
            onChange={field.onChange}
            options={field.options}
            />
           )
      }

    })
    console.log(fields)
    return fields;
  
  }
  
