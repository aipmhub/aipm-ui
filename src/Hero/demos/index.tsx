import { Hero, HeroProps } from '@aipmorg/ui';

const actions: HeroProps['actions'] = [
  {
    icon: 'Github',
    link: 'https://github.com/aipmhub',
    text: 'Github',
  },
  {
    link: '/components/action-icon',
    text: 'Get Started',
    type: 'primary',
  },
];

export default () => {
  return (
    <Hero
      actions={actions}
      description="AiPM UI is an open-source UI component library for <br/>building chatbot web apps"
      title="Lobe <b>UI</b>"
    />
  );
};
