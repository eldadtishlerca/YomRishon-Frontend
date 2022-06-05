export const TrelloGroupHeader = ({ color, title, group }) => {
  return (
    <div className="trello-group-header" style={{ background: color }}>
      {title} / {group.tasks.length}
    </div>
  )
}
