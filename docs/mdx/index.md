---
nav: Mdx
group: Components
title: mdxComponents
atomId: mdxComponents
apiHeader:
  pkg: '@aipmorg/ui/mdx'
  docUrl: 'https://github.com/aipmhub/aipm-ui/tree/master/docs/mdx/index.md'
  sourceUrl: 'https://github.com/aipmhub/aipm-ui/tree/master/src/mdx/mdxComponents.ts'
---

## Usage

```ts
import { mdxComponents } from '@aipmorg/ui/mdx';
import { RemoteContent } from 'nextra/components';

const RemoteMDX = (props: any) => (
  <RemoteContent components={mdxComponents} {...props} />
);

export default RemoteMDX;
```
