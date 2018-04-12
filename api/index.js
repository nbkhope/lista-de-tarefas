export const fetchTarefas = () => {
  return fetch('http://localhost:3000/tarefas')
    .then(response => {
      return response.json();
    });
};

// POST /tarefas, { texto: 'Nova tarefa' }
export const createTarefa = (tarefa) => {
  return fetch('http://localhost:3000/tarefas', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tarefa)
  })
    .then(response => response.json());
};

export const updateTarefa = (tarefa) => {
  return fetch(`http://localhost:3000/tarefas/${tarefa.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tarefa)
  })
    .then(response => response.json());
};

// DELETE /tarefas/:tarefaId
export const deleteTarefa = (tarefaId) => {
  return fetch(`http://localhost:3000/tarefas/${tarefaId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
