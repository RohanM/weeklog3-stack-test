import { render, fireEvent, screen } from '@testing-library/react'

import Home from './index'

const mockRouter = { push: jest.fn() };
jest.mock('next/router', () =>
  ({ useRouter: () => mockRouter })
);

describe("Home page", () => {
  it("accepts my name then takes me to the chat", async () => {
    render(<Home />);

    fireEvent.change(
      screen.getByPlaceholderText("Your name..."),
      { target: { value: "Montgomery" } }
    );
    fireEvent.click(screen.getByText("Begin"));

    expect(mockRouter.push).toHaveBeenCalledWith("/chat/Montgomery");
  });
});
