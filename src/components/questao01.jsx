import { useEffect, useState } from 'react';

function Questao01X() {
  // Array de objetos representando os alunos
  const students = [
    { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
    { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
    { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } },
    { nome: "Jeff", notas: { ap1: 0, ap2: 10.0 } },
    { nome: "Thiago", notas: { ap1: 3.4, ap2: 5.6 } },
    { nome: "Laris", notas: { ap1: 8.8, ap2: 0 } }
  ];

  const [averages, setAverages] = useState([]);

  // Filtragem dos alunos reprovados com base nas médias
  const failedStudents = students
    .filter((student, index) => (averages[index] <= 5.0))
    .map((student) => student.nome);

  return (
    <div>
      <h2> Alunos Reprovados: </h2>
      <div>
        {/* Renderização dos alunos reprovados */}
        {failedStudents.map((student) => (
          <div key={student}>{student}</div>
        ))}
      </div>
      <Questao01Y students={students} setAverages={setAverages}/>
    </div>
  );
};

const Questao01Y = ({ students, setAverages }) => {
  useEffect(() => {
    const calculateAverages = () => {
      // Cálculo das médias dos alunos
      const studentAverages = students.map((student) => (student.notas.ap1 + student.notas.ap2) / 2);
      setAverages(studentAverages);
    };

    calculateAverages();
  }, [students, setAverages]);

  return null;
};

export default Questao01X;
