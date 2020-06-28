import Api from './api';

const url_base = `${process.env.API_URL}/cadastro`;

const UserService = {
  get: (id) => Api.get(`${url_base}/${id}`),
  post: (data) => Api.post(`${url_base}`, data),
  put: (id, data) => Api.put(`${url_base}/${id}`, data),
  delete: (id) => Api.delete(`${url_base}/${id}`)                       
}
 
export default UserService;