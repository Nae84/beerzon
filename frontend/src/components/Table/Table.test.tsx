import { fireEvent, getAllByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { BottlesContext } from '../../context/bottles';
import Table from './Table';
import { LitersAmmount } from '../../lib/types';
import mockData from '../../lib/mocks';


const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <MemoryRouter>
      <BottlesContext.Provider value={providerProps}>{ui}</BottlesContext.Provider>
    </MemoryRouter>,
    renderOptions   
  );
}

describe('test Table component', () => {
  let providerProps: {bottles: LitersAmmount}
  
    beforeEach(() => {
      providerProps = {
        bottles: {
          "15L": 1,
          "5L": 1,
          "3L": 1,
          "1L": 1
        }
      }
    })


  test('should render correctly', () => {
    const { container } = customRender(<Table data={[]}/>, { providerProps })
    expect(container).toBeTruthy()
  })

  test('should render shops names correctly with data', () => {
    const component = customRender(<Table data={mockData}/>, { providerProps })
    
    component.getByText('Shop Cool')
    component.getByText('Shop not Cool')
  })

  test('should render correct best shop', () => {  
    providerProps.bottles = {
      "15L": 1,
      "5L": 0,
      "3L": 0,
      "1L": 0
    }

    const component = customRender(<Table data={mockData}/>, { providerProps })
    component.getByText('Best shop: Shop Cool with 10.3 €')
  })

  test('should highlight correctly best shop row', () => {  
    providerProps.bottles = {
      "15L": 1,
      "5L": 0,
      "3L": 0,
      "1L": 0
    }

    const component = customRender(<Table data={mockData}/>, { providerProps })

    const row = component.container.querySelector('.bg-green-100 td:nth-child(1)');
    expect(row?.textContent).toBe('Shop Cool')
  })



})