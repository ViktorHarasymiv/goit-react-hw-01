import React from 'react'

/* STYLE */
import userTile from './style.module.css'


export default function Profile({name,tag,location,image,stats}) {

  return (
    <div className={userTile.user}>
        <div className={userTile.user__tile}>
            <img
              src={image}
              alt="User avatar"
              width="60"
              height="60"
              className={userTile.user__image}
            />
            <p>{name}</p>
            <p>{tag}</p>
            <p>{location}</p>
        </div>

        <ul className={userTile.user__list_stats}>
          {Object.keys(stats).map((key) => (
          <li className={userTile.user__list_stats_item} key={key}>
            <span className={userTile.list__item_stats_name}>{key} </span>
            <span className={userTile.list__item_stats_number}>{stats[key]}</span>
          </li>
            ))}
        </ul>
    </div>
  )
}
