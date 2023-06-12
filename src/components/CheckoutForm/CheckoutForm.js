import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BOTON } from "../Common/Common";
import { H3 } from "../Common/Common";
import { Container } from "./styled";

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
    {({ isSubmitting }) => (
      <Container>
        <Form id="my-form">
          <H3>Por favor, completá la información</H3>
          <Field placeholder="Nombre*" type="text" name="name" />
          <ErrorMessage name="name" component="span" />
          <Field placeholder="Email*" type="email" name="email" />
          <ErrorMessage name="email" component="span" />
          <Field placeholder="Telefono*" type="text" name="phone" />
          <ErrorMessage name="phone" component="span" />
          <BOTON class="botonComprar"
            style={{ backgroundColor: "#AC9EB8!important", color: "black",  margin: "0 0 2em auto" }}
          >
            <button style={{background: "#AC9EB8", color: "black", fontFamily: "Open Sans" }} type="submit" disabled={isSubmitting}>
              COMPRAR
            </button>
          </BOTON>
        </Form>
      </Container>
    )}
  </Formik>
);
export default CheckoutForm;
