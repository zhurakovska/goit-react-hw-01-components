import React from 'react'

export const TransactionHistory = (props) => {
   
    const {id, type, amount, currency} = props.items
  return (
    <><table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody>
      {props.items.map(item => 
        <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
        </tr>
        )}
    </tbody>
  </table></>
  )
}
