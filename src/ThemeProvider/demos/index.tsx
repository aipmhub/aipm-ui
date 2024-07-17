import { ThemeProvider } from '@aipmorg/ui';
import { Button } from 'antd';

export default () => {
  return (
    <ThemeProvider>
      <Button type="primary">AipmHub</Button>
    </ThemeProvider>
  );
};
