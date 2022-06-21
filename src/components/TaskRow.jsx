import { Checkbox, Row, Text, Col, Tooltip } from '@nextui-org/react';
import { IconButton } from './IconButton';
import { DeleteIcon } from './DeleteIcon';

export default function TaskRow({ task, toggleTask, deleteTask }) {
  const handleDelete = () => {
    deleteTask(task);
  };

  return (
    <Row
      justify="space-between"
      align="center"
      key={task.name}
      css={{ py: 4, px: 10 }}
    >
      <Col css={{ d: 'flex' }}>
        <Checkbox
          type="checkbox"
          checked={task.done}
          color="success"
          onChange={() => toggleTask(task)}
          lineThrough={task.done}
          defaultSelected={task.done}
        >
          <Text>{task.name}</Text>
        </Checkbox>
      </Col>
      <Col css={{ w: '5%' }}>
        <Tooltip
          content="Delete"
          color="error"
          onClick={handleDelete}
        >
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Col>
    </Row>
  );
}
