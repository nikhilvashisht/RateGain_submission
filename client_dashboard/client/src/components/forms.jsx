import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FormCreator = () => {
  const [formFields, setFormFields] = useState([]);
  const [generatedFormHtml, setGeneratedFormHtml] = useState("");

  const addField = (id, type, question, tag) => {
    const newField = { id: id, type: type, question: question, tag: tag };
    setFormFields([...formFields, newField]);
  };

  const generateFormCode = () => {
    let formHtml = '<form action="/submit-form" method="post">\n';
    formFields.forEach((field) => {
      switch (field.type) {
        case "text":
          formHtml += ` <p> ${field.question} </p> \n`;
          formHtml += `  <input type="text" name="${field.id}" id ="${field.tag}"/><br />\n`;
          break;
        case "number":
          formHtml += ` <p> ${field.question} </p> \n`;
          formHtml += `  <input type="number" name="${field.id}"  id ="${field.tag}"/><br />\n`;
          break;
        // Add other field types and customization here
        default:
          break;
      }
    });
    formHtml += " \n</form>\n";
    formHtml += ` Post your data to : http://api.v2.com/${uuidv4()} \n `;
    setGeneratedFormHtml(formHtml);
    console.log(formHtml);
  };

  function setQuestion(id, question) {
    var targetIndex = formFields.findIndex((field) => field.id === id);
    formFields[targetIndex].question = question;
  }

  function setTag(id, tag) {
    var targetIndex = formFields.findIndex((field) => field.id === id);
    formFields[targetIndex].tag = tag;
  }

  function resetForm() {
    setFormFields([]);
    setGeneratedFormHtml("");
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-dark">Create Your Form</h2>
      {formFields.map((field) => (
        <div className="flex p-2 text-brand-dark" key={field.id}>
          <p className="block p-1">
            {field.type} field (ID : {field.id})
          </p>
          <input
            className="bg-white text-brand-dark rounded-lg m-1 p-2 shadow-lg"
            placeholder="Enter your question"
            onChange={(e) => setQuestion(field.id, e.target.value)}
          ></input>
          <input
            className="bg-white text-brand-dark rounded-lg m-1 p-2 shadow-lg"
            placeholder="Enter the question tag"
            onChange={(e) => setTag(field.id, e.target.value)}
          ></input>
        </div>
        // <div key={field.id} className="p-2 rounded-md ">
        //   {field.type} field (ID: {field.id})
        // </div>
      ))}
      <button
        className="rounded-lg bg-brand-white text-brand-dark p-2 mx-1 font-bold shadow-lg"
        onClick={() => addField(Date.now(), "text", "", "")}
      >
        Add Text Field
      </button>
      <button
        className="rounded-lg bg-brand-white text-brand-dark p-2 mx-1 font-bold shadow-lg"
        onClick={() => addField(Date.now(), "number", "", "")}
      >
        Add Number Field
      </button>
      {/* Add more buttons for different field types */}
      <button
        className="rounded-lg bg-brand-white text-brand-dark p-2 mx-1 font-bold shadow-lg"
        onClick={generateFormCode}
      >
        Generate Form
      </button>
      <button
        className="rounded-lg bg-brand-white text-brand-dark p-2 mx-1 font-bold shadow-lg"
        onClick={resetForm}
      >
        Reset
      </button>
      <h3 className="my-3 font-bold text-xl text-brand-dark">Generated Form HTML:</h3>
      <pre
        className="bg-brand-dark text-brand-white p-3 rounded-lg"
        onClick={() => {
          navigator.clipboard.writeText(this.state.textToCopy);
          alert("Code copied!");
        }}
      >
        <code>{generatedFormHtml}</code>
      </pre>
    </div>
  );
};

export default FormCreator;
