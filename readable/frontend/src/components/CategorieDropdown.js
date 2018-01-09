import React from 'react'
import { Link } from 'react-router-dom'


export default function CategorieDropdown ({categories, onSelectCategory}) {
  return(
    <div>
      <Link to="/">All</Link>
      {categories.map(category => (
        <Link to={`/${category.name}`} key={category.name}>{category.name}</Link>
      ))}
    </div>

  )
}
