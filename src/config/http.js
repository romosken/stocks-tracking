import axios from "axios";

export const FINAGE_API = axios.create({
  baseURL: "https://api.finage.co.uk",
});

FINAGE_API.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["apiKey"] = "API_KEYccZFWMOCVH6X74CCSPEHURT3KXJBSAT7";
  return config;
});
