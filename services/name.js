import { http } from './config'

export default {

    listing: () => {
        return http.get('name')
    }

}