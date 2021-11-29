import ShallowRenderer from "react-test-renderer/shallow";
import React from "react";
import {MovieFormContent} from "../MovieFormContent";

test('should create simple MovieFormContent component', () => {
  const component = new ShallowRenderer().render(
    <MovieFormContent>
      any children
    </MovieFormContent>
  );
  expect(component).toMatchSnapshot();
})
