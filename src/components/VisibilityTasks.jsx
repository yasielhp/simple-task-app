import { Grid, Switch, Row, Col, Text } from '@nextui-org/react';
export default function VisibilityTasks({
  setShowComplete,
  isChecked,
}) {
  return (
    <Grid css={{ pt: 20, px: 0, m: 0 }}>
      <Row gap={2} css={{ m: 0 }}>
        <Col
          css={{
            display: 'flex',
          }}
        >
          <Text h4>Tasks Complete</Text>
        </Col>
        <Col
          css={{
            display: 'flex',
            direction: 'rtl',
            gap: 5,
          }}
        >
          <Switch
            bordered
            size="md"
            color="success"
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setShowComplete(e.target.checked)}
          />
          <Text size={14} css={{ pt: 4 }}>
            Show tasks complete
          </Text>
        </Col>
      </Row>
    </Grid>
  );
}
