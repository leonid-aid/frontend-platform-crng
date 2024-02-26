import React from 'react'
import { useRoutes } from 'react-router'
import { ProjectRoutes } from '@routes'
export function App() {
    const routes = useRoutes(ProjectRoutes)
    return routes
}
