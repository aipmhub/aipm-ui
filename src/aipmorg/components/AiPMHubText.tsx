import { memo } from 'react';

import { DivProps, SvgProps } from '@/types';

const AiPMHubText = memo<SvgProps & DivProps & { size?: number }>(
  ({ size = '1em', style, ...rest }) => (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 940 320"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>AiPMHub</title>
      <path
        d="M 227.00,92.00
           C 227.00,92.00 251.00,92.00 251.00,92.00
             251.00,92.00 251.00,115.00 251.00,115.00
             251.00,115.00 227.00,115.00 227.00,115.00
             227.00,115.00 227.00,92.00 227.00,92.00 Z
           M 144.00,93.00
           C 144.00,93.00 165.00,93.00 165.00,93.00
             165.00,93.00 172.49,94.02 172.49,94.02
             172.49,94.02 176.33,102.00 176.33,102.00
             176.33,102.00 183.00,122.00 183.00,122.00
             183.00,122.00 204.67,186.00 204.67,186.00
             204.67,186.00 215.00,218.00 215.00,218.00
             215.00,218.00 187.00,218.00 187.00,218.00
             187.00,218.00 180.00,192.00 180.00,192.00
             180.00,192.00 137.00,192.00 137.00,192.00
             137.00,192.00 131.86,210.00 131.86,210.00
             131.86,210.00 128.49,216.98 128.49,216.98
             128.49,216.98 121.00,218.00 121.00,218.00
             121.00,218.00 103.00,218.00 103.00,218.00
             103.00,218.00 114.00,183.00 114.00,183.00
             114.00,183.00 130.69,133.00 130.69,133.00
             130.69,133.00 144.00,93.00 144.00,93.00 Z
           M 274.00,93.00
           C 274.00,93.00 317.00,93.00 317.00,93.00
             330.24,93.00 341.71,92.33 352.96,100.93
             365.16,110.25 365.16,124.18 365.00,138.00
             364.93,143.87 363.70,150.74 361.01,156.00
             358.57,160.76 354.56,164.77 350.00,167.52
             337.63,174.98 314.48,173.00 300.00,173.00
             300.00,173.00 300.00,218.00 300.00,218.00
             300.00,218.00 281.00,218.00 281.00,218.00
             281.00,218.00 275.02,216.40 275.02,216.40
             275.02,216.40 274.00,209.00 274.00,209.00
             274.00,209.00 274.00,93.00 274.00,93.00 Z
           M 382.00,93.00
           C 382.00,93.00 419.00,93.00 419.00,93.00
             419.00,93.00 431.58,150.00 431.58,150.00
             431.58,150.00 440.00,187.00 440.00,187.00
             440.00,187.00 452.65,128.00 452.65,128.00
             452.65,128.00 460.00,93.00 460.00,93.00
             460.00,93.00 497.00,93.00 497.00,93.00
             497.00,93.00 497.00,218.00 497.00,218.00
             497.00,218.00 473.00,218.00 473.00,218.00
             473.00,218.00 473.00,154.00 473.00,154.00
             473.00,154.00 472.00,121.00 472.00,121.00
             472.00,121.00 465.65,153.00 465.65,153.00
             465.65,153.00 452.00,218.00 452.00,218.00
             452.00,218.00 427.00,218.00 427.00,218.00
             427.00,218.00 414.21,158.00 414.21,158.00
             414.21,158.00 406.00,121.00 406.00,121.00
             406.00,121.00 406.00,218.00 406.00,218.00
             406.00,218.00 382.00,218.00 382.00,218.00
             382.00,218.00 382.00,93.00 382.00,93.00 Z
           M 518.00,93.00
           C 518.00,93.00 544.00,93.00 544.00,93.00
             544.00,93.00 544.00,140.00 544.00,140.00
             544.00,140.00 588.00,140.00 588.00,140.00
             588.00,140.00 588.00,93.00 588.00,93.00
             588.00,93.00 614.00,93.00 614.00,93.00
             614.00,93.00 614.00,218.00 614.00,218.00
             614.00,218.00 588.00,218.00 588.00,218.00
             588.00,218.00 588.00,162.00 588.00,162.00
             588.00,162.00 544.00,162.00 544.00,162.00
             544.00,162.00 544.00,218.00 544.00,218.00
             544.00,218.00 518.00,218.00 518.00,218.00
             518.00,218.00 518.00,93.00 518.00,93.00 Z
           M 733.00,93.00
           C 733.00,93.00 757.00,93.00 757.00,93.00
             757.00,101.75 756.09,128.28 758.00,135.00
             765.26,119.99 795.04,117.21 809.05,137.00
             821.88,154.68 820.79,188.16 809.05,206.00
             800.25,218.97 781.13,224.02 767.00,217.45
             762.12,215.18 759.46,211.90 756.00,208.00
             756.00,208.00 756.00,218.00 756.00,218.00
             756.00,218.00 733.00,218.00 733.00,218.00
             733.00,218.00 733.00,93.00 733.00,93.00 Z
           M 300.00,151.00
           C 308.23,151.00 325.17,152.20 332.00,148.56
             342.30,143.06 342.97,124.14 332.98,118.01
             326.58,114.07 307.98,115.00 300.00,115.00
             300.00,115.00 300.00,151.00 300.00,151.00 Z
           M 159.00,124.00
           C 159.00,124.00 154.00,138.00 154.00,138.00
             154.00,138.00 144.00,170.00 144.00,170.00
             144.00,170.00 172.00,170.00 172.00,170.00
             172.00,170.00 159.00,124.00 159.00,124.00 Z
           M 227.00,125.00
           C 227.00,125.00 251.00,125.00 251.00,125.00
             251.00,125.00 251.00,218.00 251.00,218.00
             251.00,218.00 227.00,218.00 227.00,218.00
             227.00,218.00 227.00,125.00 227.00,125.00 Z
           M 634.00,125.00
           C 634.00,125.00 658.00,125.00 658.00,125.00
             658.00,125.00 658.00,181.00 658.00,181.00
             658.09,187.92 659.19,194.10 666.00,197.55
             674.99,202.10 684.99,194.80 687.51,186.00
             689.60,178.69 689.00,169.66 689.00,162.00
             689.00,162.00 689.00,125.00 689.00,125.00
             689.00,125.00 713.00,125.00 713.00,125.00
             713.00,125.00 713.00,218.00 713.00,218.00
             713.00,218.00 690.00,218.00 690.00,218.00
             690.00,218.00 689.00,207.00 689.00,207.00
             679.10,224.59 647.06,224.03 637.83,206.00
             633.28,197.10 634.00,185.71 634.00,176.00
             634.00,176.00 634.00,125.00 634.00,125.00 Z
           M 772.00,145.33
           C 768.17,146.25 765.15,147.27 762.34,150.21
             751.94,161.09 751.99,203.87 779.00,198.66
             786.60,197.20 790.71,190.03 792.32,183.00
             793.23,179.03 793.05,173.18 793.00,169.00
             792.84,155.77 787.12,143.79 772.00,145.33 Z"
      />
    </svg>
  ),
);

export default AiPMHubText;