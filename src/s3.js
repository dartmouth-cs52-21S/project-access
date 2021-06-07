/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { ROOT_URL } from './actions';

// adapted from https://cs52.me/assignments/sa/s3-upload/
function getSignedRequest(file) {
  return axios.post(`${ROOT_URL}/images`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
    console.log('getSignedRequest post', response.data);
    const fileName = encodeURIComponent(response.data.id);
    return axios.get(`${ROOT_URL}/sign-s3?file-name=${fileName}&file-type=${file.type}`);
    // hit our own server to get a signed s3 url
  }).catch((error) => {
    console.log('getSignedRequest error', error.response.data);
  });
}

// return a promise that uploads file directly to S3
// note how we return the passed in url here rather than any return value
// since we already know what the url will be - just not that it has been uploaded
function uploadFileToS3(signedRequest, file, url) {
  url += `?${(new Date()).getTime()}`;
  return new Promise((fulfill, reject) => {
    axios.put(signedRequest, file, { headers: { 'Content-Type': file.type } }).then((response) => {
      console.log('uploadFiletoS3', response.data);
      fulfill(url);
    }).catch((error) => {
      console.log('uploadFiletoS3 error', error.toString());
      reject(error);
    });
  });
}

function updateImageUrl(id, url) {
  console.log('updateImageUrl', url);
  return axios.put(`${ROOT_URL}/images`, { id, url }, { headers: { authorization: localStorage.getItem('token') } });
}

export function uploadImage(file) {
  // returns a promise so you can handle error and completion in your component
  return getSignedRequest(file).then((response) => {
    updateImageUrl(response.data.fileName, response.data.url);
    // console.log('uploadImage file', response.data);
    return uploadFileToS3(response.data.signedRequest, file, response.data.url);
  });
}
