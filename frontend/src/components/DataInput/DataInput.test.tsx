import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { BottlesContext } from '../../context/bottles';
import { DataInput } from './DataInput';
import { LitersAmmount } from '../../lib/types';

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <MemoryRouter>
      <BottlesContext.Provider value={providerProps}>{ui}</BottlesContext.Provider>
    </MemoryRouter>,
    renderOptions   
  );
}

describe('test DataInput component', () => {
  let providerProps: {bottles: LitersAmmount, setBottles: jest.Mock}

  beforeEach(() => {
    providerProps = {
      bottles: {
        "15L": 0,
        "5L": 0,
        "3L": 0,
        "1L": 0
      },
      setBottles: jest.fn()
    }
  })

  test('should render correctly', () => {
    const { container } = customRender(<DataInput/>, { providerProps })
    expect(container).toBeTruthy()
  })

  test('should render liters distribution correctly', () => {
    const component = customRender(<DataInput/>, { providerProps })
    const input = component.container.querySelector('input');

    // should render 2 units of 5 liters
    fireEvent.change(input as HTMLInputElement, {target: {value: 10}})
    component.getByText('2 units of 5 liters')

    // should render 1 unit of 15 liters and 1 unit of 3 liters
    fireEvent.change(input as HTMLInputElement, {target: {value: 18}})
    component.getByText('1 units of 3 liters')
    component.getByText('1 units of 15 liters')

    // should render 1 unit of 1 liter and 1 unit of 3 liters and 1 unit of 5 liters and 1 unit of 15 liters
    fireEvent.change(input as HTMLInputElement, {target: {value: 24}})
    component.getByText('1 units of 1 liters')
    component.getByText('1 units of 3 liters')
    component.getByText('1 units of 5 liters')
    component.getByText('1 units of 15 liters')

    // should not render 1 unit of 1 liter
    fireEvent.change(input as HTMLInputElement, {target: {value: 2}})
    expect(screen.queryByText('1 units of 1 liters')).toBeNull()
  })  
})  