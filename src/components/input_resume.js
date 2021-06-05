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
import { fetchPortfolio, updatePortfolio, fetchPortfolios } from '../actions';
import 'regenerator-runtime/runtime';

function InputResume(props) {
  const {
    register, handleSubmit, formState: { errors }, unregister,
  } = useForm();

  // const [name, setName] = useState({ name: '' });
  // const [phone, setPhone] = useState({ phone: '' });
  // const [email, setEmail] = useState({ email: '' });
  // const [role, setRole] = useState({ role: '' });
  // const [about, setAbout] = useState({ about: '' });
  // const [linkedIn, setLinkedIn] = useState({ linkedIn: '' });
  // const [education, setEd] = useState({
  //   college: '', gpa: '', degree: '', relevantCoursework: '',
  // });
  // const [research, setResearch] = useState([{
  //   researchlab: '', startdate: '', enddate: '', position: '', description: '',
  // }]);
  // const [work, setWork] = useState([{
  //   company: '', startdate: '', enddate: '', position: '', description: '',
  // }]);
  // const [projects, setProjects] = useState([{
  //   project: '', startdate: '', enddate: '', description: '',
  // }]);
  // const [skills, setSkills] = useState([{
  //   technical: '', languages: '',
  // }]);

  useEffect(() => {
    if (props.match.params.id) {
      props.fetchPortfolio(props.match.params.id);
      props.fetchPortfolios();
      console.log(props.match.params.id);
    }
  }, [props.match.params.id]);

  const [name, setName] = useState({ name: props.curr?.resume?.event?.name });
  const [phone, setPhone] = useState({ phone: props.curr?.resume?.event?.phone });
  const [email, setEmail] = useState({ email: props.curr?.resume?.event?.email });
  const [role, setRole] = useState({ role: props.curr?.resume?.event?.role });
  const [about, setAbout] = useState({ about: props.curr?.resume?.event?.about });
  const [linkedIn, setLinkedIn] = useState({ linkedIn: props.curr?.resume?.event?.linkedIn });

  const [education, setEd] = useState({
    college: props.curr?.resume?.event?.college,
    gpa: props.curr?.resume?.event?.gpa,
    degree: props.curr?.resume?.event?.degree,
    relevantCoursework: props.curr?.resume?.event?.relevantCoursework,
  });

  let savedresearch = [];
  for (let i = 0; props.curr?.resume?.event?.[`research${i}`] !== undefined; i += 1) {
    savedresearch = [...savedresearch, props.curr?.resume?.event?.[`research${i}`]];
  }
  const [research, setResearch] = useState(savedresearch);

  let savedwork = [];
  for (let i = 0; props.curr?.resume?.event?.[`work${i}`] !== undefined; i += 1) {
    savedwork = [...savedwork, props.curr?.resume?.event?.[`work${i}`]];
  }
  const [work, setWork] = useState(savedwork);

  let savedprojects = [];
  for (let i = 0; props.curr?.resume?.event?.[`projects${i}`] !== undefined; i += 1) {
    savedprojects = [...savedprojects, props.curr?.resume?.event?.[`projects${i}`]];
  }
  const [projects, setProjects] = useState(savedprojects);

  let savedtechnical = [];
  for (let i = 0; props.curr?.resume?.event?.[`technical${i}`] !== undefined; i += 1) {
    savedtechnical = [...savedtechnical, props.curr?.resume?.event?.[`technical${i}`]];
  }
  const [technical, setTechnical] = useState(savedtechnical);

  let savedlanguage = [];
  for (let i = 0; props.curr?.resume?.event?.[`language${i}`] !== undefined; i += 1) {
    savedlanguage = [...savedlanguage, props.curr?.resume?.event?.[`language${i}`]];
  }
  const [language, setLanguage] = useState(savedlanguage);

  useEffect(() => {
    setName({ name: props.curr?.resume?.event?.name });
    setPhone({ phone: props.curr?.resume?.event?.phone });
    setEmail({ email: props.curr?.resume?.event?.email });
    setRole({ role: props.curr?.resume?.event?.role });
    setAbout({ about: props.curr?.resume?.event?.about });
    setLinkedIn({ linkedIn: props.curr?.resume?.event?.linkedIn });

    setEd({
      college: props.curr?.resume?.event?.college,
      gpa: props.curr?.resume?.event?.gpa,
      degree: props.curr?.resume?.event?.degree,
      relevantCoursework: props.curr?.resume?.event?.relevantCoursework,
    });

    savedresearch = [];
    for (let i = 0; props.curr?.resume?.event?.[`research${i}`] !== undefined; i += 1) {
      savedresearch = [...savedresearch, props.curr?.resume?.event?.[`research${i}`]];
    }
    setResearch(savedresearch);

    savedwork = [];
    for (let i = 0; props.curr?.resume?.event?.[`work${i}`] !== undefined; i += 1) {
      savedwork = [...savedwork, props.curr?.resume?.event?.[`work${i}`]];
    }
    setWork(savedwork);

    savedprojects = [];
    for (let i = 0; props.curr?.resume?.event?.[`projects${i}`] !== undefined; i += 1) {
      savedprojects = [...savedprojects, props.curr?.resume?.event?.[`projects${i}`]];
    }
    setProjects(savedprojects);

    savedtechnical = [];
    for (let i = 0; props.curr?.resume?.event?.[`technical${i}`] !== undefined; i += 1) {
      savedtechnical = [...savedtechnical, props.curr?.resume?.event?.[`technical${i}`]];
    }
    setTechnical(savedtechnical);

    savedlanguage = [];
    for (let i = 0; props.curr?.resume?.event?.[`language${i}`] !== undefined; i += 1) {
      savedlanguage = [...savedlanguage, props.curr?.resume?.event?.[`language${i}`]];
    }
    setLanguage(savedlanguage);
  }, [props.curr]);

  const getFolio = async (id) => {
    await props.fetchPortfolio(id);
    console.log(id);
    console.log(props.curr);
  };

  const updateName = (value) => {
    setName({ ...name, name: value });
  };

  const updatePhone = (value) => {
    setPhone({ ...phone, phone: value });
  };

  const updateEmail = (value) => {
    setEmail({ ...email, email: value });
  };

  const updateRole = (value) => {
    setRole({ ...role, role: value });
  };

  const updateAbout = (value) => {
    setAbout({ ...about, about: value });
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
      case 'researchlab':
        let temp = research[index];
        temp.researchlab = value;
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

  const updateWork = (index, fieldIdx, value) => {
    switch (fieldIdx) {
      case 'company':
        let temp = work[index];
        temp.company = value;
        setWork([...work.slice(0, index), temp, ...work.slice(index + 1)]);
        break;
      case 'startdate':
        let temp1 = work[index];
        temp1.startdate = value;
        setWork([...work.slice(0, index), temp1, ...work.slice(index + 1)]);
        break;
      case 'enddate':
        let temp2 = work[index];
        temp2.enddate = value;
        setWork([...work.slice(0, index), temp2, ...work.slice(index + 1)]);
        break;
      case 'position':
        let temp3 = work[index];
        temp3.position = value;
        setWork([...work.slice(0, index), temp3, ...work.slice(index + 1)]);
        break;
      case 'description':
        let temp4 = work[index];
        temp4.description = value;
        setWork([...work.slice(0, index), temp4, ...work.slice(index + 1)]);
        break;
      default:
        // code block
        break;
    }
  };

  const updateProjects = (index, fieldIdx, value) => {
    switch (fieldIdx) {
      case 'project':
        let temp = projects[index];
        temp.project = value;
        setProjects([...projects.slice(0, index), temp, ...projects.slice(index + 1)]);
        break;
      case 'startdate':
        let temp1 = projects[index];
        temp1.startdate = value;
        setProjects([...projects.slice(0, index), temp1, ...projects.slice(index + 1)]);
        break;
      case 'enddate':
        let temp2 = projects[index];
        temp2.enddate = value;
        setProjects([...projects.slice(0, index), temp2, ...projects.slice(index + 1)]);
        break;
      case 'description':
        let temp4 = projects[index];
        temp4.description = value;
        setProjects([...projects.slice(0, index), temp4, ...projects.slice(index + 1)]);
        break;
      default:
        // code block
        break;
    }
  };

  const updateTechnical = (index, value) => {
    let temp = technical[index];
    temp.technical = value;
    setTechnical([...technical.slice(0, index), temp, ...technical.slice(index + 1)]);
  };

  const updateLanguage = (index, value) => {
    let temp1 = language[index];
    temp1.language = value;
    setLanguage([...language.slice(0, index), temp1, ...language.slice(index + 1)]);
  };

  const submitform = (event) => {
    props.updatePortfolio(props.match.params.id, {
      resume: {
        event,
      },
    });
    props.history.push(`/portfolios/edit/style/${props.match.params.id}`);
  };

  const folioOptions = () => {
    let folios = 'No Portfolios Available';
    if (Object.keys(props.all).length !== 0) {
      let fs = props.all.map((pfolio, index) => {
        return (
          <button key={index} type="button" className="dropdown-item" onClick={() => { getFolio(pfolio._id); }}>
            {pfolio.name}
          </button>
        );
      });
      folios = (
        <div className="dropdown" id="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Portfolios
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            {fs}
          </div>
        </div>
      );
    }
    return (
      folios
    );
  };

  return (
    <form onSubmit={handleSubmit(submitform)}>
      <h1 className="title">Resume Information</h1><br />
      <div>
        <h2>Select an Existing Portfolio</h2>
        {folioOptions()}
      </div><br />

      <div>
        <h2>General Information</h2>
        <input placeholder="Name" className="name" {...register('name')} value={name.name} onChange={(event) => { updateName(event.target.value); }} />
        <p>{errors.name?.message}</p>
        <div className="contact-info">
          <input placeholder="Phone" className="text-input" {...register('phone')} value={phone.phone} onChange={(event) => { updatePhone(event.target.value); }} />
          <p>{errors.phone?.message}</p>
          <input placeholder="Email" className="text-input" {...register('email')} value={email.email} onChange={(event) => { updateEmail(event.target.value); }} />
          <p>{errors.email?.message}</p><br />
          <input placeholder="Current Role" className="text-input" {...register('role')} value={role.role} onChange={(event) => { updateRole(event.target.value); }} />
          <p>{errors.role?.message}</p>
          <input placeholder="Please describe yourself" id="bigtext" className="text-input" {...register('about')} value={about.about} onChange={(event) => { updateAbout(event.target.value); }} />
          <p>{errors.about?.message}</p>
          <input placeholder="LinkedIn" className="text-input" {...register('linkedIn')} value={linkedIn.linkedIn} onChange={(event) => { updateLinkedIn(event.target.value); }} />
        </div>
      </div><br />

      <div className="Education">
        <h2>Education</h2>
        <div className="college">
          <input placeholder="College or University" className="text-input" {...register('college')} value={education.college} onChange={(event) => { updateEduc('college', event.target.value); }} />
          <p>{errors.college?.message}</p>
          <input placeholder="GPA /4.00" className="text-input" type="number" {...register('gpa')} value={education.gpa} onChange={(event) => { updateEduc('gpa', event.target.value); }} />
          <p />
          <input placeholder="Degree" className="text-input" {...register('degree')} value={education.degree} onChange={(event) => { updateEduc('degree', event.target.value); }} />
          <p>{errors.degree?.message}</p>
          <input placeholder="Relevant Coursework" className="text-input" {...register('relevantCoursework')} value={education.relevantCoursework} onChange={(event) => { updateEduc('relevantCoursework', event.target.value); }} />
        </div>
      </div><br />

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
                <input placeholder="Research Lab" name="researchlab" className="text-input" {...register(`research${index}.researchlab`)} value={research[index].researchlab} onChange={(event) => { updateResearch(index, 'researchlab', event.target.value); }} />
                <p>{errors?.[`research${index}`]?.researchlab?.message}</p>
                <div>
                  <input placeholder="Start Date" type="date" className="text-input" {...register(`research${index}.startdate`)} value={research[index].startdate} onChange={(event) => { updateResearch(index, 'startdate', event.target.value); }} />
                  <p>{errors?.[`research${index}`]?.startdate?.message}</p>
                  <input placeholder="End Date" type="date" className="text-input" {...register(`research${index}.enddate`)} value={research[index].enddate} onChange={(event) => { updateResearch(index, 'enddate', event.target.value); }} />
                  <p>{errors?.[`research${index}`]?.enddate?.message}</p>
                </div>
              </div>
              <div className="flex-column-details">
                <input placeholder="Position" className="text-input" {...register(`research${index}.position`)} value={research[index].position} onChange={(event) => { updateResearch(index, 'position', event.target.value); }} />
                <p>{errors?.[`research${index}`]?.position?.message}</p>
                <input placeholder="Description" id="bigtext" className="text-input" {...register(`research${index}.description`)} value={research[index].description} onChange={(event) => { updateResearch(index, 'description', event.target.value); }} />
                <p>{errors?.[`research${index}`]?.description?.message}</p>
              </div>
              <div>
                <i className="material-icons" onClick={() => { setResearch([...research.slice(0, index), ...research.slice(index + 1)]); unregister(`research${index}`); }}>clear</i>
              </div>
            </li>
          );
        })}
      </div><br />

      <div className="Work">
        <div className="section-title">
          <h2>Work Experience</h2>
          <i className="material-icons"
            onClick={() => {
              setWork([...work, {
                company: '', startdate: '', enddate: '', position: '', description: '',
              }]);
            }}
          >add_circle
          </i>
        </div>
        {work.map((object, index) => {
          return (
            <li key={index}>
              <div className="name-and-time">
                <input placeholder="Company Name" name="company" className="text-input" {...register(`work${index}.company`)} value={work[index].company} onChange={(event) => { updateWork(index, 'company', event.target.value); }} />
                <p>{errors?.[`work${index}`]?.company?.message}</p>
                <div>
                  <input placeholder="Start Date" type="date" className="text-input" {...register(`work${index}.startdate`)} value={work[index].startdate} onChange={(event) => { updateWork(index, 'startdate', event.target.value); }} />
                  <p>{errors?.[`work${index}`]?.startdate?.message}</p>
                  <input placeholder="End Date" type="date" className="text-input" {...register(`work${index}.enddate`)} value={work[index].enddate} onChange={(event) => { updateWork(index, 'enddate', event.target.value); }} />
                  <p>{errors?.[`work${index}`]?.enddate?.message}</p>
                </div>
              </div>
              <div className="flex-column-details">
                <input placeholder="Position" className="text-input" {...register(`work${index}.position`)} value={work[index].position} onChange={(event) => { updateWork(index, 'position', event.target.value); }} />
                <p>{errors?.[`work${index}`]?.position?.message}</p>
                <input placeholder="Description" id="bigtext" className="text-input" {...register(`work${index}.description`)} value={work[index].description} onChange={(event) => { updateWork(index, 'description', event.target.value); }} />
                <p>{errors?.[`work${index}`]?.description?.message}</p>
              </div>
              <div>
                <i className="material-icons" onClick={() => { setWork([...work.slice(0, index), ...work.slice(index + 1)]); unregister(`work${index}`); }}>clear</i>
              </div>
            </li>
          );
        })}
      </div><br />

      <div className="Projects">
        <div className="section-title">
          <h2>Projects</h2>
          <i className="material-icons"
            onClick={() => {
              setProjects([...projects, {
                project: '', startdate: '', enddate: '', description: '',
              }]);
            }}
          >add_circle
          </i>
        </div>
        {projects.map((object, index) => {
          return (
            <li key={index}>
              <div className="name-and-time">
                <input placeholder="Project" name="project" className="text-input" {...register(`projects${index}.project`)} value={projects[index].project} onChange={(event) => { updateProjects(index, 'project', event.target.value); }} />
                <p>{errors?.[`projects${index}`]?.project?.message}</p>
                <div>
                  <input placeholder="Start Date" type="date" className="text-input" {...register(`projects${index}.startdate`)} value={projects[index].startdate} onChange={(event) => { updateProjects(index, 'startdate', event.target.value); }} />
                  <p>{errors?.[`projects${index}`]?.startdate?.message}</p>
                  <input placeholder="End Date" type="date" className="text-input" {...register(`projects${index}.enddate`)} value={projects[index].enddate} onChange={(event) => { updateProjects(index, 'enddate', event.target.value); }} />
                  <p>{errors?.[`projects${index}`]?.enddate?.message}</p>
                </div>
              </div>
              <div className="flex-column-details">
                <input placeholder="Description" id="bigtext" className="text-input" {...register(`projects${index}.description`)} value={projects[index].description} onChange={(event) => { updateProjects(index, 'description', event.target.value); }} />
                <p>{errors?.[`projects${index}`]?.description?.message}</p>
              </div>
              <div>
                <i className="material-icons" onClick={() => { setProjects([...projects.slice(0, index), ...projects.slice(index + 1)]); unregister(`projects${index}`); }}>clear</i>
              </div>
            </li>
          );
        })}
      </div><br />

      <div className="technical">
        <div className="section-title">
          <h2>Technical Skills</h2>
          <i className="material-icons"
            onClick={() => {
              setTechnical([...technical, {
                technical: '',
              }]);
            }}
          >add_circle
          </i>
        </div>
        {technical.map((object, index) => {
          return (
            <li key={index}>
              <div className="name-and-time">
                <input placeholder="Technical Skills" name="technical" className="text-input" {...register(`technical${index}.technical`)} value={technical[index].technical} onChange={(event) => { updateTechnical(index, event.target.value); }} />
                <p>{errors?.[`technical${index}`]?.technical?.message}</p>
              </div>
              <div>
                <i className="material-icons" onClick={() => { setTechnical([...technical.slice(0, index), ...technical.slice(index + 1)]); unregister(`technical${index}`); }}>clear</i>
              </div>
            </li>
          );
        })}
      </div><br />

      <div className="language">
        <div className="section-title">
          <h2>Languages</h2>
          <i className="material-icons"
            onClick={() => {
              setLanguage([...language, {
                language: '',
              }]);
            }}
          >add_circle
          </i>
        </div>
        {language.map((object, index) => {
          return (
            <li key={index}>
              <div className="name-and-time">
                <input placeholder="Languages" name="language" className="text-input" {...register(`language${index}.language`)} value={language[index].language} onChange={(event) => { updateLanguage(index, event.target.value); }} />
                <p>{errors?.[`language${index}`]?.language?.message}</p>
              </div>
              <div>
                <i className="material-icons" onClick={() => { setLanguage([...language.slice(0, index), ...language.slice(index + 1)]); unregister(`language${index}`); }}>clear</i>
              </div>
            </li>
          );
        })}
      </div><br />

      <input type="submit" />
    </form>
  );
}
function mapStateToProps(reduxState) {
  return {
    all: reduxState.portfolio.all,
    curr: reduxState.portfolio.current,
  };
}
export default connect(mapStateToProps, { fetchPortfolio, updatePortfolio, fetchPortfolios })(InputResume);
