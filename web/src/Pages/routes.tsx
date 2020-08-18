import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Landing';
import TeacherList from './TeacherList';
import TeacherForm from './TeacherForm';
import Login from './Login';
import SignUp from './SignUp';
import SucessPage from '../components/SucessPage';


export default function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/sucess" component={SucessPage} />

            <Route path="/home" component={Home} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    );
}