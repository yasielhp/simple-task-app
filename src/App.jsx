import { Layout, TaskAdd, TaskLists } from './components';
import { useTasks } from './utils/hooks/';
export const App = () => {
  const {
    tasks,
    totalTasks,
    pendingTasks,
    handleNewTask,
    handleDeleteTask,
    handleToggleTask
  } = useTasks();
  return (
    <Layout>
      <TaskAdd
        onNewTask={handleNewTask}
      />
      <TaskLists
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
        totalTasks={totalTasks}
        pendingTasks={pendingTasks}
      />
    </Layout>
  );
}
