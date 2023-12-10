import { createGlobalStyle } from 'styled-components';
import { Colors } from '@Styles/Colors';

export default createGlobalStyle`
  * {
      font-family: Caudex;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
      background-color: ${Colors.primaryBackgroundColor};
      color: ${Colors.primaryTextColor};
    }

    html,
    body,
    #root,
    #rootChildren {
        height: 100%;
    }

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: ${Colors.primaryTextColor};
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
`;
