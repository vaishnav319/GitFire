import React, { useState, useContext } from 'react';
import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Col,
  Input,
  Raw,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Row,
} from 'reactstrap';

import firebase from 'firebase/compat/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../context/UserContext';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
  const context = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (context.user?.uid) {
    return <Redirect to='/' />;
  }
  const handleSignUp = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed in
        const user = res.user;

        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid });

        // ...
      })

      .catch((error) => {
        console.log(error);
        const errorMessage = error.message;
        toast(errorMessage, {
          type: 'error',
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  return (
    <Container className='text-center'>
      <Row>
        <Col lg={6} className='offset-lg-3 mt-5'>
          <Card>
            <Form onSubmit={handleSubmit}>
              <CardHeader className=''>SignIn here</CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for='email' sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type='email'
                      name='email'
                      id='email'
                      className='mb-3'
                      placeholder='provide your email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for='password' sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type='password'
                      name='password'
                      id='password'
                      placeholder='your password here'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type='submit' block color='primary'>
                  Sign In
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
