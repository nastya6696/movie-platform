import { create } from 'react-test-renderer';
import {LogoIcon} from "../LogoIcon";

describe('LogoIcon', () => {
  it('should create simple LogoIcon component', () => {
    const component = create(<LogoIcon thinPart='thinPart' boldPart='boldPart' />);
    expect(component).toMatchSnapshot();
  })
})
