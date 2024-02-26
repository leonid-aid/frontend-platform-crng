import React, { FCC } from 'react'
import { Input } from '@chakra-ui/react'
import { InputGroup } from '@chakra-ui/react'
import { InputRightElement } from '@chakra-ui/react'
import { CheckboxIcon } from '@chakra-ui/react'
import { RTInputProps } from './RT-Input.props'
import { useInput } from './useInput'
import { getJSDocReadonlyTag } from 'typescript'
import { useTokens } from '@hooks/useTokens/useTokens'

export const RTInput: FCC<RTInputProps> = ({
    children,
    customBgColor,
    customBorderColor,
    customColor,
    placeholder,
    ...rest
}) => {
    const { styles } = useTokens({
        customColor,
        customBgColor,
        customBorderColor,
    })

    return (
        <InputGroup>
            <Input placeholder={placeholder} {...styles} {...rest} />
            <InputRightElement
                children={<CheckboxIcon color='green.500' />}
            ></InputRightElement>
        </InputGroup>
    )
}
