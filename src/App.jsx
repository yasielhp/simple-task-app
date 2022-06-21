import { Text } from '@nextui-org/react';
import { useState, useEffect } from 'react';

import Layout from './components/Layout';
import ListTask from './components/ListTask';
import TaskCreator from './components/TaskCreator';
import VisibilityTasks from './components/VisibilityTasks';

export default function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowComplete] = useState(false);

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) =>
        t.name == task.name ? { ...t, done: !t.done } : t
      )
    );
  };

  useEffect(() => {
    let data = localStorage.getItem('tasks');
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  const deleteTask = (taskName) => {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems(tasksItems.filter((task) => task !== taskName));
    }
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <Layout>
      <Text h4 css={{ textAlign: 'left', p: 20 }}>
        Create Task
      </Text>
      <TaskCreator
        createNewTask={createNewTask}
        tasksItems={tasksItems}
      />
      <ListTask
        tasks={tasksItems}
        toggleTask={toggleTask}
        titleText="My Tasks"
        deleteTask={deleteTask}
        textStatus="All task complete"
      />
      <VisibilityTasks
        isChecked={showCompleted}
        setShowComplete={(checked) => setShowComplete(checked)}
      />
      {showCompleted == true && (
        <ListTask
          tasks={tasksItems}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
          titleText={null}
          deleteTask={deleteTask}
        />
      )}
    </Layout>
  );
}
