import { render, screen, waitFor } from '@testing-library/react';
import { act } from "react-dom/test-utils"
import App from './App';

describe("Test cases for App component", () => {
  test('renders App successfully', () => {
    render(<App />);
    const linkElement = screen.getByText(/GoDaddy Repo/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test("Test home page link click", () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
  });
  
  
  test("should fetch data for list", async () => {
    const fakeResponse = [{ title: "Test" , id: 1, name: "test"}]
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = mockedFetch;
    render(<App />);
    await act(async () => {
      await waitFor(() => expect(mockedFetch).toHaveBeenCalledTimes(1))
    })
  });
});
