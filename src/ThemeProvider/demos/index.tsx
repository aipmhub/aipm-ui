import { ThemeProvider } from '@aipmui/ui';
import { Button } from 'antd';

export default () => {
  return (
    <ThemeProvider>
      <Button type="primary">AipmHub</Button>
    </ThemeProvider>
  );
};
