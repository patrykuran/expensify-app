import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashboard = () => (
    <div>Expense Dashboard</div>
);

const AddExpensePage = () => (
    <div>Add Expense</div>
);

const EditExpense = () => (
    <div>Edit Expense</div>
);

const HelpPage = () => (
    <div>Help Page</div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboard} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpense} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'))