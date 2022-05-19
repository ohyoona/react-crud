import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import employeeService from '../services/employee.service';

const AddEmployee = () => {
    const[name, setName] = useState('');
    const[location, setLocation] = useState('');
    const[department, setDepartment] = useState('');
    const history = useHistory();
    const {id} = useParams();


//     const saveEmployee = (e) =>{
//         e.preventDefault();
        
//     const employee = {name, location, department};
//     employeeService.create(employee)
//     .then(response =>{
//         console.log("생성" + response.data);
//         history.push("/");
//     }).catch(error=>{
//         console.log("error");
//     })

// }

        const saveEmployee = (e) => {
            e.preventDefalut();
          
            const employee = {name, location, department, id};
        if(id){
            employeeService.update(employee)
            .then(response =>{
                console.log("업데이트성공");
                history.push('/');
            })
            .catch(error=>{
                console.log("업데이트 실패");
            })
        }else{
            //생성
            employeeService.create(employee)
            .then(response=>{
                console.log("생성");
                history.push("/");
            })
            .catch(error=>{
                console.log('생성실패');
            })
        }

        }

        //아이디가 있으면 정보를 가져온다.
        useEffect(()=>{
            if(id){
                employeeService.getId(id)
                .then(employee => {
                    setName(employee.data.name);
                    setLocation(employee.data.location);
                    setDepartment(employee.data.department);
                })
                .catch(error => {
                    console.log("정보불러오기 실패");
                })
            }
        },[])

    return (
        <form>
        <div>
            <input type="text" id="name" value={name}
            onChange={(e)=> setName(e.target.value)}/>
            <input type="text" id="location" value={location}
            onChange={(e)=> setLocation(e.target.value)}/>
               <input type="text" id="department" value={department}
            onChange={(e)=> setDepartment(e.target.value)}/>
        </div>
        <div>
            <button onClick={(e)=>saveEmployee(e)}>등록</button>
        </div>
        </form>
    );
};


export default AddEmployee;