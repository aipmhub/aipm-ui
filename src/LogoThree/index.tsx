'use client';

import { CSSProperties, memo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import { useCdnFn } from '@/ConfigProvider';
import Img from '@/Img';
import Spline, { type SplineProps } from '@/Spline';

const LOGO_3D = {
  path: 'assets/logo-3d.webp',
  pkg: '@aipmorg/assets-logo',
  version: '1.2.0',
};

export interface LogoThreeProps extends Partial<SplineProps> {
  className?: string;
  size?: number;
  style?: CSSProperties;
}

const LogoThree = memo<LogoThreeProps>(({ className, style, size = 128, onLoad, ...rest }) => {
  const genCdnUrl = useCdnFn();
  const [loading, setLoading] = useState(true);
  return (
    <Flexbox
      align={'center'}
      className={className}
      flex={'none'}
      justify={'center'}
      style={{ height: size, overflow: 'hidden', position: 'relative', width: size, ...style }}
    >
      {loading && (
        <Img
          alt={'logo'}
          height={size * 0.75}
          src={genCdnUrl(LOGO_3D)}
          style={{ position: 'absolute' }}
          width={size * 0.75}
        />
      )}
      <Spline
        onLoad={(splineApp) => {
          setLoading(false);
          onLoad?.(splineApp);
        }}
        scene={'https://gw.alipayobjects.com/os/kitchen/8LH7slSv3s/logo.splinecode'}
        style={{
          flex: 'none',
          height: size,
          width: size,
        }}
        {...rest}
      />
    </Flexbox>
  );
});

export default LogoThree;
