import {create} from "react-test-renderer";
import {NoMatchPage} from "../NoMatchPage";

describe('NoMatchPage', () => {
  it('should render simple NoMatchPage component', () => {
    const component = create(<NoMatchPage />);

    expect(component).toMatchSnapshot();
  })
})
