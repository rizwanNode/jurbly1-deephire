import { stringify } from 'qs';
import request from '@/utils/request';

// const newApi = 'http://localhost:3000/v1';
const newApi = 'https://a.deephire.com/v1';

// const newApi = 'http://localhost:3001';
// const newApi = 'http://localhost:3000/v1';

const setHeaders = () => ({
  authorization: `Bearer ${localStorage.getItem('access_token')}`,
});

export async function createInterview(params) {
  const {
    prepTime,
    retakesAllowed,
    answerTime,
    interviewName,
    interviewQuestions,
    email: createdBy,
  } = params;
  const questions = interviewQuestions.map(a => ({
    question: a,
  }));

  const body = {
    interviewName,
    createdBy,
    interviewQuestions: questions,
    interviewConfig: { retakesAllowed, prepTime, answerTime },
  };

  return request(`${newApi}/interviews`, { method: 'POST', body, headers: setHeaders() });
}

export async function getShortLists() {
  return request(`${newApi}/shortlists`, {
    method: 'GET',
    headers: setHeaders(),
  });
  // return new Promise(resolve => resolve({ list: shortLists }));
}

// gets data for a specific shortlist, useful for analytics page
export async function getShortListData(id) {
  return request(`${newApi}/shortlists/${id}`, {
    method: 'GET',
    headers: setHeaders(),
  });
  // return new Promise(resolve => resolve(shortListsWithAnalytics));
}

export async function sendEmail(data) {
  return request(`${newApi}/emails`, {
    method: 'POST',
    headers: setHeaders(),
    body: data,
  });
}

// get profile from id
export async function getCandidateProfile(id) {
  return request(`${newApi}/candidates/${id}`, {
    method: 'GET',
    headers: setHeaders(),
  });
}

export async function removeCandidateDocument(email, id) {
  return request(`${newApi}/candidates/${email}/documents/${id}`, {
    method: 'DELETE',
    headers: setHeaders(),
  });
}
// take json and create or update
export async function updateCandidateProfile(email, data) {
  const sendData = data;
  delete sendData._id;

  await request(`${newApi}/candidates/${email}`, {
    method: 'PUT',
    headers: setHeaders(),
    body: sendData,
  });

  return request(`${newApi}/candidates/${email}`, {
    method: 'GET',
    headers: setHeaders(),
  });
}

export async function getVideos(params) {
  if (params == null) {
    // params = 'test@gmail.com';
    return null;
  }
  // return request(`${newApi}/v1.0/get_candidates/${params}`);
  const videos = request(`${newApi}/videos`, {
    method: 'GET',
    headers: setHeaders(),
  });
  videos.then(r => r.sort((a, b) => (new Date(a.timestamp) > new Date(b.timestamp) ? -1 : 1)));
  return videos;
}

export async function shareShortLink(data) {
  const x = request(`${newApi}/shortlists`, {
    method: 'POST',
    body: data,
    headers: setHeaders(),
  });
  return x;
}

export async function getInterviews() {
  return request(`${newApi}/interviews`, { method: 'GET', headers: setHeaders() });
}

// export async function removeInterview(params) {
//   const { email, selectedRows } = params;

//   await Promise.all(
//     selectedRows.map(async value => {
//       const { _id } = value;
//       const { $oid } = _id;
//       const res = await request(`${newApi}/interviews/${$oid}`, {
//         method: 'DELETE',
//         headers: setHeaders(),
//       });
//       return res;
//     })
//   );
//   return request(`${newApi}/interviews${email}`);
// }

export async function deleteShortList(params) {
  const { selectedRows } = params;

  await Promise.all(
    selectedRows.map(async value => {
      const { _id } = value;
      const { $oid } = _id;
      const res = await request(`${newApi}/shortlists/${$oid}`, {
        method: 'DELETE',
        headers: setHeaders(),
      });
      return res;
    })
  );
  return getShortLists();
}

export async function removeCandidate(params) {
  const { selectedRows } = params;

  await Promise.all(
    selectedRows.map(async value => {
      const { _id } = value;
      const res = await request(`${newApi}/videos/${_id}`, {
        method: 'DELETE',
        headers: setHeaders(),
      });
      return res;
    })
  );
  return request(`${newApi}/videos`, {
    method: 'GET',
    headers: setHeaders(),
  });
}

export async function updateRule(params = {}) {
  return request(`/api/rule?${stringify(params.query)}`, {
    method: 'POST',
    body: {
      ...params.body,
      method: 'update',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function removeFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'update',
    },
  });
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices(params = {}) {
  return request(`/api/notices?${stringify(params)}`);
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/captcha?mobile=${mobile}`);
}

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export { newApi };
