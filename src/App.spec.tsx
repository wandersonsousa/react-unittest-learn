import { render } from '@testing-library/react'
import TodoList from './Todolist';

describe("Todolist flux", () => {
    test("Should display a empty list in start", () => {
        const { getByRole, queryByRole } = render(<TodoList items={[]} />)
        expect(getByRole('list')).toBeInTheDocument()
        expect(queryByRole('listitem')).not.toBeInTheDocument()
    })
    test("Should display one list item", () => {
        const item = {
            id: '12',
            text: 'test'
        }
        const { getByRole, queryByRole } = render(<TodoList items={[item]} />)
        
        expect(getByRole('list')).toBeInTheDocument()
        expect(queryByRole('listitem')).toBeInTheDocument()
        expect(queryByRole('listitem')).toHaveTextContent(item.text)
    })
})