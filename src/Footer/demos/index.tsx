import { Footer, FooterProps } from '@aipmui/ui';

const columns: FooterProps['columns'] = [
  {
    items: [
      {
        description: 'AIGC Components',
        openExternal: true,
        title: '🌿 AiPM UI',
        url: 'https://github.com/aipmhub/aipm-ui',
      },
      {
        description: 'Chatbot Client',
        openExternal: true,
        title: '🌿 AiPM Chat',
        url: 'https://github.com/aipmhub/aipm-chat',
      },
      {
        description: 'Node Flow Editor',
        openExternal: true,
        title: '🌿 AiPM Flow',
        url: 'https://github.com/aipmhub/aipm-flow',
      },
    ],
    title: 'Resources',
  },
  {
    items: [
      {
        description: 'AI Commit CLI',
        openExternal: true,
        title: '💌 AiPM Commit',
        url: 'https://github.com/aipmhub/aipm-cli-toolbox',
      },
      {
        description: 'Lint Config',
        openExternal: true,
        title: '📐 AiPM Lint',
        url: 'https://github.com/aipmhub/aipm-lint',
      },
    ],
    title: 'More Products',
  },
];

export default () => {
  return <Footer bottom="Copyright © 2024" columns={columns} />;
};
