import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';


const Expense= () => {
    const [expenses, setExpenses] = useState([]);
     const URL = "http://localhost:3000";
    
    const getExpenses = () => {
        axios({
            method: "GET",
            url: `${URL}/expenses`
        })
        .then(expenses => {
            setExpenses(expenses.data);
        })
        .catch(err =>{
        console.log(err);
        })
    }

     const deleteHandler = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios({
                    method: "DELETE",
                        url: `${URL}/expenses/${id}`
                })
                    .then(result => {
                        console.log(`Deleted berhasil ${result}`)
                        getExpenses()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(err => {
                        console.log(err)
                    })
                
            }
        });
       
    }

    useEffect(() => {
        getExpenses();
    }, [])

    return (
        <div className="expense-list">
            <div className="expense-heading">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <h5>Expense List</h5>  
            </div>
            <div className="expense-items">
                {
                    expenses.length !== 0 ?
                        expenses.map((expense) => {
                            return (
                                <div key={expense.id} className="card-item">
                                    <div className="item-left">
                                        <h5>💸 {expense.name}</h5>
                                        <p>Rp {expense.total.toLocaleString('id-ID')}</p>
                                    </div>
                                    <div className="item-right">
                                        <button onClick={() => deleteHandler(expense.id)}>Delete</button>
                                    </div>
                                </div>
                            )
                        }) :
                    <p style={{textAlign: 'center', color: '#999'}}>📊 There is no Expense</p>
                }
            </div>
        </div>
    )
}

export default Expense;