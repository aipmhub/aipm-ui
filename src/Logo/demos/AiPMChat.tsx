import { StoryBook, useControls, useCreateStore } from '@aipmorg/ui';

import { AiPMChat, AiPMChatProps } from '@/aipmorg';

export default () => {
  const store = useCreateStore();
  const control: AiPMChatProps | any = useControls(
    {
      size: {
        max: 240,
        min: 16,
        step: 4,
        value: 64,
      },
      type: {
        options: ['3d', 'flat', 'mono', 'text', 'combine'],
        value: 'combine',
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <AiPMChat {...control} />
    </StoryBook>
  );
};
