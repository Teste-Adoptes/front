import Api from './api';

const url = 'cadastro';

const UserService = {
  get: (id) => Api.get(`${url}/${id}`),
  post: (data) => Api.post(`${url}`, data),
  put: (id, data) => Api.put(`${url}/${id}`, data),
  delete: (id) => Api.delete(`${url}/${id}`)                       
}
 
export default UserService;