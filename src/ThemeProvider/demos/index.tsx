import { ThemeProvider } from '@lobehub/ui';
import { Button } from 'antd';

export default () => {
  return (
    <ThemeProvider>
      <Button type="primary">AipmHub</Button>
    </ThemeProvider>
  );
};
