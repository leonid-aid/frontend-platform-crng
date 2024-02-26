import { RTDropdown} from '@components/shared/Dropdown/RT-Dropdown'
import { Chip } from '@components/shared/Chips/RT-Chip'
import { IconType } from '@components/shared/Icon/IconType'
import { Icon } from '@components/shared/Icon/RT-Icon'
import {RTBotmenu} from '@components/shared/Botmenu/RT-Botmenu'
import { RTTopmenu } from '@components/shared/Topmenu/RT-Topmenu'
import { RadioButton } from '@components/shared/RT-RadioButton/RadioButton'
import {IHaveDropDown, INeedDropDown, RadioButtonValues, IPageProps} from './pageinfo'
import * as S from '@components/shared/SmallComponents/SmallComp'
import {GlobalStyle} from '@assets/fonts/globalStyles'
import { ThemeProvider } from 'styled-components'
import imageCardsPath from "@assets/Cards.png";
import { useButton } from '@components/shared/Button/useButton'
import { RTButton } from '@components/shared/Button/RT-Button'
import { TopPage } from '@components/shared/TopPanelNavigation/BigComponents'
import { Tabs } from '@components/shared/Tabs/RT-Tabs'
import { StackedCard } from '@components/shared/RT-StackedCard+/StackedCard'
import { TextField } from '@components/shared/RT-TextField+/TextField'


export const PageFindTransport: React.FC = ({
  ...rest
}: IPageProps) => {
const tabs = [
    { id: 1, title:<span>Уровень А1</span>, content: 
    <div>
      <S.BackgroundWhite><S.TabContent>
      <p>Расстояния в Черногории невилики, всю страну</p>  <p>можно проехать за 1 день. Это можно удобно сделать на машине, как на такси, так и на арендованной машине</p> <p>Ещё текст</p> <p>Ещё текст</p>
      </S.TabContent></S.BackgroundWhite>

      <S.SepBeB/>
    <S.BackgroundWhite>
    <S.Wrapper>
    <S.GreenMessage label={"Заказать такси"}/>
    <S.ThreeObjDisplay>
      <RTDropdown header='header' list={INeedDropDown}/>
      <RTDropdown header='header' list={INeedDropDown}/>
      <RTDropdown header='header' list={INeedDropDown}/>   
    </S.ThreeObjDisplay>
    <S.SepBeWhite/>
    <RTButton/>
    <S.SepBeWhite/>
    <S.SepBeWhite/>
    <S.GreenMessage label="Взять Машину в Аренду" />
    <S.ThreeObjDisplay>
      <TextField TopLabel='TopLabel' alert={false} Placeholder='Placeholder' />
      <TextField TopLabel='TopLabel' alert={false} Placeholder='Placeholder' />
      <TextField TopLabel='TopLabel' alert={false} Placeholder='Placeholder' />
      <TextField TopLabel='TopLabel' alert={false} Placeholder='Placeholder' />
    </S.ThreeObjDisplay>
    <S.SepBeWhite/>
    <RTButton/>
    <S.SepBeWhite/>
    <S.SepBeWhite/>
    </S.Wrapper>
    </S.BackgroundWhite>
    <S.SepBeB/>

    </div> },
    { id: 1, title:<span>Уровень А1</span>, content: 
    <div>
      <S.BackgroundWhite><S.TabContent>
      <p>В Черногории нет общественного транс-</p>  <p>порта внутри городов. Хорошо развито между-</p> <p>городное сообщение - автобусы, поезда. Также работает международное сообщение. Есть специализированные автобусные линии: Blue Line - по Боко-Которскому заливу, Mediterian Express - по Будванской ривьере. Лучше всего покупать билет на автобус в одну сторону в кассе прямо перед поездкой, потому что перевозчиков много, и каждый перевозчик возит только тех, кто купил билет именно на его автобус. ЕЩЕ ТЕКСТ ЕЩЕ ТЕКСТ</p>
      <S.SepBeWhite/>
      <RTButton/>
      <S.SepBeWhite/>
      <RTButton/>
      <S.SepBeWhite/>
      </S.TabContent></S.BackgroundWhite>
    </div> }  ];
  return (

    <>
    <GlobalStyle/>
    <TopPage/>


    <S.BackgroundBeidge>

    <Tabs TabsData={tabs} />

    </S.BackgroundBeidge>




    <S.BackgroundGreen>
    <RTBotmenu Isactive={true} />
    </S.BackgroundGreen>
    </>


  )}