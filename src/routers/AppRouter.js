import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import AddExpensePage from '../components/AddExpensePage';
import EditExpense from '../components/EditExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpense} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;