import React from "react";
import axios from "axios";

const listar = () => {
  axios.get(`http://localhost:3005/alunos`).then(
    resultado => {
      console.log(resultado.data);
    }
  );
}
const consultarUnico = id => {
  axios.get(`http://localhost:3005/alunos/${id}`).then(
    resultado => {
      console.log(resultado.data);
    }
  );
}
const excluir = id => {
  axios.delete(`http://localhost:3005/alunos/${id}`).then(
    resultado => {
      console.log(resultado.status);
    }
  );
}
const inserir = () => {
  const aluno = {id: "5", nome:"Carlos", matricula:"666"}
  axios.post(`http://localhost:3005/alunos`, aluno).then(
    resultado => {
      console.log(resultado.status);
    }
  )
}
const alterar = id =>{
  const aluno = {id: "5", nome:"Carlos", matricula:"666"}
  axios.put(`http://localhost:3005/alunos/${"5"}`, aluno).then(
    resultado => console.log(resultado.status)
  )
}

const App = () => {
  return (
    <div>
      <button onClick={listar}>Listar</button>
      <button onClick={() => consultarUnico("1")} >Consultar único</button>
      <button onClick={inserir} >Inserir</button>
      <button onClick={()=> alterar(5)} >Alterar</button>
      <button onClick={() => excluir(3)} >Excluir</button>
    </div>
  );
}

export default App;