import api from './api';

export async function createApi(name, apiSets) {
  const result = await api({
    method: 'POST',
    url: '/apis',
    data: { name, apiSets, notCamelCase: true },
  });
  return result;
}

export async function getApi(id) {
  const result = await api({
    method: 'get',
    url: `/apis/${id}`,
  });
  return result;
}

export async function getApiSet(id, apiId) {
  const result = await api({
    method: 'get',
    url: `/apis/${id}/api-sets/${apiId}`,
  });
  return result;
}

export async function updateApi(id, updateFields) {
  const result = await api({
    method: 'put',
    url: `/apis/${id}`,
    data: { updateFields, notCamelCase: true },
  });
  return result;
}

export async function getListApi() {
  const result = await api({
    method: 'get',
    url: '/apis',
  });
  return result;
}
