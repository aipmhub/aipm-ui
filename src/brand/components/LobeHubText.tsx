import { memo } from 'react';

import { DivProps, SvgProps } from '@/types';

const LobeHubText = memo<SvgProps & DivProps & { size?: number }>(
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
      <path d="M15 240.035V87.172h39.24V205.75h66.192v34.285H15zM183.731 242c-11.759 0-22.196-2.621-31.313-7.862-9.116-5.241-16.317-12.447-21.601-21.619-5.153-9.317-7.729-19.945-7.729-31.883 0-11.937 2.576-22.492 7.729-31.664 5.164-8.963 12.159-15.98 20.982-21.05l.619-.351c9.117-5.241 19.554-7.861 31.313-7.861s22.196 2.62 31.313 7.861c9.248 5.096 16.449 12.229 21.601 21.401 5.153 9.172 7.729 19.727 7.729 31.664 0 11.938-2.576 22.566-7.729 31.883-5.152 9.172-12.353 16.378-21.601 21.619-9.117 5.241-19.554 7.862-31.313 7.862zm0-32.975c4.36 0 8.191-1.092 11.494-3.275 3.436-2.184 6.144-5.387 8.126-9.609 1.982-4.367 2.973-9.536 2.973-15.505 0-5.968-.991-10.991-2.973-15.067-1.906-4.06-4.483-7.177-7.733-9.352l-.393-.257c-3.303-2.184-7.134-3.276-11.494-3.276-4.228 0-8.059 1.092-11.495 3.276-3.303 2.184-6.011 5.387-8.125 9.609-1.982 4.076-2.973 9.099-2.973 15.067 0 5.969.991 11.138 2.973 15.505 2.114 4.222 4.822 7.425 8.125 9.609 3.436 2.183 7.267 3.275 11.495 3.275zM295.508 78l-.001 54.042a34.071 34.071 0 016.541-5.781c6.474-4.367 14.269-6.551 23.385-6.551 9.777 0 18.629 2.475 26.557 7.424 7.872 4.835 14.105 11.684 18.7 20.546l.325.637c4.756 9.026 7.135 19.799 7.135 32.319 0 12.666-2.379 23.585-7.135 32.757-4.624 9.026-10.966 16.087-19.025 21.182-7.928 4.95-16.78 7.425-26.557 7.425-9.644 0-17.704-2.184-24.178-6.551-2.825-1.946-5.336-4.355-7.532-7.226l.001 11.812h-35.87V78h37.654zm21.998 74.684c-4.228 0-8.059 1.092-11.494 3.276-3.303 2.184-6.012 5.387-8.126 9.609-1.982 4.076-2.972 9.099-2.972 15.067 0 5.969.99 11.138 2.972 15.505 2.114 4.222 4.823 7.425 8.126 9.609 3.435 2.183 7.266 3.275 11.494 3.275s7.994-1.092 11.297-3.275c3.435-2.184 6.143-5.387 8.125-9.609 2.114-4.367 3.171-9.536 3.171-15.505 0-5.968-1.057-10.991-3.171-15.067-1.906-4.06-4.483-7.177-7.732-9.352l-.393-.257c-3.303-2.184-7.069-3.276-11.297-3.276zm105.335 38.653l.084.337a27.857 27.857 0 002.057 5.559c2.246 4.222 5.417 7.498 9.513 9.827 4.096 2.184 8.984 3.276 14.665 3.276 5.285 0 9.777-.801 13.477-2.403 3.579-1.632 7.1-4.025 10.564-7.182l.732-.679 19.818 22.711c-5.153 6.26-11.494 11.064-19.025 14.413-7.531 3.203-16.449 4.804-26.755 4.804-12.683 0-23.782-2.621-33.294-7.862-9.381-5.386-16.713-12.665-21.998-21.837-5.153-9.317-7.729-19.872-7.729-31.665 0-11.792 2.51-22.274 7.53-31.446 5.036-9.105 11.902-16.195 20.596-21.268l.61-.351c8.984-5.241 19.091-7.861 30.322-7.861 10.311 0 19.743 2.286 28.294 6.859l.64.347c8.72 4.659 15.656 11.574 20.809 20.746 5.153 9.172 7.729 20.309 7.729 33.411 0 1.294-.052 2.761-.156 4.4l-.042.623-.17 2.353c-.075 1.01-.151 1.973-.227 2.888h-78.044zm21.365-42.147c-4.492 0-8.456 1.092-11.891 3.276-3.303 2.184-5.879 5.314-7.729 9.39a26.04 26.04 0 00-1.117 2.79 30.164 30.164 0 00-1.121 4.499l-.058.354h43.96l-.015-.106c-.401-2.638-1.122-5.055-2.163-7.252l-.246-.503c-1.776-3.774-4.282-6.742-7.519-8.906l-.409-.266c-3.303-2.184-7.2-3.276-11.692-3.276zm111.695-62.018l-.001 57.432h53.51V87.172h39.24v152.863h-39.24v-59.617H555.9l.001 59.617h-39.24V87.172h39.24zM715.766 242c-8.72 0-16.581-1.893-23.583-5.678-6.87-3.785-12.287-9.681-16.251-17.688-3.832-8.153-5.747-18.417-5.747-30.791v-66.168h37.654v59.398c0 9.172 1.519 15.723 4.558 19.654 3.171 3.931 7.597 5.896 13.278 5.896 3.7 0 7.069-.946 10.108-2.839 3.038-1.892 5.483-4.877 7.332-8.953 1.85-4.222 2.775-9.609 2.775-16.16v-56.996h37.654v118.36h-35.871l.004-12.38c-2.642 3.197-5.682 5.868-9.12 8.012-7.002 4.222-14.599 6.333-22.791 6.333zM841.489 78l-.001 54.041a34.1 34.1 0 016.541-5.78c6.474-4.367 14.269-6.551 23.385-6.551 9.777 0 18.629 2.475 26.556 7.424 7.873 4.835 14.106 11.684 18.701 20.546l.325.637c4.756 9.026 7.134 19.799 7.134 32.319 0 12.666-2.378 23.585-7.134 32.757-4.624 9.026-10.966 16.087-19.026 21.182-7.927 4.95-16.779 7.425-26.556 7.425-9.645 0-17.704-2.184-24.178-6.551-2.825-1.946-5.336-4.354-7.531-7.224v11.81h-35.87V78h37.654zm21.998 74.684c-4.228 0-8.059 1.092-11.495 3.276-3.303 2.184-6.011 5.387-8.125 9.609-1.982 4.076-2.973 9.099-2.973 15.067 0 5.969.991 11.138 2.973 15.505 2.114 4.222 4.822 7.425 8.125 9.609 3.436 2.183 7.267 3.275 11.495 3.275 4.228 0 7.993-1.092 11.296-3.275 3.435-2.184 6.144-5.387 8.126-9.609 2.114-4.367 3.171-9.536 3.171-15.505 0-5.968-1.057-10.991-3.171-15.067-1.906-4.06-4.484-7.177-7.733-9.352l-.393-.257c-3.303-2.184-7.068-3.276-11.296-3.276z" />
    </svg>
  ),
);

export default LobeHubText;
