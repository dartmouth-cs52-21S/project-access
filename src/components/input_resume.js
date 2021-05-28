/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-fallthrough */
/* eslint-disable prefer-const */
/* eslint-disable no-case-declarations */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './input_resume_style.scss';
// import { useFieldArray, useForm } from 'react-hook-form';

function InputResume() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [linkedln, setLinkedln] = useState('');

  const [education, setEd] = useState({
    college: '', gpa: '', degree: '', relevantCoursework: '',
  });
  const [research, setResearch] = useState([{
    researchLab: '', startdate: '', enddate: '', position: '', description: '',
  }]);

  const updateName = (value) => {
    setName({ ...name, name: value });
  };

  const updatePhone = (value) => {
    setPhone({ ...phone, phone: value });
  };

  const updateEmail = (value) => {
    setEmail({ ...email, email: value });
  };

  const updateLinkedln = (value) => {
    setLinkedln({ ...linkedln, linkedln: value });
  };

  const updateEduc = (fieldIdx, value) => {
    switch (fieldIdx) {
      case 'college':
        setEd({ ...education, college: value });
      case 'gpa':
        setEd({ ...education, gpa: value });
      case 'degree':
        setEd({ ...education, degree: value });
      case 'relevantCoursework':
        setEd({ ...education, relevantCoursework: value });
      default:
        // code block
        break;
    }
  };

  const updateResearch = (index, fieldIdx, value) => {
    switch (fieldIdx) {
      case 'researchLab':
        let temp = research[index];
        temp.researchLab = value;
        setResearch([...research.slice(0, index), temp, ...research.slice(index + 1)]);
        break;
      case 'startdate':
        let temp1 = research[index];
        temp1.startdate = value;
        setResearch([...research.slice(0, index), temp1, ...research.slice(index + 1)]);
        break;
      case 'enddate':
        let temp2 = research[index];
        temp2.enddate = value;
        setResearch([...research.slice(0, index), temp2, ...research.slice(index + 1)]);
        break;
      case 'position':
        let temp3 = research[index];
        temp3.position = value;
        setResearch([...research.slice(0, index), temp3, ...research.slice(index + 1)]);
        break;
      case 'description':
        let temp4 = research[index];
        temp4.description = value;
        setResearch([...research.slice(0, index), temp4, ...research.slice(index + 1)]);
        break;
      default:
        // code block
        break;
    }
  };

  return (
    <form>
      <div>
        <h2>General Information</h2>
        <input placeholder="Name" className="name" />
        <div className="contact-info">
          <input placeholder="Phone" className="text-input" />
          <input placeholder="Email" className="text-input" />
          <input placeholder="Linkedln" className="text-input" />
        </div>
      </div>

      <div className="Education">
        <h2>Education</h2>
        <div className="college-gpa">
          <input placeholder="College or University" className="text-input" />
          <input placeholder="GPA /4.00" className="text-input" />
        </div>
        <div className="flex-column-details">
          <input placeholder="Degree" className="text-input" />
          <input placeholder="Relevant Coursework" className="text-input" />
        </div>
      </div>

      <div className="Research">
        <div className="section-title">
          <h2>Research</h2>
          <i className="material-icons"
            onClick={() => {
              setResearch([...research, {
                researchLab: '', startdate: '', enddate: '', position: '', description: '',
              }]);
            }}
          >add_circle
          </i>
        </div>
        {research.map((object, index) => {
          return (
            <li key={index}>
              <div className="name-and-time">
                <input placeholder="Research Lab" className="text-input" value={research[index].researchLab} onChange={(event) => { updateResearch(index, 'researchLab', event.target.value); }} />
                <div>
                  <input placeholder="Start Date" className="text-input" value={research[index].startdate} onChange={(event) => { updateResearch(index, 'startdate', event.target.value); }} />
                  <input placeholder="End Date" className="text-input" value={research[index].enddate} onChange={(event) => { updateResearch(index, 'enddate', event.target.value); }} />
                </div>
              </div>
              <div className="flex-column-details">
                <input placeholder="Position" className="text-input" value={research[index].position} onChange={(event) => { updateResearch(index, 'position', event.target.value); }} />
                <input placeholder="Descripton" className="text-input" value={research[index].description} onChange={(event) => { updateResearch(index, 'description', event.target.value); }} />
              </div>
              <div>
                <i className="material-icons" onClick={() => { console.log(research); }}>clear</i>
              </div>
            </li>
          );
        })}
      </div>
    </form>
  );
}
export default InputResume;
