import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Formulario from "../components/Formulario";
import "@testing-library/jest-dom/extend-expect";

const crearCita = jest.fn();

test("<Formulario /> Cargar el formulario y revisar que todo sea correcto", () => {
  //   const wrapper = render(<Formulario />);
  //   wrapper.debug();

  render(<Formulario crearCita={crearCita} />);
  expect(screen.getByText("Crear Cita")).toBeInTheDocument();

  // HEADING
  const titulo = screen.getByTestId("titulo");

  expect(titulo.tagName).toBe("H2");
  expect(titulo.tagName).not.toBe("H1");
  expect(titulo.textContent).toBe("Crear Cita");

  // BOTON
  expect(screen.getByTestId("btn-submit").tagName).toBe("BUTTON");
  expect(screen.getByTestId("btn-submit").textContent).toBe("Agregar Cita");
  expect(screen.getByTestId("btn-submit").textContent).not.toBe(
    "Agregar nueva cita"
  );
});

test("<Formulario /> Validación de formulario", () => {
  render(<Formulario crearCita={crearCita} />);

  // Click en el boton de submit
  const btnSubmit = screen.getByTestId("btn-submit");
  fireEvent.click(btnSubmit);

  // Revisar por la alerta
  const alerta = screen.getByTestId("alerta"
  expect(alerta).toBeInTheDocument();
  expect(alerta.textContent).toBe(
    "Todos los campos son obligatorios"
  );
  expect(alerta.tagName).toBe("P");
  expect(alerta.tagName).not.toBe("BUTTON");
});
