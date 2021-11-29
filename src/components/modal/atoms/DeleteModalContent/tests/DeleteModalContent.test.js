import ShallowRenderer from 'react-test-renderer/shallow';
import React from "react";
import {DeleteModalContent} from "../DeleteModalContent";

let realUseContext;
let useContextMock;
// Setup mock
beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

jest.mock('../../../../atoms/Button', () => ({
  Button: (({ handleClick, name }) => `
     (--- Button ---): props {
     handleClick: '${handleClick}',
     name: '${name}'
    }`
  )
}));

test("should create simple DeleteModalContent component", () => {
  useContextMock.mockReturnValue(() => {});
  const component = new ShallowRenderer().render(
    <DeleteModalContent />
  );
  expect(component).toMatchSnapshot();
});
