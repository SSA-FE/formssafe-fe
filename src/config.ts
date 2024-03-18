export const BASE_URL: string = import.meta.env.VITE_APP_BASE_URL;

export const API = {
  AUTH: `${BASE_URL}/api/v1/auth`,
  USERS: `${BASE_URL}/api/v1/users`,
  FORM: `${BASE_URL}/api/v1/forms`,
  RESULT: `${BASE_URL}/api/v1/forms`,
  ACTIVITY: `${BASE_URL}/api/v1/activities`,
  SUBMISSION: `${BASE_URL}/api/v1/forms`,
};
