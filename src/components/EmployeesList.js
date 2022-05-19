import React from 'react';
import { useEffect, useState } from 'react';
import employeeService from '../services/employee.service'


const App = () => {

    const [peoples, setPeople] = useState([]);

    useEffect(()=>{
        employeeService.getAll()
        .then(response=>{
            console.log("직원데이터" + response.data);
            setPeople(response.data);
        }).catch(error=>{
            console.log("error");
        })
    },[]);

    return (
        <div className ="container">
        <div>
            <table border="1" cellPadding="10">
            <tr>
            <th>id</th>
                <th>name</th>
                <th>location</th>
                <th>department</th>
            </tr>
            {

peoples.map(people => (
    <tr>
        <td key={people.id}>{people.id}</td>
<td>{people.name}</td>
<td>{people.location}</td>
<td>{people.department}</td>
 </tr>
))
    }
            </table>
        </div>
        </div>
    );
};

export default App;