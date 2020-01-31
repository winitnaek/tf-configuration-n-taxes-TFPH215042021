export const schema = {
  definitions: {
    Type: {
      title: "Type  ",
      type: "string",
      anyOf: [
        {
          type: "string",
          enum: ["customEarning"],
          title: "Custom Earning"
        },
        {
          type: "string",
          enum: ["customBenefitPlan"],
          title: "Custom Benefit Plan"
        }
      ]
    },
    Taxability: {
      title: "Type  ",
      type: "string",
      anyOf: [
        {
          type: "string",
          enum: ["taxable"],
          title: "Taxable"
        },
        {
          type: "string",
          enum: ["nonTaxable"],
          title: "Non-Taxable"
        }
      ]
    }
  },
  title: "Custom Payments",
  type: "object",
  required: ["code", "name"],
  properties: {
    code: { type: "string", title: "Code", default: "" },

    currentType: {
      $ref: "#/definitions/Type",
      title: "Type",
      default: ""
    },
    name: { type: "string", title: "Name", default: "" },
    currentTaxability: {
      $ref: "#/definitions/Taxability",
      title: "Taxability",
      default: ""
    },
    maximumLimit: { type: "string", title: "Maximum Limit", default: "0.00" }
  },
  title2: "Custom Earnings Details"
};

function ObjectFieldTemplate(props) {
  console.log(props);
  return (
    <div>
     <span style={{fontWeight: "bold"}} >  {props.title}  </span> 
      {props.description}
      {props.properties.map((element, index) => {
        if (index < 3) {
          return <div style={{marginTop: "10px"}} className="property-wrapper">{element.content}</div>;
        }
      })}

      <hr />
      <span style={{fontWeight: "bold"}} >  Custom Earnings Details </span> 

      {props.properties.map((element, index) => {
        console.log(element.name);
        if (
          element.name === "currentTaxability" ||
          element.name === "maximumLimit"
        ) {
          return <div style={{marginTop: "10px"}} className="property-wrapper">{element.content}</div>;
        }
      })}
    </div>
  );
}

export const uiSchema = {
  "ui:ObjectFieldTemplate": ObjectFieldTemplate
};
