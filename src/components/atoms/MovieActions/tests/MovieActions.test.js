import { create } from 'react-test-renderer';
import {MovieAction} from "../MovieAction";

describe('MovieAction', () => {
  it('should create simple MovieAction components', () => {
    const component = create(
      <MovieAction
        isOpen
        handleActionClick={jest.fn()}
        handleClose={jest.fn()}
        actions={['Action1', 'Action2']}
      />);

    expect(component).toMatchSnapshot();
  });

  it('should not create simple MovieAction components', () => {
    const component = create(<MovieAction handleActionClick={jest.fn()} handleClose={jest.fn()} />);

    expect(component).toMatchSnapshot();
  });
})
