/**
 * @jest-environment jsdom
 */

/* eslint-disable indent */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { Provider } from '../../state/provider';
import { reducer, initialState } from '../../state/reducer';

describe('Color Picker', () => {
  it('renders a color to screen with history controls', async () => {
    render(
      <Provider reducer={reducer} 
      initialState={initialState}>
    <App />
    </Provider>
    );
  
      const undo = await screen.getByRole('button', { name: 'undo' });
      const redo = await screen.getByRole('button', { name: 'redo' });

      const colorPicker = screen.getByAltText('colorPicker');
      const colorDisplay = screen.getByRole('main', { name: colorDisplay });

      fireEvent.input(colorPicker, { target: { value: '#ff0000' } });
      expect(colorPicker).toHaveProperty('value', '#ff0000');
      
      fireEvent.input(colorPicker, { target: { value: '#ff0001' } });
      expect(colorPicker).toHaveProperty('value', '#ff0001');

      userEvent.click(undo);
      expect(colorPicker).toHaveProperty('value', '#ff0000');
      
      userEvent.click(redo);
      expect(colorPicker).toHaveProperty('value', '#ff0001');
  });
});
