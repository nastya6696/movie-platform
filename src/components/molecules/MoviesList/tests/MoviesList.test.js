import {MoviesList} from "../MoviesList";
import {create} from 'react-test-renderer';


jest.mock('../../../atoms/ErrorBoundary', () => ({
  ErrorBoundary: (({children, title}) => `
     (--- ErrorBoundary ---): props {
      children: ${children},
      title: ${title}
     }`
  )
}));

describe('MoviesList', () => {
  it('should create simple MoviesList component', () => {
    const movies = [
      {
        id: 1,
        title: 'movie1'
      },
      {
        id: 2,
        title: 'movie2'
      },
      {
        id: 3,
        title: 'movie3'
      }
    ]
    const component = create(<MoviesList movies={movies}/>);

    expect(component).toMatchSnapshot();
  })
});
