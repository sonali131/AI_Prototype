// import type { Preview } from '@storybook/react-vite'

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//        color: /(background|color)$/i,
//        date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;
// .storybook/preview.ts
import type { Preview } from "@storybook/react";

// YAHAN APNI MAIN CSS FILE IMPORT KAREIN
import '../src/App.css'; 
import '../src/components/Sidebar.css'; 
import '../src/components/ChatInterface.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
