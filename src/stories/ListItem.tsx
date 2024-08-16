import React from 'react'

interface ListItemProps {
  isSelected?: boolean
  label?: string
}

export const ListItem: React.FC<ListItemProps> = ({
  isSelected = false,
  label,
}) => {
  return (
    <li style={{ backgroundColor: isSelected ? 'lightblue' : 'transparent' }}>
      {label}
    </li>
  )
}
