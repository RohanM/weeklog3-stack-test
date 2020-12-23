import { shallow } from 'enzyme'

import Home from './index'

import EnterName from '../components/EnterName'


describe("Home page", () => {
  it("renders a field to enter your name", () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(EnterName).length).toEqual(1);
  });
});
