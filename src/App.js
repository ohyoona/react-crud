import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import EmployeeList from './components/EmployeesList'
import AddEmployee from './components/AddEmployee';

function App() {
    return (
        <BrowserRouter>
        <div>
            <div>
                <Switch> 
                {/* exact: path 경로로 이동시 해당 component를 보여준다 */}
                    <Route exact path="/" component={EmployeeList} />
                    <Route exact path="/add" component={AddEmployee} />
                    <Route exact path="/edit/:id" component={AddEmployee} />
                {/* 그 외에 경로로 이동시 NotFound 페이지를 보여준다 */}
                    <Route path ="*" component={NotFound }/>
                </Switch>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
