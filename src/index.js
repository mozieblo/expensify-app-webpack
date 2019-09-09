import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashoboard expense!
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my add expense!
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my edit expense!
    </div>
);

const HelpPage = () => (
    <div>
        This is from my help page!
    </div>
);

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Go home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Go to create</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Go to edit</NavLink>
        <NavLink to="/help" activeClassName="is-active">Go to help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

