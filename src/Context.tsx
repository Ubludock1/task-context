import { ReactElement, useEffect, useState } from 'react';
import { useContext } from 'react';
import React from 'react';

type Theme = 'light' | 'dark';

const Themee = React.createContext<Theme>('light');

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <Themee.Provider value={props.theme}>{props.children}</Themee.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(Themee);
}
