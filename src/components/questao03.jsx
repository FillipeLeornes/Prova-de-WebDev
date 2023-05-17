import { useEffect, useState } from 'react';

const Questao03 = () => {
  // Estado para armazenar os países
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Chamada da API para obter os países da região da Europa com as propriedades de capital e população
    fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
      .then(response => response.json())
      .then(data => {
        // Ordenação dos países por população, do maior para o menor
        const sortedCountries = data.sort((a, b) => b.population - a.population);
        // Atualização do estado com os países ordenados
        setCountries(sortedCountries);
      })
      .catch(error => console.log(error));
  }, []);

  // Extração da capital do país com a maior população
  const capitalMaiorPopulacao = countries[0]?.capital[0];
  // Extração da capital do país com a menor população
  const capitalMenorPopulacao = countries[countries.length - 1]?.capital[0];

  return (
    <div>
      <h2>Capitais dos países com maior e menor população:</h2>
      <p>Maior população: {capitalMaiorPopulacao}</p>
      <p>Menor população: {capitalMenorPopulacao}</p>
    </div>
  );
}

export default Questao03;
