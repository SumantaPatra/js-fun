import {render,screen} from '@testing-library/react'
import Counter from './counter'

describe("counter component",()=>{
    test('render init',()=>{
        render(<Counter/>)

        const text = screen.getByText("0");

        expect(text).toBeInTheDocument();
    })
})