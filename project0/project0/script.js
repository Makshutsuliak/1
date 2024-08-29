const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

let todoCount = 0;
let uncheckedCount = 0;

function newTodo() {
  // Створюємо новий контейнер для TODO
  const todoItem = document.createElement('li');
  todoItem.className = classNames.TODO_ITEM;

  // Створюємо чекбокс
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      uncheckedCount--;
    } else {
      uncheckedCount++;
    }
    updateCounts();
  });

  // Створюємо текстове поле для TODO
  const todoText = document.createElement('span');
  todoText.className = classNames.TODO_TEXT;
  todoText.textContent = `TODO ${todoCount + 1}`;

  // Створюємо кнопку видалення
  const deleteButton = document.createElement('button');
  deleteButton.className = classNames.TODO_DELETE;
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    list.removeChild(todoItem);
    todoCount--;
    if (!checkbox.checked) {
      uncheckedCount--;
    }
    updateCounts();
  });

  // Додаємо чекбокс, текст і кнопку видалення до TODO елемента
  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteButton);

  // Додаємо новий TODO елемент до списку
  list.appendChild(todoItem);

  // Оновлюємо кількість завдань
  todoCount++;
  uncheckedCount++;
  updateCounts();
}

function updateCounts() {
  // Оновлюємо кількість всіх TODO
  itemCountSpan.textContent = todoCount;

  // Оновлюємо кількість незавершених TODO
  uncheckedCountSpan.textContent = uncheckedCount;
}
