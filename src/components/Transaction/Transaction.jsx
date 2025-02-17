import React from 'react'

/* STYLE */
import style from './style.module.css'

export default function Transaction({transaction}) {
    console.log(transaction);
    
  return (
  <div className={style.table__box}>
      <table className={style.table__tile}>
       <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
       </thead>
    {transaction.map((item) => (
    <tbody key={item.id}>
      <tr>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    </tbody>
    ))}
    </table>
 </div>
  )
}
