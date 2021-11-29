import ShallowRenderer from "react-test-renderer/shallow";
import React from "react";
import {HeaderModal} from "../HeaderModal";

test('should create simple HeaderModal component', () => {
  const component = new ShallowRenderer().render(
    <HeaderModal title='Test modal header'/>
  );
  expect(component).toMatchSnapshot();
})
