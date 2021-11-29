import {create} from "react-test-renderer";
import {ErrorBoundary} from "../ErrorBoundary";

describe('ErrorBoundary', () => {
  it('should create simple ErrorBoundary component wrapper', () => {
    const component = create(
      <ErrorBoundary />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render correct component without ErrorBoundary component wrapper', () => {
    const component = create(
      <ErrorBoundary title='title'>
        <div>Inner content</div>
      </ErrorBoundary>
    );

    expect(component.toJSON()).toMatchSnapshot();
  })
})
