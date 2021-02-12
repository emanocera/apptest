import React from 'react';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/styles/theming.js";
import { CssBaseline } from '@material-ui/core';

export const decorators = [(Story) => <ThemeProvider theme={theme}><CssBaseline/><Story/></ThemeProvider>];
