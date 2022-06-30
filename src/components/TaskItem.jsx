import { Checkbox, Text, Tooltip, Grid } from '@nextui-org/react';
import { IconButton,IconDelete } from './';

export const TaskItem = ({task,onDeleteTask, onToggleTask}) => {
  return (
    <Grid key={task.id} css={{ display:'flex', justifyContent:'space-between', px:10, py:5} }>
      <Checkbox
        type="checkbox"
        color="success"
        checked={task.done}
        defaultSelected={task.done}
        onChange={() => onToggleTask(task.id)}
      >
        {
          task.done ? (
            <Text css={{ w: 'auto', whiteSpace: 'normal', opacity:'0.5', px: 5, wordBreak: 'break-all' }} del size={14} >{task.description}</Text>
          ) : (
            <Text css={{ w: 'auto', whiteSpace: 'normal', opacity:'1', px: 5, wordBreak: 'break-all' }} size={14}>{task.description}</Text>
          )}
      </Checkbox>
      <Tooltip
        content="Delete"
        color="error"
        onClick={() => onDeleteTask(task.id)}
      >
        <IconButton>
          <IconDelete/>
        </IconButton>
      </Tooltip>
    </Grid>
  )
}
