/* global ajaxErrorHandler */
import axios from 'axios';

export const axiosHttp = axios.create({
  // timeout: 1000,
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
});
const formatter = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
});

const formatter2 = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

const formatter3 = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
  era: 'short',
  year: '2-digit',
  month: 'numeric',
  day: 'numeric'
});

const formatter4 = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
});

const formatter5 = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false
});
const formatter6 = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});

const formatter7 = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  weekday: 'short'
});

const formatter10 = new Intl.DateTimeFormat('ja-JP', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});

export function formatDate(dateStr) {
  if (!dateStr) return '';
  let date = new Date(dateStr);
  return formatter.format(date);
}

export function formatDate7(dateStr) {
  if (!dateStr) return '';
  let date = new Date(dateStr);
  return formatter7.format(date);
}

export function formatDate4(dateStr) {
  if (!dateStr) return '';
  let date = new Date(dateStr);
  return formatter4.format(date);
}

export function formatDate5(dateStr) {
  if (!dateStr) return '';
  let date = new Date(dateStr);
  return formatter5.format(date);
}

export function formatDate6(dateStr) {
  if (!dateStr) return '';
  let date = new Date(dateStr);
  return formatter6.format(date);
}

export function formatDate10(dateStr) {
  if (!dateStr) return '';
  let date = new Date(dateStr);
  return formatter10.format(date);
}

export function httpRequest(options, callback, errorCallback) {
  return axiosHttp
    .request(options)
    .then(callback)
    .catch(error =>
      errorCallback
        ? errorCallback(error.request)
        : ajaxErrorHandler(error.request)
    );
}

export function httpRequestNew(options, callback, errorCallback) {
  return axiosHttp
    .request(options)
    .then(response => callback(response.data))
    .catch(error =>
      errorCallback
        ? errorCallback(error.request)
        : ajaxErrorHandler(error.request)
    );
}

export function formatDate2(dateStr) {
  if (!dateStr) return '';
  let date = new Date(dateStr);
  return formatter2.format(date);
}

export function formatDate3(dateStr) {
  if (!dateStr) return '';
  let date = new Date(dateStr);
  return formatter3.format(date);
}

export function formatDate8(dateStr) {
  if (!dateStr) return '';
  let date = new Date(dateStr);
  return formatDate(date) + ' ' + formatDate5(date);
}

export function formatDate9(dateStr) {
  if (!dateStr) return '';
  let date = new Date(dateStr);
  return formatDate7(date) + ' ' + formatDate5(date);
}

export const sortBy = fields => (a, b) =>
  fields
    .map(o => {
      let dir = 1;
      if (o[0] === '-') {
        dir = -1;
        o = o.substring(1);
      }
      return a[o] > b[o] ? dir : a[o] < b[o] ? -dir : 0;
    })
    .reduce((p, n) => (p ? p : n), 0);
