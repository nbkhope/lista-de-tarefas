const baseUrl = 'http://localhost:3000';

export const fetchTarefas = () => {
  return fetch(`${baseUrl}/tarefas`)
    .then(response => {
      return response.json();
    });
};

// POST /tarefas, { texto: 'Nova tarefa' }
export const createTarefa = (tarefa) => {
  return fetch(`${baseUrl}/tarefas`, {
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
  return fetch(`${baseUrl}/tarefas/${tarefa.id}`, {
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
  return fetch(`${baseUrl}/tarefas/${tarefaId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
