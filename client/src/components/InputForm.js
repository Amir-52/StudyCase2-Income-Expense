import React, { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

const InputForm = () => {

    const [name, setName] = useState('');
    const [total, setTotal] = useState(0);

    const URL = "http://localhost:3000";
    const incomeHandler = () => {
        console.log("Income")

        axios({
            method: "POST",
            url: `${URL}/incomes`,
            data: {
                name, total: +total
            }
        })
        .then(result => {
            console.log(result.data)
            Swal.fire({
                title: "Good job!",
                text: "Income has been inputted!",
                icon: "success"
            });
        })
        .catch(err => {
            console.log(err)
        })
    }
    const expenseHandler = () => {
        console.log("Expense")
         axios({
            method: "POST",
            url: `${URL}/expenses`,
            data: {
                name, total: +total
            }
        })
        .then(result => {
            console.log(result.data)
            Swal.fire({
            title: "Good job!",
            text: "Expense has been inputted!",
            icon: "success"
            });
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="input-form">
            <div className="form-item">
                <label>Transaction Name :</label>
                <input type="text" onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className="form-item">
                <label>Total :</label>
                <input type="text" onChange={(e) => setTotal(e.target.value)}></input>
            </div>
            <div className="submit-form">
                <button onClick={() => incomeHandler()}>Add Income</button>
                <button onClick={() => expenseHandler()}>Add Expense</button>
            </div>
        </div>
    )
}

export default InputForm;