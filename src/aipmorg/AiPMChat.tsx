'use client';

import { useTheme } from 'antd-style';
import { type ReactNode, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { DivProps } from '@/types';

import AiPMLogoText from './components/AiPMChatText';
import AiPMDivider from './components/AiPMDivider';
import AiPMLogo3d from './components/AiPMLogo3d';
import AiPMLogoFlat from './components/AiPMLogoFlat';
import AiPMLogoMono from './components/AiPMLogoMono';
import { useStyles } from './style';

export interface AiPMChatProps extends DivProps {
  /**
   * @description Additional React Node to be rendered next to the logo
   */
  extra?: ReactNode;
  /**
   * @description Size of the logo in pixels
   * @default 32
   */
  size?: number;
  /**
   * @description Type of the logo to be rendered
   * @default '3d'
   */
  type?: '3d' | 'flat' | 'mono' | 'text' | 'combine';
}

const AiPMChat = memo<AiPMChatProps>(
  ({ type = '3d', size = 32, style, extra, className, ...rest }) => {
    const theme = useTheme();
    const { styles } = useStyles();
    let logoComponent: ReactNode;

    switch (type) {
      case '3d': {
        logoComponent = <AiPMLogo3d alt={'AiPMChat'} size={size} {...rest} />;
        break;
      }
      case 'flat': {
        logoComponent = <AiPMLogoFlat size={size} style={style} />;
        break;
      }
      case 'mono': {
        logoComponent = <AiPMLogoMono size={size} style={style} />;
        break;
      }
      case 'text': {
        logoComponent = (
          <AiPMLogoText className={className} size={size} style={style} {...(rest as any)} />
        );
        break;
      }
      case 'combine': {
        logoComponent = (
          <>
            <AiPMLogo3d alt="AiPMChat" size={size} />
            <AiPMLogoText size={size} style={{ marginLeft: Math.round(size / 4) }} />
          </>
        );

        if (!extra)
          logoComponent = (
            <Flexbox align={'center'} className={className} flex={'none'} horizontal style={style}>
              {logoComponent}
            </Flexbox>
          );

        break;
      }
    }

    if (!extra) return logoComponent;

    const extraSize = Math.round((size / 3) * 1.9);

    return (
      <Flexbox
        align={'center'}
        className={className}
        flex={'none'}
        horizontal
        style={style}
        {...rest}
      >
        {logoComponent}
        <AiPMDivider size={extraSize} style={{ color: theme.colorFill }} />
        <div className={styles.extraTitle} style={{ fontSize: extraSize }}>
          {extra}
        </div>
      </Flexbox>
    );
  },
);

export default AiPMChat;
