import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Landing from './Landing';
import TeacherList from './TeacherList';
import TeacherForm from './TeacherForm';


export default function Routes(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    );
}