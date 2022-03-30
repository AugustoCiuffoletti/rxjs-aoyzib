import './style.css';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';
const URL: string =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
var key="e3ce9512";
document.getElementById('getbtn').addEventListener('click', getValue);
document.getElementById('setbtn').addEventListener('click', setValue);

function getValue() {
  const obs = ajax({
    method: 'GET',
    url: URL + '/get?key=' + key,
    crossDomain: true,
  });
  obs.subscribe({
    next: (res: AjaxResponse<any>) => {
      document.getElementById('output').innerHTML = res.response;
    },
    error: (err: AjaxError) => console.error(err.response),
  });
}

function setValue() {
  console.log(document.getElementById('data'));
  const obs = ajax({
    method: 'POST',
    url:URL + '/set?key=' + key,
    crossDomain: true,
    body: document.getElementById('data').value
  })
  obs.subscribe({
    next: (res: AjaxResponse<any>) => {
      document.getElementById('output').innerHTML = 'Ok!';
    },
    error: (err: AjaxError) => console.error(err.response),
  });
}
