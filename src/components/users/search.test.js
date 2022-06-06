import React from 'react'
import { render,screen, fireEvent ,waitForElementToBeRemoved} from '@testing-library/react'
import Search from './Search'
import '@testing-library/jest-dom/extend-expect'

describe('Input value', () => {
    it('updates on change', async() => {
      const setSearch = jest.fn((value) => {})
      
      render(<Search setSearch={setSearch}/>)
  
      const searchInput = screen.queryByPlaceholderText('Search Users...')
  
      fireEvent.change(searchInput, { target: { value: 'test' } })
  
      expect(searchInput.value).toBe('test')

   //Loading state displays and gets removed once results are displayed
   //await waitForElementToBeRemoved(() => screen.queryByText(/Loading .../i));


    })
  })