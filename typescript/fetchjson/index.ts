import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

//define the structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {

//  const todo = response.data; // -> undefined
//  const ID = todo.ID;	// -> undefined. not capital "ID" but "id"
//  const title = todo.Title;// -> undefined. not "Title" but "title"
//  const finished = todo.finished;// -> undefined. not "finished" but "completed"

  const todo = response.data as Todo; //because of Todo, complier knows how todo looks like
  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  //ogTodo(ID, finished, title); //error catch
  logTodo(ID, title, finished);

});

const logTodo = (ID : number, title : string, finished : boolean) => {

  console.log(`
    The Todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
  `);

}
