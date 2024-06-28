import { StoryBook, useControls, useCreateStore } from '@aipmui/ui';

import { AiPMHub, AiPMHubProps } from '@/aipmorg';

export default () => {
  const store = useCreateStore();
  const control: AiPMHubProps | any = useControls(
    {
      extra: 'UI',
      size: {
        max: 240,
        min: 16,
        step: 4,
        value: 64,
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <AiPMHub type="combine" {...control} />
    </StoryBook>
  );
};
