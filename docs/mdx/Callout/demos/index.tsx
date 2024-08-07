import { Typography } from '@aipmorg/ui';
import { Callout } from '@aipmorg/ui/mdx';

export default () => (
  <Typography>
    <Callout type={'error'}>
      A callout is a short piece of text intended to attract attention.
    </Callout>
    <Callout type={'warning'}>
      A callout is a short piece of text intended to attract attention.
    </Callout>
    <Callout type={'tip'}>
      A callout is a short piece of text intended to attract attention.
    </Callout>
    <Callout type={'info'}>
      A callout is a short piece of text intended to attract attention.
    </Callout>
    <Callout type={'important'}>
      A callout is a short piece of text intended to attract attention.
    </Callout>
  </Typography>
);
