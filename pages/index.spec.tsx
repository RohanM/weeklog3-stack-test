import { mount } from 'enzyme'

import Home from './index'
import EnterName from '../components/EnterName'

const mockRouter = { push: jest.fn() };
jest.mock('next/router', () =>
  ({ useRouter: () => mockRouter })
);

describe("Home page", () => {
  it("accepts my name then takes me to the chat", async () => {
    const wrapper = mount(<Home />);

    wrapper.find(EnterName).find("input").simulate("change", { target: { value: "Montgomery" } });
    wrapper.find(EnterName).find("form").simulate("submit");

    expect(mockRouter.push).toHaveBeenCalledWith("/chat/Montgomery");
  });
});
