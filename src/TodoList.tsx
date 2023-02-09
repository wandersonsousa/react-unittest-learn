type Item = {
    id: string,
    text: string,
}
function TodoList({ items = [] }: { items?: Item[] }) {
    return (
        <div className="App">
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
