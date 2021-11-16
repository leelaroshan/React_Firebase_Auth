


// import { Form, Button, Card } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap";
import "./Signup.css";
import { FaGoogle } from 'react-icons/fa';
import {useAuth} from '../contexts/AuthContext';

// import Button from "@material-ui/core/Button"

// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from '@material-ui/core/FormControlLabel';

// import { FormGroup } from '@material-ui/core';

// import {Checkbox } from "@material-ui/core";
// import { Checkbox } from '@material-ui/core/icons';




export default function Signup() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

     const { currentUser} = useAuth();



    return (
        <div>
             <div className="container"><h2> current user is : {currentUser}</h2>
            <Card>
          <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
         
          
          <Form >
            <Form.Group className="mb-3" id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group  className="mb-3" id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group  className="mb-4" id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control  className="mb-3" type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <br />
            <Button className="w-100" variant="success" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>



      <Button
          variant='outline'
          isFullWidth
          colorScheme='red'
          leftIcon={<FaGoogle />}
        //   onClick={() =>
        //     signInWithGoogle()
        //       .then(user => console.log(user))
        //       .catch(e => console.log(e.message))
        //   }
        ><i class="bi bi-google"></i>
          Sign in with Google
        </Button>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/signin">Sign In</Link>
      </div>

       </div>
       
        </div>
    )

}

