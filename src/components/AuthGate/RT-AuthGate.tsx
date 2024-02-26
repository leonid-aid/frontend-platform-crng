import React, { FCC } from 'react'
import { RTAuthGateProps } from './RT-AuthGate.props'
import { AuthRoutes } from '@routes'
import { useRoutes } from 'react-router'

export const RTAuthGate: FCC<RTAuthGateProps> = ({ children }) => {
    const routes = useRoutes(AuthRoutes)
    return <>{routes || children}</>
}
