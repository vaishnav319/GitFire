import React, { useState } from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

//react-router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//firebase
import firebase from 'firebase/compat/app';
import 'firebase/auth';

//components
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import PageNotFound from './Pages/PageNotFound';
import { UserContext } from './context/UserContext';
import Footer from './Layout/Footer';
import Header from './Layout/Header';

import firebaseConfig from './Config/firebaseConfig';
//init firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='*' component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
