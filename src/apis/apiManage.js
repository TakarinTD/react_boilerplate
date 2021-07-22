import api from './api';

export async function createApi({ name, apiId, dataStructure, schema }) {
  const result = await api({
    method: 'POST',
    url: '/apis',
    data: { name, apiId, dataStructure, schema, notCamelCase: true },
  });
  return result;
}

export async function getApi(apiId) {
  const result = await api({
    method: 'get',
    url: `/apis/${apiId}`,
  });
  return result;
}

export async function updateApi(id, updateFields) {
  const result = await api({
    method: 'put',
    url: `/apis/${id}`,
    data: updateFields,
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
