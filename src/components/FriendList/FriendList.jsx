import React from 'react'

/* STYLE */
import friendsTile from './style.module.css'

export default function FriendList({friends}) {

  return (
    <div className={friendsTile.friends}>
       <ul className={friendsTile.friends__tile}>
       {friends.map((item) => (
        <li className={friendsTile.friends__tile_item} key={item.id}>
            <img src={item.avatar} alt={item.name} width='60' height='60' loading='lazy' />
            <span className={friendsTile}>{item.name}</span>
            <span className={item.isOnline ? friendsTile.green : friendsTile.red}>{item.isOnline ? 'Online' : 'Offline'}</span>
        </li>
      ))}
       </ul>
    </div>
  )
}
