import './style.css';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';
const URL: string =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
var key="75e4edaa";
document.getElementById('getbtn').addEventListener('click', getValue);

function getValue() {
  const request: AjaxRequest = {
    method: 'GET',
    url: URL + '/get?key=' + key,
    crossDomain: true,
  };
  ajax(request).subscribe({
    next: (res: AjaxResponse<any>) => {
      document.getElementById('output').innerHTML = res.response;
    },
    error: (err: AjaxError) => console.error(err.response),
  });
}
