import { create } from 'react-test-renderer';
import {fireEvent, render, screen} from '@testing-library/react';
import { Header } from '../Header';

jest.mock('../../LogoIcon', () => ({
  LogoIcon: (({ boldPart, thinPart }) => `
     (--- LogoIcon ---): props {
     boldPart: '${boldPart}',
     thinPart: '${thinPart}'
    }`
  )
}));

describe('Header', () => {
  it('should create simple Header component', () => {
    const btnClickHandler = jest.fn();
    const testBtnInfo = {
      name: 'testName',
      type: 'testType'
    }

    const component = create(
      <Header btnClickHandler={btnClickHandler} btnInfo={testBtnInfo}/>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should call addBtn click handler', () => {
    const btnClickHandler = jest.fn();
    const testBtnInfo = {
      name: 'testName',
      type: 'testType'
    }

    render(
      <Header btnClickHandler={btnClickHandler} btnInfo={testBtnInfo} />
    );
    expect(btnClickHandler).not.toHaveBeenCalled();

    fireEvent.click(screen.getByText(testBtnInfo.name));

    expect(btnClickHandler).toHaveBeenCalledTimes(1);
  })
});
