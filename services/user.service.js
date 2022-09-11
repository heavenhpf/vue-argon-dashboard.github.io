import axios from 'axios';
const API_URL = 'https://reqres.in/api/users?page=2';

class listService {
    login(user) {
        return axios
          .post(API_URL + 'signin', {
            email: user.email,
            first_name: user.first_name
          })
    }
}
export default new listService();