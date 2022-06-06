import {render, screen, wait, fireEvent} from '@testing-library/react';
import mockFetch from "./mocks/mockFetch";
import App from './App';

beforeEach(() => {
   jest.spyOn(window, "fetch").mockImplementation(mockFetch);
})

afterEach(() => {
   jest.restoreAllMocks();
});

test('renders the landing page', async () => {
   render(<App />);

   const linkElement = screen.getByText(/Welcome User/i);
   expect(linkElement).toBeInTheDocument();
   expect(screen.getByRole("button")).toHaveDisplayValue("Search");
   expect(await screen.findByTestId("search", { name: "husky"})).toBeInTheDocument()
   expect(screen.getByRole("button")).toBeInTheDocument();
});

test("should be able to search and display dog image results", async () => {

    const setSearch = jest.fn((value) => {})
    
    render(<App setSearch={setSearch}/>)

    const searchInput = screen.queryByPlaceholderText('Search Users...')

    fireEvent.change(searchInput, { target: { value: 'test' } })

    expect(searchInput.value).toBe('test')

       //Initiate the search request
 const searchBtn = screen.getByRole("button", { name: "Search" });
 fireEvent.click(searchBtn);


//await waitForElementToBeRemoved(() => screen.queryByText(/Loading ....../i));


    expect(screen.getByText('Loading ......')).toBeInTheDocument();
    

})