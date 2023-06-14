import http from '../http-common'

class DecisionService {
    get(id, amount, period) {
    return http.get('/apply/${id}/${amount}/${period}')
    }
 }

export default new DecisionService()