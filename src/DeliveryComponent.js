import React from 'react';
import DeliveryService from './services/DeliveryService';
import Link from "react-router-dom/Link";

class DeliveryComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            deliveries: []
        }
    }

    componentDidMount() {
        DeliveryService.getDeliveries().then((response) => {
            this.setState({deliveries: response.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center"> Список поставок</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td> Id поставки</td>
                            <td> Номер поставки</td>
                            <td> Дата поставки</td>
                            <td> Тип поставки</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.deliveries.map(
                                delivery =>
                                    <tr key={delivery.id}>
                                        <td> {delivery.id}</td>
                                        <td> {delivery.number}</td>
                                        <td> {delivery.date}</td>
                                        <td> {delivery.type}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                <Link to={"/"}>Назад</Link>
            </div>
        )
    }
}

export default DeliveryComponent