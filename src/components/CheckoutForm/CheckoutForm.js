import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { H3 } from "../Common/Common";
import { Container, CustomButton } from "./styled";
import styled from 'styled-components';

const ErrorText = styled(ErrorMessage)`
  color: red;
  font-size: 0.8em;
  margin-top: 0;
`;


const CheckoutForm = ({ handleSubmit }) => (
  <Formik
    initialValues={{ email: "", name: "", phone: "" }}
    validate={(values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Ingresá tu nombre por favor";
      }
      if (!values.phone) {
        errors.phone = "Ingresá tu celular por favor";
      }
      if (!values.email) {
        errors.email = "Ingresá tu mail por favor";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email =
          "Este email no es válido, por favor, reingresalo. Debe contener un '@' y un '.'";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        handleSubmit(values);
        setSubmitting(false);
      }, 1000);
    }}
  >
    {({ isValid, isSubmitting }) => (
      <Container>
        <Form id="my-form">
          <H3>Por favor, completá la información</H3>
          <Field placeholder="Nombre*" type="text" name="name" />
          <ErrorText name="name" component="span" />
          <Field placeholder="Email*" type="email" name="email" />
          <ErrorText name="email" component="span" />
          <Field placeholder="Telefono*" type="text" name="phone" />
          <ErrorText name="phone" component="span" />
          <CustomButton type="submit" disabled={!isValid || isSubmitting}>
            COMPRAR
          </CustomButton>
        </Form>
      </Container>
    )}
  </Formik>
);
export default CheckoutForm;
