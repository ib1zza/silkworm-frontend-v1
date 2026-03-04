import axios, { AxiosError, type AxiosRequestConfig } from 'axios';

export const http = axios.create({
  baseURL: 'https://digital-twilight.ru',
});

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const promise = http({
    ...config,
    ...options,
  }).then(({ data }) => data);

  return promise;
};

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = AxiosError<Error>;

export type BodyType<BodyData> = BodyData;

// интерсепторы по желанию
http.interceptors.response.use(
  (res) => res,
  (err) => {
    // глобальная обработка ошибок
    return Promise.reject(err);
  },
);
