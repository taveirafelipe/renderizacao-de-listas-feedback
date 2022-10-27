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

  export function Lista(props){
    return(
        <ListaContainer>
        <ul>
          {(props.listaExcluidas).map((tarefa, index) => {
            return (
              <Excluidos key={index}>
                <p><s>{tarefa}</s></p>
              </Excluidos>
            );
          })}
        </ul>
      </ListaContainer>
    )
    }