export const ChevronDownIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M26.7071 16.2929C27.0976 16.6834 27.0976 17.3166 26.7071 17.7071L20.7071 23.7071C20.3166 24.0976 19.6834 24.0976 19.2929 23.7071L13.2929 17.7071C12.9024 17.3166 12.9024 16.6834 13.2929 16.2929C13.6834 15.9024 14.3166 15.9024 14.7071 16.2929L20 21.5858L25.2929 16.2929C25.6834 15.9024 26.3166 15.9024 26.7071 16.2929Z"
        fill="currentColor"
      />
    </svg>
  )
}

ChevronDownIcon.displayName = 'ChevronDownIcon'
