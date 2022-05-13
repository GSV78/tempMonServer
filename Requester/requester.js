import fetch from 'node-fetch';
import axios from 'axios';

export const getData = async () => {
  let resp = await fetch('http://beeb0a9e670c.sn.mynetname.net:8383').then((res) => res.text());
  // console.log(resp);
  let arr = [];
  while (resp.indexOf('<h1>') !== -1) {
    let data = '';
    resp = resp.substring(resp.indexOf('<h1>'));
    // console.log('resp ', resp);
    data = resp.slice(0, resp.indexOf('</h2>'));
    resp = resp.substring(resp.indexOf('</h2>'));
    // console.log('resp ', resp);
    // console.log('data ', data);
    let result = data.split(': ');
    arr.push(+result[1]);
  }
  let dateAndTime = new Date();
  return {
    day: `${
      dateAndTime.getDate().toString().length === 1
        ? '0' + dateAndTime.getDate()
        : dateAndTime.getDate()
    }.${
      (dateAndTime.getMonth() + 1).toString().length === 1
        ? '0' + (dateAndTime.getMonth() + 1)
        : dateAndTime.getMonth() + 1
    }.${dateAndTime.getFullYear()}`,
    time: `${
      dateAndTime.getHours().toString().length === 1
        ? '0' + dateAndTime.getHours()
        : dateAndTime.getHours()
    }:${
      dateAndTime.getMinutes().toString().length === 1
        ? '0' + dateAndTime.getMinutes()
        : dateAndTime.getMinutes()
    }`,
    t1: arr[0],
    t2: arr[1],
    t3: arr[2],
    t4: arr[3],
    t5: arr[4],
    t6: arr[5],
    t7: arr[6],
    t8: arr[7],
    t9: arr[8],
    t10: arr[9],
    t11: arr[10],
    t12: arr[11],
    arr: arr,
  };
};

const instanceDB = axios.create({
  baseURL: 'http://localhost:3001/api/',
});

export const putCurrentData = (data) => {
  return instanceDB.put('currentData/', { ...data }).then((responce) => responce.status);
};
export const postData = (data) => {
  return instanceDB.post('tempData/', { ...data }).then((responce) => responce.status);
};

console.log('Requester started...');
setInterval(async () => {
  const newData = await getData();
  putCurrentData({ name: 'Current', time: newData.time, arr: newData.arr });
  console.log('put to Current');
}, 10000);
setInterval(async () => {
  const newData = await getData();
  console.log('MinuteQueryTime: ', newData.time);

  if (
    newData.time.includes(':00') ||
    newData.time.includes(':15') ||
    newData.time.includes(':30') ||
    newData.time.includes(':45')
  ) {
    postData(newData);
    console.log('post to DB');
  }
}, 60000);
