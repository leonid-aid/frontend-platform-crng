import { RTDropdown} from '@components/shared/Dropdown/RT-Dropdown'
import { Chip } from '@components/shared/Chips/RT-Chip'
import { IconType } from '@components/shared/Icon/IconType'
import { Icon } from '@components/shared/Icon/RT-Icon'
import {RTBotmenu} from '@components/shared/Botmenu/RT-Botmenu'
import { RTTopmenu } from '@components/shared/Topmenu/RT-Topmenu'
import { RadioButton } from '@components/shared/RT-RadioButton/RadioButton'
import {IHaveDropDown, INeedDropDown, RadioButtonValues, tabs, IPageProps} from './pageinfo'
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
import { Usercard } from '@components/shared/RT-UserCard+/Usercard'
import { BotMenu } from '@components/shared/Topmenu/RT-Topmenu.styles'
export const PageFun: React.FC = ({
  ...rest
}: IPageProps) => {
  return (

    <>
    <GlobalStyle/>
    <TopPage/>
    <S.BackgroundWhite>
      <S.Wrapper>
        <S.GreenMessage label='Выбрать развлечение' />
        <S.ThreeObjDisplay>
          <TextField TopLabel='В каком Городе/општине' alert={false} Placeholder='Цетине' />
          <TextField TopLabel='Категория' alert={false} Placeholder='Достопримечательности' />
          <TextField TopLabel='Даты' alert={false} Placeholder='' />
          <TextField TopLabel='Цена' alert={false} Placeholder='' />
        </S.ThreeObjDisplay>
        <S.SepBeWhite/>
        <RTButton/>
        <S.SepBeWhite/>
        <S.BlackMessage label='Найдено 2 варианта' />
        <S.StackedCardWrap>
        <StackedCard header='header' subhead='subhead' Title='Title' SubheadTitle='SubheadTitle' text='texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext' img='' />
        <StackedCard header='header' subhead='subhead' Title='Title' SubheadTitle='SubheadTitle' text='texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext' img='' />
        </S.StackedCardWrap>
        <RTButton/>
        <S.SepBeWhite/>
      </S.Wrapper>
      <S.SepBeB/>
    </S.BackgroundWhite>
    <BotMenu/>


    </>


  )}