import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// import '@testing-library/jest-dom/extend-expect';
import Button from "../Button";

describe('<Button />', () => {
    test('renders the button with children', () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    test('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        fireEvent.click(screen.getByText('Click Me'));
        expect(handleClick).toHaveBeenCalledTimes(1)
    });
});