import * as React from '@types/react'

declare module 'react' {
    type FCC<T> = React.FC<React.PropsWithChildren<T>>
}
