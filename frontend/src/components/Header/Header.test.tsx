import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { LoadingContext } from '../../context/loading';
import { MemoryRouter } from 'react-router-dom';

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <MemoryRouter>
      <LoadingContext.Provider value={providerProps}>{ui}</LoadingContext.Provider>
    </MemoryRouter>,
    renderOptions   
  );
}

describe("test Header component", () => {
    let providerProps : {isLoading: boolean}
  
    beforeEach(() => {
      providerProps = {
        isLoading: false,
      }
    })

    test('renders content', () => {
      const component = customRender(<Header />, {providerProps});
      component.getByText('BeerZon');
    });

    test('should render loader when isLoading is true', () => {
      providerProps.isLoading = true;

      const component = customRender(<Header />, {providerProps});
      const loader = component.getAllByTestId('loader');
      expect(loader).toBeTruthy()
    })

    test ('should render svg when isLoading is true', () => {
      providerProps.isLoading = true;

      const component = customRender(<Header />, {providerProps});
      const svg = component.container.querySelector('svg');
      expect(svg).toBeTruthy();
    })
    

})