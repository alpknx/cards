import axios, { AxiosResponse } from 'axios';
import { User } from '../models/user';

export default class AuthService {
  static async getUsers(): Promise<AxiosResponse<User[]>> {
    return axios.get<User[]>('./users.json');
  }
}
