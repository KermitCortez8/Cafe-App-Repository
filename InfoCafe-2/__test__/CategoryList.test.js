import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import CategoryList from '../componentes/CategoryList';

describe('CategoryList', () => {
  const mockSelectCategory = jest.fn();

  const renderComponent = (selected = 'All') =>
    render(
      <CategoryList
        selectedCategory={selected}
        onSelectCategory={mockSelectCategory}
      />
    );

  it('renderiza correctamente el scroll y contenedor', async () => {
    const { getByTestId } = renderComponent();

    await waitFor(() => {
      expect(getByTestId('category-scroll')).toBeTruthy();
      expect(getByTestId('category-container')).toBeTruthy();
    });
  });

  it('renderiza todas las categorías', async () => {
    const { getByTestId } = renderComponent();

    const categories = [
      'All', 'Americano', 'Black', 'Cappuccino', 'Macchiato',
      'Latte', 'Decaf', 'Espresso', 'Cold Brew', 'Flat White'
    ];

    await waitFor(() => {
      categories.forEach(cat => {
        expect(getByTestId(`category-${cat}`)).toBeTruthy();
      });
    });
  });

  it('resalta la categoría seleccionada', async () => {
    const selected = 'Latte';
    const { getByTestId } = renderComponent(selected);

    const selectedChip = getByTestId(`category-${selected}`);
    const selectedText = getByTestId(`category-text-${selected}`);

    await waitFor(() => {
      expect(selectedChip).toBeTruthy();
      expect(selectedText.props.children).toBe('Latte');
    });
  });

  it('llama a la función onSelectCategory al presionar una categoría', async () => {
    const { getByTestId } = renderComponent();

    const americano = getByTestId('category-Americano');

    await waitFor(() => {
      fireEvent.press(americano);
      expect(mockSelectCategory).toHaveBeenCalledWith('Americano');
    });
  });
});
