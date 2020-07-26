import axios from 'axios'
import qs from "qs";

const DELIVERIES_REST_API_URL = 'http://localhost:8080/api/deliveries';
const ADD_DELIVERY_REST_API_URL = 'http://localhost:8080/api/delivery';

class DeliveryService {

    getDeliveries() {
        return axios.get(DELIVERIES_REST_API_URL);
    }

    addDelivery(number, date, type) {
        return axios.post(ADD_DELIVERY_REST_API_URL,
            qs.stringify({
                'number': number,
                'date': this.getFormattedDate(new Date(date)),
                'type': type
            }))
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
    }

    getFormattedDate(date) {
        var year = date.getFullYear();

        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;

        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        return year + '-' + month + '-' + day;
    }
}

export default new DeliveryService();