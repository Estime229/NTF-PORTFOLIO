import http from "@/plugins/https";
import apiRoutes from "@/router/api-routes";

// CHECK POLICE
export const checkPolice = (data) => {
  return http.post(apiRoutes.baseURL + apiRoutes.checkPolice, data);
};
