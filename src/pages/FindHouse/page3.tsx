import { RTDropdown} from '@components/shared/Dropdown/RT-Dropdown'
import { Chip } from '@components/shared/Chips/RT-Chip'
import { IconType } from '@components/shared/Icon/IconType'
import { Icon } from '@components/shared/Icon/RT-Icon'
import {RTBotmenu} from '@components/shared/Botmenu/RT-Botmenu'
import { RTTopmenu } from '@components/shared/Topmenu/RT-Topmenu'
import { RadioButton } from '@components/shared/RT-RadioButton/RadioButton'
import {IHaveDropDown, INeedDropDown, RadioButtonValues, tabs, IPage3Props} from './page3.info'
import * as S from '@components/shared/SmallComponents/SmallComp'
import * as D from './page3.styles'
import {GlobalStyle} from '@assets/fonts/globalStyles'
import { ThemeProvider } from 'styled-components'
import imageCardsPath from "@assets/Cards.png";
import { useButton } from '@components/shared/Button/useButton'
import { RTButton } from '@components/shared/Button/RT-Button'
import { TopPage } from '@components/shared/TopPanelNavigation/BigComponents'
import { Tabs } from '@components/shared/Tabs/RT-Tabs'
import { StackedCard } from '@components/shared/RT-StackedCard+/StackedCard'
import { TextField } from '@components/shared/RT-TextField+/TextField'
export const Page3: React.FC = ({
  ...rest
}: IPage3Props) => {
  return (

    <>
    <GlobalStyle/>
      <TopPage/>
      <S.BackgroundBeidge>

      <Tabs TabsData={tabs}/>

      </S.BackgroundBeidge>
      <S.SepBeB/>
      <S.BackgroundWhite>
      <S.Wrapper>

        <S.GreenMessage label='Отели, хостелы, частное жильё' />

        <S.ThreeObjDisplay>
        <RTDropdown header='Я выбираю город'list={IHaveDropDown}/>
        <RTDropdown header='Даты'list={IHaveDropDown}/>
        <RTDropdown header='1 номер * 1взрослый * 2 ребёнка'list={IHaveDropDown}/> 
        </S.ThreeObjDisplay> 
        <S.BlackMessage label='найдено 13 вариантов' />
        </S.Wrapper>
        <S.WrapperOneSide>
        <S.StackedCardWrap>
        <StackedCard header='header' subhead='subhead' Title='Title' SubheadTitle='SubheadTitle' text='texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext' img='' />
        <StackedCard header='header' subhead='subhead' Title='Title' SubheadTitle='SubheadTitle' text='texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext' img='' />
        <StackedCard header='header' subhead='subhead' Title='Title' SubheadTitle='SubheadTitle' text='texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext' img='' />
        <StackedCard header='header' subhead='subhead' Title='Title' SubheadTitle='SubheadTitle' text='texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext' img='' />  
        <StackedCard header='header' subhead='subhead' Title='Title' SubheadTitle='SubheadTitle' text='texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext' img='' />
        <StackedCard header='header' subhead='subhead' Title='Title' SubheadTitle='SubheadTitle' text='texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext' img='' />
        <StackedCard header='header' subhead='subhead' Title='Title' SubheadTitle='SubheadTitle' text='texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext' img='' />  
        </S.StackedCardWrap>
        </S.WrapperOneSide>
        <S.SepBeB/>
        <S.Wrapper>

        <S.GreenMessage label='Я могу подать обьявление о поиске жилья'/>

        <S.ThreeObjDisplay>
        <TextField TopLabel='TopLabel' alert={false} Placeholder='PlaceHolder' />
        <TextField TopLabel='TopLabel' alert={true} Placeholder='PlaceHolder' />
        <TextField TopLabel='TopLabel' alert={false} Placeholder='PlaceHolder' />
        </S.ThreeObjDisplay>

        <S.ThreeObjDisplay>
        <TextField TopLabel='TopLabel' alert={false} Placeholder='PlaceHolder' />
        <TextField TopLabel='TopLabel' alert={false} Placeholder='PlaceHolder' />
        </S.ThreeObjDisplay>
        <RTButton/>
        <S.SepBeWhite/>
        </S.Wrapper>
        </S.BackgroundWhite>
        <S.SepBeB/>
        <S.BackgroundGreen>
        <RTBotmenu Isactive={true} />
        </S.BackgroundGreen>



    </>


  )}