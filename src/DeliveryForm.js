import React from "react";
import './DeliveryForm.css'
import {Button} from "reactstrap";
import ReactSelect from "react-select";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import DeliveryService from "./services/DeliveryService";

class DeliveryForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: '',
            date: '',
            type: '',
            selectedOption: {label: '', value: ''},
            requestMsg: ''
        };

        this.selectedOption = {label: '', value: ''}

        this.options = [
            {label: "A", value: 1},
            {label: "B", value: 2},
            {label: "C", value: 3},
            {label: "D", value: 4},
            {label: "E", value: 5},
            {label: "F", value: 6},
            {label: "G", value: 7}
        ];

        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNumberChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleDateChange(date) {
        this.setState({
            date: date
        }, () => console.log(this.state.date));
    }

    handleSelectChange(e) {
        const value = e.value.toString();
        const name = 'type';

        this.setState({
            [name]: value
        });

        this.selectedOption.label = e.label;
        this.selectedOption.value = e.value;
    }

    handleSubmit(e) {
        alert('Принята поставка с номером: ' + this.state.number + ', датой: ' +
            this.state.date + ', типом: ' + this.state.type);
        e.preventDefault();

        DeliveryService.addDelivery(this.state.number, this.state.date, this.state.type)
            .then((response) => {
                console.log('Успешно!')
                this.setState({
                    requestMsg: 'Успешно!'
                });
            }, (error) => {
                console.log('Ошибка')
                this.setState({
                    requestMsg: 'Ошибка'
                });
            });

        this.setState({
            number: '',
            date: '',
            type: ''
        });

        this.selectedOption.label = '';
        this.selectedOption.value = '';
    }


    render() {
        return (
            <form id="delivery-form" onSubmit={this.handleSubmit} autocomplete="off">
                <label>
                    Номер поставки:
                    <br/>
                    <input name="number"
                           type="text"
                           value={this.state.number}
                           onChange={this.handleNumberChange}/>
                </label>
                <br/>
                <label>
                    Дата поставки:
                    <br/>
                    <DatePicker
                        name="date"
                        selected={this.state.date}
                        type="hidden"
                        onChange={this.handleDateChange}
                        dateFormat="dd/MM/yyyy"
                    />
                </label>
                <br/>
                <label>
                    Тип поставки:
                    <ReactSelect
                        name="type"
                        className="del-select"
                        value={this.selectedOption}
                        onChange={this.handleSelectChange}
                        options={this.options}/>
                </label>
                <br/>
                {/*<span>{this.state.requestMsg}</span>*/}
                <br/>
                <Button outline color="primary" type="submit">Отправить</Button>
            </form>
        );
    }
}

export default DeliveryForm;