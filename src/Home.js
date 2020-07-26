import React, { Component } from 'react';
import './App.css';
import DeliveryForm from './DeliveryForm';
import { Container } from 'reactstrap';
import Link from "react-router-dom/Link";

class Home extends Component {
    sendInfo = (info) => {
        alert(info);
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <DeliveryForm onSubmit={this.sendInfo}/>
                </Container>
                <Container fluid>
                    <Link to={"/deliveries"}>Посмотреть все поставки</Link>
                </Container>
            </div>
        );
    }
}

export default Home;