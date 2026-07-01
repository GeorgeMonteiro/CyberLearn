import Constants from 'expo-constants';

const hostUri = Constants.expoConfig?.hostUri || Constants.manifest?.hostUri;
const API_BASE_URL = hostUri
  ? `http://${hostUri.split(':')[0]}:3000`
  : 'http://localhost:3000';

export default API_BASE_URL;
