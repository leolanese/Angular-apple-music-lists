export interface ApiResponse<TRes = any, TReq = any> {
  data?: TRes[];
  fail?: Fail<TReq>[];
  first?: TRes;
  all?: TRes[];
  hasErrors?: boolean;
}

export interface Fail<TReq = any> {
  errors?: Error[];
}

export interface Error {
  code?: string;
  message?: string;
}
