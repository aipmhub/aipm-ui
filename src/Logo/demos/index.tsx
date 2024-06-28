import { StoryBook, useControls, useCreateStore } from '@aipmui/ui';

import { AiPMHub, AiPMHubProps } from '@/aipmorg';

export default () => {
  const store = useCreateStore();
  const control: AiPMHubProps | any = useControls(
    {
      size: {
        max: 240,
        min: 16,
        step: 4,
        value: 64,
      },
      type: {
        options: ['3d', 'flat', 'mono', 'text', 'combine'],
        value: '3d',
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <AiPMHub {...control} />
    </StoryBook>
  );
};
