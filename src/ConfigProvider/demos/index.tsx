import { ConfigProvider, Logo } from '@aipmorg/ui';

export default () => {
  return (
    <ConfigProvider config={{ proxy: 'unpkg' }}>
      <Logo />
    </ConfigProvider>
  );
};
