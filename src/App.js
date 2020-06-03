import React from 'react'

import { GlobalStyle } from './GlobalStyles'
import { Logo } from './components/Logo'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { ListOfCategories } from './components/ListOfCategories'

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
)
