import Api from './api';

const url_base = process.env.API_URL;

const SessionService = {
  login: (data) => Api.post(`${url_base}/login`, data),
  logout: (auth) => Api.post(`${url_base}/logout`, auth)
                         
}
 
export default SessionService;