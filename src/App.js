import './App.css';

export default function App() {
  const employees = [
    {id: 1, name: 'Alice', country: 'Austria'},
    {id: 2, name: 'Bob', country: 'Belgium'},
    {id: 3, name: 'Carl', country: 'Canada'},
    {id: 4, name: 'Dean', country: 'Denmark'},
    {id: 5, name: 'Ethan', country: 'Egypt'},
  ];

  return (
    <div>
      {employees.map(employee => {
        return (
          <div key={employee.id}>
            <h2>name: {employee.name}</h2>
            <h2>country: {employee.country}</h2>

            <hr />
          </div>
        );
      })}
    </div>
  );
}
