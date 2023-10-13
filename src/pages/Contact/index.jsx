import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './contact.module.css';
import Button from 'react-bootstrap/Button';

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, 'Your first name should be at least 3 characters.')
      .required('Please enter your full name'),
    subject: yup
      .string()
      .min(3, 'Minimum number of charactters is 3')
      .required('Your age must be a number'),
    email: yup.string().email().required('Must be a valid email address'),
    body: yup
      .string()
      .min(3, 'Minimum number of characters is 3')
      .typeError('Your age must be a number'),
  })
  .required();

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data, e) {
    console.log(data);
    setIsSubmitted(true);

    e.target.reset();
  }

  return (
    <Form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.contactHeader}>Contact Form</h1>
      {isSubmitted ? <h6 className={styles.successMessage}>Successfully Submitted!</h6> : null}
      <Form.Floating>
        <Form.Control id='fullName' type='text' placeholder='John Doe' {...register('fullName')} />
        <label htmlFor='fullName'>Full Name</label>
        <p>{errors.fullName?.message}</p>
      </Form.Floating>
      <Form.Floating>
        <Form.Control id='email' type='email' placeholder='Email' {...register('email')} />
        <label htmlFor='email'>Email</label>
        <p>{errors.email?.message}</p>
      </Form.Floating>
      <Form.Floating>
        <Form.Control id='subject' type='text' placeholder='Subject' {...register('subject')} />
        <label htmlFor='subject'>Subject</label>
        <p>{errors.subject?.message}</p>
      </Form.Floating>
      <Form.Floating>
        <Form.Control id='body' type='text' placeholder='Body' {...register('body')} />
        <label htmlFor='body'>Body</label>
        <p>{errors.body?.message}</p>
      </Form.Floating>
      <Button variant='dark' type='submit' disabled={isSubmitted}>
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
