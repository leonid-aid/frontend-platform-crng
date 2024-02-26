import styled, { createGlobalStyle } from "styled-components"

import * as S from '@components/shared/SmallComponents/SmallComp'
import { RTTopmenu } from '@components/shared/Topmenu/RT-Topmenu'
import { Chip } from '@components/shared/Chips/RT-Chip'
import { useState } from "react"

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthRoutes } from "@routes"
import { ChipA } from "../Chips/RT-Chip.styles"
import { TextField } from "../RT-TextField+/TextField"


export const TopPage: React.FC = ({
    ...rest
  }) => {
        
        

        const changeChipPresser = (numberChip: string) => {

                sessionStorage.setItem('ChipPressed',numberChip)

              }

        const ChipPressedcheck = sessionStorage.getItem('ChipPressed');

    const [currentRoute, setCurrentRoute] = useState<string>(''); // Состояние для текущего маршрута

    const handleRouteChange = (path: string) => {
        console.log('buttonIndex');
      setCurrentRoute(path);
    };
    
    return (
      
<S.BackgroundGreen>
<S.Wrapper>
<RTTopmenu label="Еду отдыхать" />
<S.TopWhiteMessage label="Мне нужно"/>
</S.Wrapper>


<S.ChipsWrap>


          <Link to={`/${AuthRoutes[0].path}`}>
          <div onClick={()=>changeChipPresser('0')} ><Chip pressed={ChipPressedcheck=='0'? false: true} iconName="Money" text={`Узнать про финансы`} onClick={() => {if (AuthRoutes[0].path){handleRouteChange(AuthRoutes[0].path);}}}/></div>
          </Link>

          <Link to={`/${AuthRoutes[1].path}`}>
          <div onClick={()=>changeChipPresser('1')} ><Chip pressed={ChipPressedcheck=='1'? false: true} iconName="Directions_car" text={`Добраться`} onClick={() => {if (AuthRoutes[1].path){ handleRouteChange(AuthRoutes[1].path);}}}/></div>
          </Link>
          
          <Link to={`/${AuthRoutes[2].path}`}>
          <div onClick={()=>changeChipPresser('2')} ><Chip pressed={ChipPressedcheck=='2'? false: true} iconName="Living" text={`Найти жильё`} onClick={() => {if (AuthRoutes[2].path){ handleRouteChange(AuthRoutes[2].path);}}}/></div>
          </Link>

          <Link to={`/${AuthRoutes[3].path}`}>
          <div onClick={()=>changeChipPresser('3')} ><Chip pressed={ChipPressedcheck=='3'? false: true} iconName="Directions_car" text={`Найти транспорт`} onClick={() => {if (AuthRoutes[3].path){ handleRouteChange(AuthRoutes[3].path);}}}/></div>
          </Link>

          <Link to={`/${AuthRoutes[4].path}`}>
          <div onClick={()=>changeChipPresser('4')} ><Chip pressed={ChipPressedcheck=='4'? false: true} iconName="Court" text={`Соблюсти законы`} onClick={() => {if (AuthRoutes[4].path){ handleRouteChange(AuthRoutes[4].path);}}}/></div>
          </Link>

          <Link to={`/${AuthRoutes[5].path}`}>
          <div onClick={()=>changeChipPresser('5')} ><Chip pressed={ChipPressedcheck=='5'? false: true} iconName="Native" text={`Развлекаться`} onClick={() => {if (AuthRoutes[5].path){ handleRouteChange(AuthRoutes[5].path);}}}/></div>
          </Link>

          <Link to={`/${AuthRoutes[6].path}`}>
          <div onClick={()=>changeChipPresser('6')} ><Chip pressed={ChipPressedcheck=='6'? false: true} iconName="Location" text={`Сходить со мной`} onClick={() => {if (AuthRoutes[6].path){ handleRouteChange(AuthRoutes[6].path);}}}/></div>
          </Link>

          <Link to={`/${AuthRoutes[7].path}`}>
          <div onClick={()=>changeChipPresser('7')} ><Chip pressed={ChipPressedcheck=='7'? false: true} iconName="Law" text={`Купить-продать`} onClick={() => {if (AuthRoutes[7].path){ handleRouteChange(AuthRoutes[7].path);}}}/></div>
          </Link>


        <Routes>  
            <Route path={`/${AuthRoutes[0].path}`} element={AuthRoutes[0].element} />
            <Route path={`/${AuthRoutes[1].path}`} element={AuthRoutes[1].element} />
            <Route path={`/${AuthRoutes[2].path}`} element={AuthRoutes[2].element} />
            <Route path={`/${AuthRoutes[3].path}`} element={AuthRoutes[3].element} />
            <Route path={`/${AuthRoutes[4].path}`} element={AuthRoutes[4].element} />
            <Route path={`/${AuthRoutes[5].path}`} element={AuthRoutes[5].element} />
            <Route path={`/${AuthRoutes[6].path}`} element={AuthRoutes[6].element} />
            <Route path={`/${AuthRoutes[7].path}`} element={AuthRoutes[7].element} />
        </Routes>
        

</S.ChipsWrap>

</S.BackgroundGreen>

)}


