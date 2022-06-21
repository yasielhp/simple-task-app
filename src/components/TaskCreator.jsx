import { Card, Input, Button } from '@nextui-org/react';
import { useState } from 'react';

export default function TaskCreator({ createNewTask, tasksItems }) {
  const [newTaskName, setNewTaskName] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName('');
  };
  const handelChange = (e) => setNewTaskName(e.target.value);

  return (
    <Card css={{ px: 10 }}>
      <Card.Body>
        <form onSubmit={handelSubmit}>
          <Input
            css={{ w: '100%', mb: 8, pb: 5 }}
            aria-label="Create new task..."
            placeholder="Create new task..."
            value={newTaskName}
            bordered
            color="primary"
            onChange={handelChange}
            helperText={
              tasksItems.find((task) => task.name === newTaskName) &&
              'This task already exists'
            }
          />
          <Button
            disabled={tasksItems.find(
              (task) => task.name === newTaskName
            )}
            type="submit"
            css={{ w: '100%', mt: 20 }}
          >
            Create
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
}
