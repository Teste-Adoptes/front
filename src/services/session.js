import Api from './api';


const SessionService = {
  login: (data) => Api.post(`login`, data),
  logout: () => Api.post(`logout`)
                         
}
 
export default SessionService;