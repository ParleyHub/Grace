import { Button, Input } from '@parley-hub/grace';

const App = () => (
  <>
  <Button label="Test" variant="success" onClick={() => alert('Hi')} />

  <Input placeholder="Username" inputSize="large" />
  </>
);

export default App;
