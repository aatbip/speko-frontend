import axios from "axios";

axios.defaults.baseURL = `${process.env.REACT_APP_API_KEY}/api`;
axios.defaults.withCredentials = true;

// axios.interceptors.request.use(function (req: any) {
//   const credentials = Cookies.get("userCredentials");
//   if (credentials) {
//     const data = JSON.parse(credentials);
//     req.headers.authorization = `Bearer ${data.accessToken} `;
//     return req;
//   }
//   return req;
// });
