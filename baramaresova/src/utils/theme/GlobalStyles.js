import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  background-color:${({ theme }) => theme.background}
  color: ${({ theme }) => theme.textColor};
  max-width: 1400px;
  margin: 0 auto;
}`;
