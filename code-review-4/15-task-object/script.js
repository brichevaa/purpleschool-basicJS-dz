/*
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

*/

const toDoList = {
   tasks: [],
   lastId: 0,
   isValidData(data) {
      if (!data) {
         console.log('Данные не переданы');
         return false;
      }
      if (typeof data !== 'object') {
         console.log('Переданные данные не являются объектом');
         return false;
      }
      return true;
   },
   getTaskById(taskId) {
      const task = this.tasks.find(({ id }) => id === taskId);
      if (!task) {
         console.log(`Задача с id ${taskId} еще не добавлена в ваш список дел.`);
      }
      return task;
   },
   addTask(data) {
      const isValid = this.isValidData(data);
      if (!isValid) {
         return this;
      }

      this.tasks.push({ ...data, id: ++this.lastId });
      return this;
   },
   removeTask: function (id) {
      const task = this.getTaskById(id);
      if (task) {
         this.tasks = this.tasks.filter((el) => el.id !== id);
      }
      return this;
   },

   updateTask(id, newData) {
      const isValid = this.isValidData(newData);
      if (!isValid) {
         return this;
      }
      const task = this.getTaskById(id);

      if (task) {
         Object.assign(task, newData);
      }
      return this;
   },

   sortTasks: function (desc = false, sortBy = 'id') {
      const ALLOW_KEYS = [...new Set(this.tasks.map(Object.keys).flat())];

      if (!ALLOW_KEYS.includes(sortBy)) {
         console.log(`Нет такого ключа, доступные ключи: [${ALLOW_KEYS.join(', ')}]`);
         return;
      }

      this.tasks.sort(({ [sortBy]: a }, { [sortBy]: b }) => (desc ? b - a : a - b));
   },
};

const data1 = {
   title: 'Повесить картину',
   priority: Math.floor(Math.random() * 10 + 1),
};
const data2 = {
   title: 'Проверить почту',
   priority: Math.floor(Math.random() * 10 + 1),
};
const data3 = {
   title: 'Позвонить родителям',
   priority: Math.floor(Math.random() * 10 + 1),
};
const data4 = {
   title: 'Помыть посуду',
   priority: Math.floor(Math.random() * 10 + 1),
};
const data5 = {
   title: 'Генеральная уборка',
   priority: Math.floor(Math.random() * 10 + 1),
};

const updateData1 = {
   title: 'Купить продукты',
   description: ['Молоко', 'Яйца', 'Мясо курицы', 'Перец', 'Соль'],
   limit: 2000,
};
const updateData2 = {
   title: 'Оплатить коммунальные услуги',
   description: ['Газификация', 'электроэнергия', 'ЖКХ', 'обслуживание дома'],
   payBefore: new Date('2024-05-20').toLocaleDateString(),
};
const updateData3 = {
   title: 'Отправить рабочий отчёт',
   description: [
      'Затраченное время',
      'выполненные задачи',
      'не выполненные задачи',
      'текущая задача',
   ],
   sendBefore: new Date('2024-05-12 09:30').toLocaleString(),
};

toDoList.addTask(data1).addTask(data2).addTask(data3).addTask(data4).addTask(data5);
console.log(toDoList.tasks);

toDoList.updateTask(1, updateData1).updateTask(3, updateData2).updateTask(5, updateData3);
console.log(toDoList.tasks);

toDoList.addTask(data1).addTask(data3).addTask(data5);

toDoList.removeTask(2, 4);
console.log(toDoList.tasks);

toDoList.sortTasks();
console.log(toDoList.tasks);

toDoList.updateTask(55, 22);
toDoList.removeTask(23);

toDoList.sortTasks(true, 'priority');
console.log(toDoList.tasks);

toDoList.sortTasks(true);
console.log(toDoList.tasks);
