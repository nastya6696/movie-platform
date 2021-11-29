import {Movies} from "../Movies";
import {create} from 'react-test-renderer';

jest.mock('../../ResultsFilter', () => ({
  ResultsFilter: (({ children }) => `
     (--- ResultsFilter ---): props {
     children: '${children}'
    }`
  )
}));

jest.mock('../../SortingSelect', () => ({
  SortingSelect: (() => `
     (--- SortingSelect ---)`
  )
}));

jest.mock('../../MoviesList', () => ({
  MoviesList: (({ movies }) => `
     (--- ResultsFilter ---): props {
     movies: '${movies}'
    }`
  )
}));

describe('Movies', () => {
  it('should create simple Movies component', () => {
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
    const component = create(<Movies movies={movies}/>);

    expect(component).toMatchSnapshot();
  })
});
