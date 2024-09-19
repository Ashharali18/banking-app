import axios from "axios";

const BASE_URL = "http://localhost:8080/v2/";

// login API
export const customerloginApi = async ({ email, password }) =>
    axios.post(`${BASE_URL}auth/customer-login`, { email, password });

export const adminloginApi = async ({ email, password }) =>
  axios.post(`${BASE_URL}auth/admin-login`, { email, password });
  
// all accounts API
export const getAccountsApi = (token) => {
    return axios.get(`${BASE_URL}/accounts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

export const createAccountApi = (account ,token) => {
  const trimmedToken = token.trim();
    return axios.post(`${BASE_URL}/account`, account, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

export const deleteAccountApi=(accountId, token)=>{
  return axios.delete(`${BASE_URL}account/${accountId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

// load all transactions API
export const getTransfersApi = (token) => {
  return axios.get(`${BASE_URL}transfers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getTransactionsByTransferIdApi = (token, transferId) => {
  return axios.get(`${BASE_URL}transfer/${transferId}transactions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

