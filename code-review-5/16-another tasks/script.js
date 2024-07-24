// toDoList из прошлого задания

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
      // console.log(taskId);
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
      console.log(id, newData);
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

      this.tasks.sort(({ [sortBy]: a }, { [sortBy]: b }) => (desc ? a - b : b - a));
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

// новый объект
const newTask = {
   tasks: [],
   lastId: 0,
};

const dataNew1 = {
   title: 'Купить вещи в отпуск',
   description: ['Солнцезащитный крем', 'Очки', 'Панама', 'Купальник'],
   priority: Math.floor(Math.random() * 10 + 1),
};

const dataNew2 = {
   title: 'Приготовить пасту карбонара',
   description: ['Макароны', 'Сливки', 'Курица', 'Грибы'],
   priority: Math.floor(Math.random() * 10 + 1),
};

const dataNew3 = {
   title: 'Сделать практику по программированию',
   description: ['Задача1', 'Задача2', 'Задача3', 'Задача4'],
   priority: Math.floor(Math.random() * 10 + 1),
};

const updateDataNew2 = {
   title: 'Приготовить пасту болоньезе',
   description: ['Макароны', 'Томатная паста', 'Фарш', 'Сыр'],
   timing: 90,
};

newTask.isValidData = toDoList.isValidData;
newTask.getTaskById = toDoList.getTaskById;

const addTaskFunction = toDoList.addTask;
const removeTaskFunction = toDoList.removeTask;
const updateTaskFunction = toDoList.updateTask;
const sortTasksFunction = toDoList.sortTasks;

addTaskFunction.call(newTask, dataNew1);
addTaskFunction.call(newTask, dataNew2);
addTaskFunction.call(newTask, dataNew3);
console.log(newTask.tasks);

removeTaskFunction.call(newTask, 3);
console.log(newTask.tasks);

sortTasksFunction.call(newTask, true, 'priority');
console.log(newTask.tasks);

updateTaskFunction.call(newTask, 2, updateDataNew2);
console.log(newTask.tasks);

sortTasksFunction.call(newTask, true, 'id');
console.log(newTask.tasks);
