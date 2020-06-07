import axios, { AxiosRequestConfig } from 'axios';
import { User } from '../../types/interfaces/User';

export const getUser = async (id: string): Promise<User> => {

  const options: AxiosRequestConfig = {
    url: `http://localhost:8080/user/${id}`,
    method: 'GET',
  };

  const response = await axios(options);

  return response.data;
}