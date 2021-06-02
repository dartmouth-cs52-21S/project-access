import axios from 'axios';

const ROOT_URL = 'http://localhost:9090/api';
// const ROOT_URL = 'https://cs52access.herokuapp.com/api';

// keys for actiontypes
export const ActionTypes = {
  CREATE_PORTFOLIO: 'CREATE_PORTFOLIO',
  FETCH_PORTFOLIOS: 'FETCH_PORTFOLIOS',
  FETCH_PORTFOLIO: 'FETCH_PORTFOLIO',
  UPDATE_PORTFOLIO: 'UPDATE_PORTFOLIO',
  DELETE_PORTFOLIO: 'DELETE_PORTFOLIO',
  // ERROR_FETCH_POST: 'ERROR_FETCH_POST',
  FETCH_PROFILE: 'FETCH_PROFILE',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
  ERROR_SET: 'ERROR_SET',
  ERROR_CLEAR: 'ERROR_CLEAR',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  FETCH_TEMPLATES: 'FETCH_TEMPLATES',
  FETCH_RESUME: 'FETCH_RESUME',
  UPDATE_RESUME: 'UPDATE_RESUME',
  // FETCH_USERS: 'FETCH_USERS',
  // FETCH_USER: 'FETCH_USER',
};

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    payload: error.toString(),
  };
}

// const field = {
//   firstName, lastName, email, password, portfolioIds, resume,
// };

// export function createPortfolio(templateId, {
//   firstName, lastName, email, password, portfolioIds, resume, portfolioName,
// }, history) {
export function createPortfolio(templateId, portfolioName, history) {
  return (dispatch) => {
    // axios.post(`${ROOT_URL}/portfolio/${templateId}${firstName}${lastName}`, {
    axios.post(`${ROOT_URL}/portfolios/create/${templateId}`, { portfolioName }, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        console.log('createPortfolio', response.data);
        dispatch({ type: ActionTypes.CREATE_PORTFOLIO, payload: response.data });
        history.push(`/portfolios/edit/resume/${response.data.id}`);
      })
      .catch((error) => {
        console.log('create portfolio error found');
        console.log(error);
      });
  };
}

export function fetchPortfolio(portfolioId) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/portfolios/${portfolioId}`, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_PORTFOLIO, payload: response.data });
        dispatch({ type: ActionTypes.ERROR_CLEAR, payload: '' });
      })
      .catch((error) => {
        console.log('fetch one portfolio error found');
        console.log(error);
        dispatch({ type: ActionTypes.ERROR_SET, payload: error });
      });
  };
}

export function fetchPortfolios() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/portfolios`, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_PORTFOLIOS, payload: response.data });
        dispatch({ type: ActionTypes.ERROR_CLEAR, payload: '' });
      })
      .catch((error) => {
        console.log('fetch portfolios error found');
        console.log(error);
        dispatch({ type: ActionTypes.ERROR_SET, payload: error });
      });
  };
}

export function fetchTemplates() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/templates`, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_TEMPLATES, payload: response.data });
        console.log('fetchtemplates', response.data);
      })
      .catch((error) => {
        console.log('fetch templates error found');
        console.log(error);
        dispatch({ type: ActionTypes.ERROR_SET, payload: error });
      });
  };
}

export function updatePortfolio(portfolioId, portfolioFields) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/portfolios/${portfolioId}`, portfolioFields, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_PORTFOLIO, payload: response.data });
        dispatch({ type: ActionTypes.ERROR_CLEAR, payload: '' });
      })
      .catch((error) => {
        console.log('update portfolio error found');
        console.log(error);
        dispatch({ type: ActionTypes.ERROR_SET, payload: error });
      });
  };
}

export function deletePortfolio(portfolioId, history) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/portfolios/${portfolioId}`, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        dispatch({ type: ActionTypes.DELETE_PORTFOLIO, payload: response.data });
        history.push('/profile');
      })
      .catch((error) => {
        console.log('delete portfolio error found');
        console.log(error);
      });
  };
}

export function getUserResume() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/resume`, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_RESUME, payload: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log('get user resume error found');
        console.log(error);
      });
  };
}

export function updateUserResume(resumeFields) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/resume`, { ...resumeFields }, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        console.log('before resumeFields', { ...resumeFields });
        dispatch({ type: ActionTypes.UPDATE_RESUME, payload: response.data });
        console.log('resumeFields', { ...resumeFields });
      })
      .catch((error) => {
        console.log('put user resume error found');
        console.log(error);
      });
  };
}

export function getUserProfile() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/profile`, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_PROFILE, payload: response.data });
        // history.push('/');
      })
      .catch((error) => {
        console.log('get profile error found');
        console.log(error);
      });
  };
}

export function updateUserProfile(userFields) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/profile`, userFields, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        dispatch({ type: ActionTypes.UPDATE_PROFILE, payload: response.data });
      })
      .catch((error) => {
        console.log('get profile error found');
        console.log(error);
      });
  };
}

export function signinUser({ email, password }, history) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signin endpoint
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password }).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      history.push('/profile');
    }).catch((error) => {
      dispatch(authError('Failed sign in'));
    });
  };
}

export function signupUser({
  firstName, lastName, email, password, resume,
}, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, {
      firstName, lastName, email, password, resume,
    }).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      history.push('/profile');
    }).catch((error) => {
      console.log('errormessage', error.response.data);
      dispatch(authError(`${error.response.data.error.toString()}`));
    });
  };
}

// deletes token from localstorage
// and deauths
export function signoutUser(history) {
  console.log('sign out');
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    history.push('/');
  };
}
