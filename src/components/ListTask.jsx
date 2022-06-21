import { Card, Grid, Row, Text, Col } from '@nextui-org/react';

import TaskRow from './TaskRow';

export default function ListTask({
  tasks,
  toggleTask,
  showCompleted = false,
  titleText,
  deleteTask,
}) {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow
          task={task}
          key={task.name}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ));
  };

  return (
    <Grid>
      {titleText !== null ? (
        <Row
          align="center"
          justify="space-between"
          css={{ textAlign: 'left', p: 20 }}
        >
          <Col>
            <Text h4>{titleText}</Text>
          </Col>
        </Row>
      ) : (
        <Row css={{ p: 10 }}></Row>
      )}
      <Card>
        {!tasks.length ? (
          <Text css={{ textAlign: 'left', p: 20 }}>No tasks</Text>
        ) : (
          <Card.Body css={{ py: 6 }}>
            {taskTableRows(showCompleted)}
          </Card.Body>
        )}
      </Card>
    </Grid>
  );
}
