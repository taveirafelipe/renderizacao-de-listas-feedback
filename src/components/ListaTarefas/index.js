import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
  Excluidos
} from "./styled";
import {Lista} from "./ListaTarefas"
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [listaExcluidas, setListaExcluidas] = useState(["Teste"]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    const listaEx = lista.filter((item) => item === tarefa);
        
    
    setLista(listaFiltrada);

    const novaListaExcluida = [...listaExcluidas, listaEx];
    setListaExcluidas(novaListaExcluida);
    
  };

  const onKeyPressed = (event) =>{
    if(event.key == "Enter"){
      adicionaTarefa()
    }
  }

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyDown={onKeyPressed}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal/>
      <Lista listaExcluidas={listaExcluidas}/>
      {/* <ListaContainer>
        <ul>
          {listaExcluidas.map((tarefa, index) => {
            return (
              <Excluidos key={index}>
                <p><s>{tarefa}</s></p>
              </Excluidos>
            );
          })}
        </ul>
      </ListaContainer> */}
    </ListaTarefasContainer>
  );
}
