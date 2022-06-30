import { Card, Input, Button, Grid, Text } from '@nextui-org/react';
import { useForm } from "../utils/hooks"

export const TaskAdd = ({ onNewTask }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;

    const newTask = {
      id: new Date().getTime(),
      done: false,
      description: description,
    }
    onNewTask(newTask);
    onResetForm();
  }

  return (
    <Grid css={{ my: 10, textAlign: 'left' }}>
      <Text h4>Create task</Text>
      <Card css={{ px: 10 }}>
        <Card.Body>
          <form onSubmit={onFormSubmit}>
            <Input
              bordered
              color="primary"
              name="description"
              type='text'
              aria-label="description"
              placeholder="Create new task..."
              css={{ w: '100%', mb: 8, pb: 5 }}
              value={ description }
              onChange={onInputChange}
            />
            <Button
              type="submit"
              css={{ w: '100%'}}
              disabled={description.length <= 1}
            >
              Create
            </Button>
          </form>
        </Card.Body>
      </Card>
    </Grid>
  )
}
