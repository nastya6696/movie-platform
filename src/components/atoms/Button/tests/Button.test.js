import { create } from 'react-test-renderer';
import {Button} from "../Button";

describe('Button', () => {
  it('should create simple button component', () => {
    const handleClick = jest.fn();
    const component = create(<Button name='Test button name' handleClick={handleClick} />);

    expect(component).toMatchSnapshot();
  })
})
