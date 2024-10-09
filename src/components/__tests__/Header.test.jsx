import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";

test('renders correctly', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
});