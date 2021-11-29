import {create} from 'react-test-renderer';
import {MovieDetails} from "../MovieDetails";

describe('MovieDetails', () => {
  it('should create simple MovieDetails component', () => {
    const handleSearchBtnClick = jest.fn();
    const details = {
      title: 'tests title',
      release_date: '2021-01-01',
      genres: ['Drama'],
      poster_path: 'https://posterpath.com',
      overview: 'overview',
      runtime: 108,
      vote_average: 9
    };

    const component = create(<MovieDetails handleSearchBtnClick={handleSearchBtnClick} details={details}/>);

    expect(component).toMatchSnapshot();
  })
})
