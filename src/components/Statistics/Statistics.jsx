import React from 'react'
import PropTypes from 'prop-types'

import { StatisticsSection, StatisticsTitle, StatList, StatItem, StatLabel, StatPercentage} from './Statistics.styled'

export const Statistics = ({stats, title}) => {
    const {id, label, percentage} = stats

  return (
    <>
        <StatisticsSection>
            <StatisticsTitle>{title}</StatisticsTitle>

            <StatList>
                {stats.map(el=> 
                <StatItem key={el.id} >
                    <StatLabel>{el.label}</StatLabel>
                    <StatPercentage>{el.percentage}%</StatPercentage>
                </StatItem>)}
            </StatList>
        </StatisticsSection>
    </>
  )
}



Statistics.propTypes = {
  data: PropTypes.shape({
    id:  PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })
}
