import {Footer} from "../Footer";
import {create} from 'react-test-renderer';

jest.mock('../../../atoms/LogoIcon', () => ({
  LogoIcon: (({ boldPart, thinPart }) => `
     (--- LogoIcon ---): props {
     boldPart: '${boldPart}',
     thinPart: '${thinPart}'
    }`
  )
}));

describe('Footer', () => {
  it('should create simple Footer component', () => {
    const component = create(<Footer />);

    expect(component).toMatchSnapshot();
  })
});
