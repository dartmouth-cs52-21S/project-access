/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-fallthrough */
/* eslint-disable prefer-const */
/* eslint-disable no-case-declarations */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import './input_resume_style.scss';
import { useForm } from 'react-hook-form';
import { getUserResume, updateUserResume } from '../actions';

function InputResume(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [name, setName] = useState({ name: '' });
  const [phone, setPhone] = useState({ phone: '' });
  const [email, setEmail] = useState({ email: '' });
  const [linkedIn, setLinkedIn] = useState({ linkedIn: '' });
  const [education, setEd] = useState({
    college: '', gpa: '', degree: '', relevantCoursework: '',
  });
  const [research, setResearch] = useState([{
    researchLab: '', startdate: '', enddate: '', position: '', description: '',
  }]);

  useEffect(() => {
    props.getUserResume();
  });

  const updateName = (value) => {
    setName({ ...name, name: value });
  };

  const updatePhone = (value) => {
    setPhone({ ...phone, phone: value });
  };

  const updateEmail = (value) => {
    setEmail({ ...email, email: value });
  };

  const updateLinkedIn = (value) => {
    setLinkedIn({ ...linkedIn, linkedIn: value });
  };

  const updateEduc = (fieldIdx, value) => {
    switch (fieldIdx) {
      case 'college':
        setEd({ ...education, college: value });
        break;
      case 'gpa':
        setEd({ ...education, gpa: value });
        break;
      case 'degree':
        setEd({ ...education, degree: value });
        break;
      case 'relevantCoursework':
        setEd({ ...education, relevantCoursework: value });
        break;
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

  const submitresume = (event) => {
    console.log('resumeFields', event);
    props.updateUserResume(event);
  };

  return (
    <form onSubmit={handleSubmit(submitresume)}>
      <div>
        <h2>General Information</h2>
        <input placeholder="Name" className="name" {...register('name', { required: 'your name is required' })} value={name.name} onChange={(event) => { updateName(event.target.value); }} />
        <p>{errors.name?.message}</p>
        <div className="contact-info">
          <input placeholder="Phone" className="text-input" {...register('phone', { required: 'phone number is required', minLength: { value: 9, message: 'invalid phone number' } })} value={phone.phone} onChange={(event) => { updatePhone(event.target.value); }} />
          <p>{errors.phone?.message}</p>
          <input placeholder="Email" className="text-input" {...register('email', { required: 'email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'invalid email address' } })} value={email.email} onChange={(event) => { updateEmail(event.target.value); }} />
          <p>{errors.email?.message}</p>
          <input placeholder="LinkedIn" className="text-input" {...register('linkedIn')} value={linkedIn.linkedIn} onChange={(event) => { updateLinkedIn(event.target.value); }} />
        </div>
      </div>

      <div className="Education">
        <h2>Education</h2>
        <div className="college-gpa">
          <input placeholder="College or University" className="text-input" {...register('college', { required: 'College or University is required' })} value={education.college} onChange={(event) => { updateEduc('college', event.target.value); }} />
          <p>{errors.college?.message}</p>
          <input placeholder="GPA /4.00" className="text-input" type="number" {...register('gpa')} value={education.gpa} onChange={(event) => { updateEduc('gpa', event.target.value); }} />
        </div>
        <div className="flex-column-details">
          <input placeholder="Degree" className="text-input" {...register('degree', { required: 'please input your degree' })} value={education.degree} onChange={(event) => { updateEduc('degree', event.target.value); }} />
          <p>{errors.degree?.message}</p>
          <input placeholder="Relevant Coursework" className="text-input" {...register('relevantCoursework')} value={education.relevantCoursework} onChange={(event) => { updateEduc('relevantCoursework', event.target.value); }} />
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
                <input placeholder="Research Lab" name="researchlab" className="text-input" {...register(`research${index}.researchlab`, { required: 'this field is required' })} value={research[index].researchLab} onChange={(event) => { updateResearch(index, 'researchLab', event.target.value); }} />
                <p>{errors?.[`research${index}`]?.researchlab?.message}</p>
                <div>
                  <input placeholder="Start Date" type="date" className="text-input" {...register(`research${index}.startdate`, { required: 'start date is required' })} value={research[index].startdate} onChange={(event) => { updateResearch(index, 'startdate', event.target.value); }} />
                  <p>{errors?.[`research${index}`]?.startdate?.message}</p>
                  <input placeholder="End Date" type="date" className="text-input" {...register(`research${index}.enddate`, { required: 'end date is required' })} value={research[index].enddate} onChange={(event) => { updateResearch(index, 'enddate', event.target.value); }} />
                  <p>{errors?.[`research${index}`]?.enddate?.message}</p>
                </div>
              </div>
              <div className="flex-column-details">
                <input placeholder="Position" className="text-input" {...register(`research${index}.position`, { required: 'please include your position' })} value={research[index].position} onChange={(event) => { updateResearch(index, 'position', event.target.value); }} />
                <p>{errors?.[`research${index}`]?.position?.message}</p>
                <input placeholder="Description" className="text-input" {...register(`research${index}.description`, { required: 'description required' })} value={research[index].description} onChange={(event) => { updateResearch(index, 'description', event.target.value); }} />
                <p>{errors?.[`research${index}`]?.description?.message}</p>
              </div>
              <div>
                <i className="material-icons" onClick={() => { setResearch([...research.slice(0, index), ...research.slice(index + 1)]); }}>clear</i>
              </div>
            </li>
          );
        })}
      </div>
      <input type="submit" />
    </form>
  );
}
export default connect(null, { updateUserResume, getUserResume })(InputResume);
