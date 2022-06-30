import { Card, Grid, Text, Row,Col } from '@nextui-org/react';
import { TaskItem } from "./"

export const TaskLists = ({ tasks = [], onDeleteTask, onToggleTask, totalTasks, pendingTasks }) => {
  return (
    <Grid css={{ my: 10, textAlign: 'left' }}>
      <Row css={{display:'flex', justifyContent:'space-between', w:"100%", alignItems:'center'}}>
        <Col css={{textAlign:'left'}}>
          <Text h4>{ tasks.length > 0 && `My tasks`}</Text>
        </Col>
        <Col css={{textAlign:'right'}}>
          {
            tasks.length > 0 && (<Text>{pendingTasks} of {totalTasks }</Text>)
          }
        </Col>
      </Row>
    <Card css={{ my: 10 }}>
        { tasks.length > 0 ? (
          <Card.Body css={{ py: 10 }}>
            {
              tasks.map(task => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onDeleteTask={onDeleteTask}
                  onToggleTask={onToggleTask}
                />
              ))
            }
          </Card.Body>
        ) : (
          <Card.Body css={{ py: 10 }}>
              <Text css={{px:10, py:5}}>No tasks</Text>
          </Card.Body>)
        }
      </Card>
      </Grid>
  )
}
