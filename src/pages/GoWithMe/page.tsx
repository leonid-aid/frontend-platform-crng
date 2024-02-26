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
export const PageGoWithMe: React.FC = ({
  ...rest
}: IPageProps) => {
  return (

    <>
    <GlobalStyle/>
    <TopPage/>
    <S.SepBeB/>
    <S.Wrapper>
    <S.GreenMessage label='Мне нужна помощь переводчика' />
    <S.TextContent>Мне нужно, чтобы со мной сходили и помогли поговорить и решить вопрос: в општину, полицию, больницу, банк, аптеку, и.т.д.</S.TextContent>
    <S.SepBeWhite/>
    <S.ThreeObjDisplay>
    <RTDropdown header='в городе ' list={IHaveDropDown} />
    </S.ThreeObjDisplay>
    <S.SepBeWhite/>
    <RTButton/>
    <S.SepBeWhite/>
    </S.Wrapper>
    <S.SepBeB/>
    <S.SepBeB/>   
    <S.BackgroundGreen>
    <RTBotmenu Isactive={true} />
    </S.BackgroundGreen>



    </>


  )}