import React, { render, screen } from '@testing-library/react';
import App from '../App';
import Header from '../components/Header';
import WelcomeSection from '../components/WelcomeSection';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import WorkerScript from '../web-worker';

// Mock the worker to avoid real worker initialization in tests
jest.mock('../web-worker.js', () => ({
  default: jest.fn(() => ({
    postMessage: jest.fn(),
    onmessage: jest.fn(),
  })),
}));

jest.mock('../components/Header');
jest.mock('../components/WelcomeSection');
jest.mock('../components/Projects');
jest.mock('../components/Contact');
jest.mock('../components/Footer');

describe('App Component', () => {
  beforeEach(() => {
    Header.mockImplementation(() => <div>Header Component</div>);
    WelcomeSection.mockImplementation(() => <div>WelcomeSection Component</div>);
    Projects.mockImplementation(() => <div>Projects Component</div>);
    Contact.mockImplementation(() => <div>Contact Component</div>);
    Footer.mockImplementation(() => <div>Footer Component</div>);
  });

  test('renders all the components correctly', () => {
    render(<App />);
    expect(screen.getByText('Header Component')).toBeInTheDocument();
    expect(screen.getByText('WelcomeSection Component')).toBeInTheDocument();
    expect(screen.getByText('Projects Component')).toBeInTheDocument();
    expect(screen.getByText('Contact Component')).toBeInTheDocument();
    expect(screen.getByText('Footer Component')).toBeInTheDocument();
  });

  // test('sends message to worker and handles response', async () => {
  //   render(<App />);

  //   // Assert that the worker was created and a messages was sent
  //   expect(WorkerScript).toHaveBeenCalledTimes(1);
  //   const workerInstance = WorkerScript.mock.instances[0];
  //   expect(workerInstance.postMessage).toHaveBeenCalledWith(10);

  //   // Simulate a message from the worker
  //   workerInstance.onmessage.mock.calls[0][0].data = 'Result from worker';

  //   // Use `await` to wait for potential async operations in the component
  //   await new Promise((resolve) => setTimeout(resolve, 0));

  //   // Assert that the component handles the workaer's response
  //   // (e.g., update state, display a message, etc.)
  // });
});