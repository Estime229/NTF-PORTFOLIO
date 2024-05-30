import axios from "axios";
import apiRouter from "../router/api-routes";
import store from "@/store";

// Configuration globale de l'instance Axios
const http = axios.create({
  baseURL: apiRouter.baseURL,
});

// Intercepteur de demande (Request Interceptor)
http.interceptors.request.use(
  (config) => {
    // Ajoutez ici votre logique de prétraitement des requêtes
    const token = store.state.token;
    config.headers["x-api-key"] = process.env.VUE_APP_X_API_KEY;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Gérez les erreurs de prétraitement des requêtes ici
    return Promise.reject(error);
  }
);

// Intercepteur de réponse (Response Interceptor)
http.interceptors.response.use(
  (response) => {
    // Ajoutez ici votre logique de prétraitement des réponses
    // Par exemple, vous pouvez gérer les réponses avant de les retourner aux composants

    return response;
  },
  (error) => {
    // Gérez les erreurs de réponse ici
    return Promise.reject(error);
  }
);

export default http;
