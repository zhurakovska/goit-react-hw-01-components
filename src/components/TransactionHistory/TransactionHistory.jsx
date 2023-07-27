import React from 'react'
import PropTypes from 'prop-types'

import { Container, Header, Cell } from './TransactionHistory.styled'


export const TransactionHistory = (props) => {
  
  return (
    <Container>
    <thead>
      <tr>
        <Header>Type</Header>
        <Header>Amount</Header>
        <Header>Currency</Header>
      </tr>
    </thead>
  
    <tbody>
      {props.items.map((item, index) => 
        <tr key={item.id}>
            <Cell isEvenRow={index % 2 === 0}>{item.type}</Cell>
            <Cell isEvenRow={index % 2 === 0}>{item.amount}</Cell>
            <Cell isEvenRow={index % 2 === 0}>{item.currency}</Cell>
        </tr>
        )}
    </tbody>
  </Container>
  )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.shape({
      id:PropTypes.string.isRequired,
      type:PropTypes.string.isRequired,
      amount:PropTypes.string.isRequired,
      currency:PropTypes.string.isRequired,
    })
}
