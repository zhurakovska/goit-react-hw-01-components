import React from 'react'

export const Statistics = ({stats, title}) => {
    const {id, label, percentage} = stats

  return (
    <>
        <section className="statistics">
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
                {stats.map(el=> 
                <li key={el.id} className="item">
                    <span className="label">{el.label}</span>
                    <span className="percentage">{el.percentage}</span>
                </li>)}
            </ul>
</section>
    </>
  )
}
