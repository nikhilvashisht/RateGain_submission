import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function FormCreator() {
  const [formFields, setFormFields] = useState([]);
  const [generatedFormHtml, setGeneratedFormHtml] = useState("");

  const addField = (type) => {
    const newField = { type, id: Date.now() };
    setFormFields([...formFields, newField]);
  };

  const generateFormCode = () => {
    let formHtml = '<form action="/submit-form" method="post">\n';
    formFields.forEach((field) => {
      switch (field.type) {
        case "text":
          formHtml += `  <input type="text" name="${field.id}" placeholder="Enter text"/><br />\n`;
          break;
        case "number":
          formHtml += `  <input type="number" name="${field.id}" placeholder="Enter number"/><br />\n`;
          break;
        // Add other field types and customization here
        default:
          break;
      }
    });
    formHtml += '  <input type="submit" value="Submit" />\n</form> \n';
    setGeneratedFormHtml(formHtml);
  };

  return (
    <div>
      <h2>Create Your Form</h2>
      {formFields.map((field) => (
        <div key={field.id} className="p-2 rounded-md">
          {field.type} field (ID: {field.id})
        </div>
      ))}
      <button onClick={() => addField("text")}>Add Text Field</button>
      <button onClick={() => addField("number")}>Add Number Field</button>
      {/* Add more buttons for different field types */}
      <button onClick={generateFormCode}>Generate Form</button>
      <h3>Generated Form HTML:</h3>
      <textarea
        value={generatedFormHtml}
        readOnly
        style={{ width: "100%", height: "200px" }}
      />
    </div>
  );
}

export default FormCreator;
