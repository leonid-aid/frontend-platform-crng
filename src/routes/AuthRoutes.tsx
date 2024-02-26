import { RTButton } from '@components/shared/Button/RT-Button'
import { RTInput } from '@components/shared/Input/RT-Input'
import { RTRouteObjects } from './types'
import { RTDropdown} from '@components/shared/Dropdown/RT-Dropdown'
import { Chip } from '@components/shared/Chips/RT-Chip'
import { IconType } from '@components/shared/Icon/IconType'
import { Icon } from '@components/shared/Icon/RT-Icon'
import {RTBotmenu} from '@components/shared/Botmenu/RT-Botmenu'
import { RTTopmenu } from '@components/shared/Topmenu/RT-Topmenu'
import { TextField } from '@components/shared/RT-TextField+/TextField'
import { Usercard } from '@components/shared/RT-UserCard+/Usercard'
import { RadioButton } from '@components/shared/RT-RadioButton/RadioButton'
import { Page1 } from '../pages/Money/page1'
import { Page2 } from '../pages/GoHere/page2'
import { Page3 } from '../pages/FindHouse/page3'
import { PageFindTransport } from '../pages/FindTransport/page'
import { PageBuySell } from '../pages/BuySell/page'
import { PageFun } from '../pages/Fun/page'
import { PageGoWithMe } from '../pages/GoWithMe/page'
import { PageLaw } from '../pages/Law/page'





export const AuthRoutes: RTRouteObjects = [

    { path:"Money", element: <Page1/>, },
    { path:"GoHere", element: <Page2/>},
    { path:"FindHouse", element: <Page3/>},
    { path:"FindTransport", element: <PageFindTransport/>},
    { path:"Law", element: <PageLaw/>},
    { path:"Fun", element: <PageFun/>},
    { path:"Gowithme", element: <PageGoWithMe/>},
    { path:"Buy-sell", element: <PageBuySell/>},
    
]
