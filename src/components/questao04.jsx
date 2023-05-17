/*import React, { createContext, useContext } from 'react';

// Criação do contexto
const UserContext = createContext();

// Componente de nível mais alto que provê o contexto
const App = () => {
  const user = { name: 'John Doe', age: 25 };

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>Meu App</h1>
        <ComponentA />
      </div>
    </UserContext.Provider>
  );
};

// Componente que consome o contexto
const ComponentA = () => {
  return (
    <div>
      <h2>Componente A</h2>
      <ComponentB />
    </div>
  );
};

// Componente que consome o contexto
const ComponentB = () => {
  // Acessando o contexto através do hook useContext
  const user = useContext(UserContext);

  return (
    <div>
      <h3>Componente B</h3>
      <p>Nome: {user.name}</p>
      <p>Idade: {user.age}</p>
    </div>
  );
};

export default App;*/

/*Nesse exemplo, temos o componente App que é o componente de nível mais alto e provê o contexto UserContext com o valor do objeto "user". O componente ComponentB consome esse contexto utilizando o hook useContext(UserContext) para acessar as propriedades name e age do objeto user diretamente, sem precisar passá-lo através de props intermediárias.

Dessa forma, podemos evitar o "props drilling" e simplificar o código, pois os componentes podem acessar o contexto diretamente quando necessário, sem precisar passar manualmente as props através dos componentes intermediários.

O uso de contextos é especialmente útil em situações em que temos vários componentes aninhados que precisam compartilhar dados ou funcionalidades comuns, como informações de autenticação, configurações globais, temas, etc.*/