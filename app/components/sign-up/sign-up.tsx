'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';
import '@/app/styles/login.css';

export default function SignUp() {
  return (
    <>
      <div className="loginform-wrapper">
        <div className="container">
          <div className="login_title">
            <h1>Sign Up</h1>
            <p>
              Need an account? <Link href={'/'}>Get started!</Link>
            </p>
          </div>
          <form className="col-form-2">
            <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
              <Form.Control type="text" placeholder="xyz@gmail.com" />
              <label htmlFor="email">First Name</label>
            </Form.Group>
            <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
              <Form.Control type="text" placeholder="xyz@gmail.com" />
              <label htmlFor="email">Middle Name</label>
            </Form.Group>
            <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
              <Form.Control type="text" placeholder="xyz@gmail.com" />
              <label htmlFor="email">Surname</label>
            </Form.Group>
            <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
              <Form.Select aria-label="Default select example">
                <option>Choose Gender</option>
                <option value="1">+91</option>
                <option value="2">+92</option>
                <option value="3">+93</option>
              </Form.Select>
              <label htmlFor="email">Gender</label>
            </Form.Group>
            <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
              <Form.Control type="email" placeholder="xyz@gmail.com" />
              <label htmlFor="email">Email</label>
            </Form.Group>
            <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
              <Form.Control type="password" placeholder="8 + strong character" />
              <label htmlFor="email">Password</label>
            </Form.Group>
            <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">+91</option>
                <option value="2">+92</option>
                <option value="3">+93</option>
              </Form.Select>
              <label htmlFor="email">Telephone Code</label>
            </Form.Group>
            <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
              <Form.Control type="text" placeholder="xyz@gmail.com" />
              <label htmlFor="email">Telephone</label>
            </Form.Group>
            <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
              <Form.Control type="text" placeholder="xyz@gmail.com" />
              <label htmlFor="email">Weight</label>
            </Form.Group>
            <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
              <Form.Control type="text" placeholder="xyz@gmail.com" />
              <label htmlFor="email">Height</label>
            </Form.Group>
            <Form.Group className="form-control full" controlId="newsletterForm.ControlInput">
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form.Group>
            <Form.Group
              className="form-control login-link full"
              controlId="forgotForm.ControlInput"
            >
              <p>
                Already have an account? <Link href={'/'}>Login!</Link>
              </p>
            </Form.Group>
            <Form.Group
              className="form-control google-btn full"
              controlId="googlebtnForm.ControlInput"
            >
              <button className="google bordered">
                <Image
                  src={'/images/google-icon.svg'}
                  loading="lazy"
                  width={16}
                  height={17}
                  alt="google"
                />
                Google
              </button>
            </Form.Group>
          </form>
        </div>
      </div>
    </>
  );
}
