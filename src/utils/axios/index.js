import Ajax from './ajax'
import config from '@/config/config'
const axios = new Ajax(config.BASE_URL)
export default axios
