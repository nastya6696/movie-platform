import {create} from 'react-test-renderer';
import {ConfirmationModalContent} from "../ConfirmationModalContent";

describe('ConfirmationModalContent', () => {
  it('should create simple ConfirmationModalContent component', () => {
    const component = create(<ConfirmationModalContent />);

    expect(component).toMatchSnapshot();
  })
})
