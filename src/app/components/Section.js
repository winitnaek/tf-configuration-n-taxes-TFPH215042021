import React from "react";
import { tftools } from "../../base/constants/TFTools";
import { Button } from "reactstrap";

export const Section = ({ sectionHeader, section, value, onClick }) => {
  return (
    <div>
      <p className="mb-1 mt-2">{sectionHeader}</p>
      {tftools.map(tool => {
        return (value === tool.value && section === tool.section) || (!section && value === tool.value) ? (
            <Button
              color="link"
              onClick={() =>
                tool.type === "externallink" && tool.href ? window.open(tool.href, "_blank") : onClick(tool.id)
              }
              className="d-block p-0"
            >
              {tool.label}
            </Button>
        ) : null;
      })}
    </div>
  );
};
