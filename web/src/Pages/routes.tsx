import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Landing';
import TeacherList from './TeacherList';
import TeacherForm from './TeacherForm';
import Login from './Login';


export default function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login} />

            <Route path="/home" component={Home} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    );
}