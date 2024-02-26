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
export const PageBuySell: React.FC = ({
  ...rest
}: IPageProps) => {

  const tabs = [
    { id: 1, title:<span>Купить</span>, content: 
    <>
    <S.BackgroundWhite>
      <S.Wrapper>
        <S.GreenMessage label='Я ищу товар (услугу)' />
        <S.SepBeWhite/>
        <RTButton/>
        <S.SepBeWhite/>
      </S.Wrapper>
    </S.BackgroundWhite>
    <S.SepBeB/>
    <S.BackgroundWhite>
      <S.Wrapper>
        <S.GreenMessage label='Я ищу подержанный товар' />
        <S.TwoDropDownDisplay>
          <RTDropdown header='В городе' list={INeedDropDown} />
          <RTDropdown header='Категория' list={INeedDropDown} />
        </S.TwoDropDownDisplay>
        <S.SepBeWhite/>
        <RTButton/>
        <S.SepBeWhite/>
        <S.SepBeWhite/>
      </S.Wrapper>
    </S.BackgroundWhite>
    <S.SepBeB/>
    </>},
    { id: 2, title: <span>Продать</span>, content: 
    <div>
      <S.BackgroundWhite>
        <S.Wrapper>
          <S.GreenMessage label='Я продаю товар' />
          <S.SepBeWhite/>
          <RTButton/>
          <S.SepBeWhite/>
        </S.Wrapper>
      </S.BackgroundWhite>
      <S.SepBeB/>
      <S.BackgroundWhite>
        <S.Wrapper>
        <S.GreenMessage label='Я продаю подержанный товар' />

        <S.TwoDropDownDisplay>
          <RTDropdown header='Категория' list={INeedDropDown} />
        </S.TwoDropDownDisplay>
        <S.SepBeWhite/>
        <RTButton/>
        <S.SepBeWhite/>
        <S.SepBeWhite/>
        </S.Wrapper>
      </S.BackgroundWhite>
      <S.SepBeB/>
      <S.BackgroundWhite>
        <S.Wrapper>
        <S.GreenMessage label='Я продаю подержанный товар' />

        <S.TwoDropDownDisplay>
          <RTDropdown header='Категория' list={INeedDropDown} />
        </S.TwoDropDownDisplay>
        <S.SepBeWhite/>
        <RTButton/>
        <S.SepBeWhite/>
        <S.SepBeWhite/>
        </S.Wrapper>
      </S.BackgroundWhite>
      <S.SepBeB/>



    </div> },
  ];

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