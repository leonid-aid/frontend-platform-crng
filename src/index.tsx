import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from '@components/App'
import { persistor, store } from '@store'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { RTAuthGate } from '@components/AuthGate/RT-AuthGate'
import { ChakraProvider } from '@chakra-ui/react'
import { RTTheme } from './theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
            <ChakraProvider theme={RTTheme}>
                <BrowserRouter>
                    <RTAuthGate>
                        <App />
                    </RTAuthGate>
                </BrowserRouter>
            </ChakraProvider>
        </PersistGate>
    </ReduxProvider>
)
