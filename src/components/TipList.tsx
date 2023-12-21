type Items = string[];

const TipList = ({ items }: { items: Items }) => {
  return (
    <ul className="c-tip-list">
      {items.map((item, i) => {
        return (
          <li className="c-tip-list__item" key={i}>
            {item}
          </li>
        )
      })}
    </ul>
  )
}

export default TipList;