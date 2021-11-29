import React from 'react';
import {Search} from "../Search";
import {create} from 'react-test-renderer';

jest.mock('../../../atoms/Button', () => ({
  Button: (({name, handleClick}) => `
     (--- Button ---): props {
      name: ${name},
      handleClick: ${handleClick}
     }`
  )
}));

describe('Search', () => {
  it('should create simple Search component', () => {
    const setSearchValue = jest.fn();
    jest.spyOn(React, 'useState')
      .mockImplementationOnce(() => ['', setSearchValue]);

    const component = create(<Search />);

    expect(component).toMatchSnapshot();
  })
});
