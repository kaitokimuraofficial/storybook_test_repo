interface ListItemProps {
  isSelected?: boolean
  label?: string
}

export const ListItem = ({ isSelected = false, label }: ListItemProps) => {
  return (
    <li style={{ backgroundColor: isSelected ? 'lightblue' : 'transparent' }}>
      {label}
    </li>
  )
}
