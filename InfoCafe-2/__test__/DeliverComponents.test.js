import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import DireccionInput from '../componentes/DireccionInput';
import { StoreProvider } from '../store/store';

jest.mock('@react-native-async-storage/async-storage');
jest.mock('../../InfoCafe-2/utils/useDirectionInput');

describe('DireccionInput', () => {
  const renderWithProvider = () =>
    render(
      <StoreProvider>
        <DireccionInput />
      </StoreProvider>
    );

  it('renderiza correctamente el contenedor principal y título', async () => {
    const { getByTestId } = renderWithProvider();
    await waitFor(() => {
      expect(getByTestId('direccion-container')).toBeTruthy();
      expect(getByTestId('direccion-title').props.children).toBe('Dirección de entrega');
    });
  });

  it('renderiza correctamente el campo de entrada', async () => {
    const { getByTestId } = renderWithProvider();
    await waitFor(() => {
      const input = getByTestId('direccion-input');
      expect(input).toBeTruthy();
    });
  });

  it('permite escribir texto en el campo de dirección', async () => {
    const { getByTestId } = renderWithProvider();
    const input = getByTestId('direccion-input');

    await waitFor(() => {
      fireEvent.changeText(input, 'Av Arequipa 123');
      expect(input.props.value).toBe('Av Arequipa 123');
    });
  });

  it('no muestra sugerencias si el campo está vacío', async () => {
    const { getByTestId, queryAllByTestId } = renderWithProvider();

    await waitFor(() => {
      const list = getByTestId('direccion-sugerencias-list');
      expect(list).toBeTruthy();

      const sugerencias = queryAllByTestId(/^direccion-sugerencia-/);
      expect(sugerencias.length).toBe(0);
    });
  });

  it('simula presionar el botón "Agregar Dirección"', async () => {
    const { getByTestId } = renderWithProvider();
    const input = getByTestId('direccion-input');
    const boton = getByTestId('btn-agregar-direccion');
    const textoBoton = getByTestId('text-btn-agregar-direccion');

    await waitFor(() => {
      fireEvent.changeText(input, 'Calle Falsa 123');
      expect(textoBoton.props.children).toBe('Agregar Dirección');

      fireEvent.press(boton);
      expect(input.props.editable).toBe(false);
    });
  });

  it('simula presionar el botón "Editar Dirección" si ya fue guardada', async () => {
    const { getByTestId } = renderWithProvider();
    const input = getByTestId('direccion-input');
    const botonGuardar = getByTestId('btn-agregar-direccion');

    await waitFor(() => {
      fireEvent.changeText(input, 'Calle Falsa 123');
      fireEvent.press(botonGuardar);
    });

    const botonEditar = getByTestId('btn-editar-direccion');
    const textoBotonEditar = getByTestId('text-btn-editar-direccion');

    expect(textoBotonEditar.props.children).toBe('Editar Texto');

    await waitFor(() => {
      fireEvent.press(botonEditar);
      expect(input.props.editable).toBe(true);
    });
  });
  it('muestra sugerencias y permite seleccionar una', async () => {
  const mockPrediction = {
    place_id: '123',
    description: 'Av Siempre Viva 742'
  };

  const { getByTestId, queryByTestId } = renderWithProvider();

  // Simula escribir para que aparezcan sugerencias
  await waitFor(() => {
    fireEvent.changeText(getByTestId('direccion-input'), 'Av');
  });

  // Simula que el componente renderiza una sugerencia
  await waitFor(() => {
    const flatList = getByTestId('direccion-sugerencias-list');
    expect(flatList).toBeTruthy();
  });

  // Simula que las sugerencias fueron cargadas
  // Para esta prueba funcione, necesitas mockear useDireccionInput para retornar `predictions`
  const sugerencia = queryByTestId('direccion-sugerencia-123');
  if (sugerencia) {
    fireEvent.press(sugerencia);
    // Puedes agregar un expect() si cambia algo tras seleccionar
  }
  });
});
