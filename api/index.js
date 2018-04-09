export const fetchTarefas = () => {
  return fetch('http://localhost:3000/tarefas')
    .then(response => {
      return response.json();
    });
};
