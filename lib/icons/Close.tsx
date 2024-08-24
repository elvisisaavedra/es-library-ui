export const CloseIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.2097 5.3871L5.29289 5.29289C5.65338 4.93241 6.22061 4.90468 6.6129 5.2097L6.70711 5.29289L12 10.585L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.415 12L18.7071 17.2929C19.0676 17.6534 19.0953 18.2206 18.7903 18.6129L18.7071 18.7071C18.3466 19.0676 17.7794 19.0953 17.3871 18.7903L17.2929 18.7071L12 13.415L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.585 12L5.29289 6.70711C4.93241 6.34662 4.90468 5.77939 5.2097 5.3871Z"
        fill="currentColor"
      />
    </svg>
  )
}

CloseIcon.displayName = 'CloseIcon'
