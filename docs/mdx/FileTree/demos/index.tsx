import { Typography } from '@aipmui/ui';
import { File, FileTree, Folder } from '@aipmui/ui/mdx';

export default () => (
  <Typography>
    <FileTree>
      <Folder defaultOpen name="pages">
        <File name="_meta.json" />
        <File name="contact.md" />
        <File name="index.mdx" />
        <Folder name="about">
          <File name="_meta.json" />
          <File name="legal.md" />
          <File name="index.mdx" />
        </Folder>
      </Folder>
    </FileTree>
  </Typography>
);
