import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

const Income = () => {
    const [incomes, setIncomes] = useState([]);
    const URL = "http://localhost:3000";
    
    const getIncomes = () => {
        axios({
            method: "GET",
            url: `${URL}/incomes`
        })
        .then(incomes => {
            setIncomes(incomes.data);
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
                        url: `${URL}/incomes/${id}`
                })
                    .then(result => {
                        console.log(`Deleted berhasil ${result}`)
                        getIncomes()
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
        getIncomes();
    }, [])

    return (
        <div className="income-list">
            <div className="income-heading">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 17"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
              <h5>Income List</h5>  
            </div>
            <div className="income-items">
                {
                    incomes.length !== 0 ?
                        incomes.map((income) => {
                            return (
                                <div key={income.id} className="card-item">
                                    <div className="item-left">
                                        <h5>💰 {income.name}</h5>
                                        <p>Rp {income.total.toLocaleString('id-ID')}</p>
                                    </div>
                                    <div className="item-right">
                                        <button onClick={() => deleteHandler(income.id)}>Delete</button>
                                    </div>
                                </div>
                            )
                        }) :
                    <p style={{textAlign: 'center', color: '#999'}}>📊 There is no Income</p>
                }
            </div>
        </div>
    )
}

export default Income;