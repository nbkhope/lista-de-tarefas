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
