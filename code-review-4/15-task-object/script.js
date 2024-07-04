const toDoList = {
   tasks: [
      {
         title: 'Помыть посуду',
         id: 1,
         priority: 1,
      },
   ],
   addTask: function (title, priority) {
      toDoList.tasks.push({
         title: title,
         id: toDoList.tasks.length + 1,
         priority: priority,
      });
   },
   removeTask: function (id) {
      this.tasks = this.tasks.filter((el) => el.id !== id);
   },
   updateTask: function (id, newTitle, newPriority) {
      const taskIndex = this.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
         this.tasks[taskIndex].title = newTitle;
         this.tasks[taskIndex].priority = newPriority;
      } else {
         console.log(`Задача с id ${id} еще не добавлена в ваш список дел.`);
      }
   },
   sortTasks: function (id) {
      // сортировка по возрастанию
      this.tasks.sort((a, b) => a.id - b.idy);

      // сортировка по убыванию
      // this.tasks.sort((a, b) => b.id - a.id);
   },
};

toDoList.addTask('Повесить картину', 2);
toDoList.addTask('Проверить почту', 2);
toDoList.addTask('Приготовить обед', 1);

toDoList.removeTask(3);

toDoList.updateTask(2, 'Сделать домашку', 1);
// toDoList.updateTask(6, 'ppp', 1);

toDoList.sortTasks();

console.log(toDoList.tasks);
