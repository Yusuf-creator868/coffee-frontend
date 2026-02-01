import axios from 'axios'                   
export const MAIN_URL = process.env.REACT_APP_API_URL;
// const LOGIN_URL = `${BASE_URL}token/`
// const LOGOUT_URL = `${BASE_URL}logout/`
const REGISTER_URL = `${MAIN_URL}register/`
// const RESFRESH_URL = `${BASE_URL}token/refresh/`
// const AUTH_URL = `${BASE_URL}authenticated/`



const api = axios.create({
    baseURL: MAIN_URL,
    
})
export default api





export const login = async (username, password) => {
        const response = await api.post(
            'token/', 
            {username, password}, 
            {withCredentials: true})
        return response.data.success
}

export const logout = async () => {
    try{
        await api.post('logout/', 
            {},
            {withCredentials: true}
        )
        return true
    }
    catch(error){
        return false
    }
}








export const register = async (username, email, password,  ) => {
    const response = await axios.post(REGISTER_URL, {username, email, password},)
    return response.data
}


export const is_authonticated = async () => {

        await api.post('authenticated/', {}, {withCredentials: true})
        return true
 
}




export const refresh_token = async () => {
    try{
         await api.post('token/refresh/', 
            {},
            {withCredentials: true}
        )
        console.log("Send")
        return true
    } catch(error){
        console.log("Not Send")
        return false
    }
}




api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;



    if (error.response && error.response.status === 401 && !originalRequest._retry
        && !originalRequest.url.includes('token/refresh/')
    ) {
      originalRequest._retry = true;

      const refreshed = await refresh_token();


      if (refreshed) {

        originalRequest.withCredentials = true;
        return api.request(originalRequest); // retry once
      }
    }
    throw error;

  }
);






































// apiurl.interceptors.response.use(
//   response => response,
//   async error => {
//     const originalRequest = error.config;

//     // 🔒 Prevent infinite loop: don't retry if refresh itself failed
//     // if (originalRequest.url.includes('token/refresh/')) {
//     //   throw error; // stop if refresh endpoint failed
//     // }

//     // Only try refresh once per request
//     if (error.response && error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       const refreshed = await refresh_token();

//       if (refreshed) {
//         return apiurl.request(originalRequest); // retry once
//       }
//     }

//     throw error;
//   }
// );



