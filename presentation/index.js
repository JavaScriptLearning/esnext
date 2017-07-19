import React from 'react';
import { Appear, Deck, Slide, Text, Heading, List, ListItem } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import createTheme from 'spectacle/lib/themes/default';

import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

// Examples
import { functionScoped, blockScoped, hoisted, notHoisted, immutable } from './assets/let-and-const';
import { simple, defaults, named } from './assets/modules';
import { proto, classIn, withReact, withBetterReact } from './assets/class';
import { before, after, complex, func } from './assets/destructuring';

const theme = createTheme({
  primary: '#fff',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#CECECE'
}, {
  primary: 'Helvetica',
  secondary: 'Montserrat',
  tertiary: {
    name: 'Roboto',
    googleFont: true,
    styles: ['400', '700']
  }
});

export default () => (
  <Deck transition={['fade']} theme={theme} transitionDuration={500}>
    <Slide bgColor="tertiary">
      <Heading size={1} fit caps textColor="white" lineHeight={1} bg="tertiary" textFont="tertiary">
        ESNext
      </Heading>
    </Slide>
    <Slide bgColor="quartenary">
      <Heading fit textColor="primary" textFont="tertiary">Base Types in JavaScript</Heading>
      <List>
        <ListItem>Number</ListItem>
        <ListItem>String</ListItem>
        <ListItem>Object</ListItem>
        <ListItem>Undefined</ListItem>
        <ListItem>Null</ListItem>
        <ListItem>Boolean</ListItem>
        <Appear>
          <ListItem textColor="tertiary">Symbol</ListItem>
        </Appear>
      </List>
    </Slide>
    <Slide bgColor="quartenary">
      <Heading fit textColor="primary" textFont="tertiary">Variable Declaration</Heading>
      <List>
        <ListItem>var</ListItem>
        <ListItem>function</ListItem>
        <Appear>
          <ListItem textColor="tertiary">let</ListItem>
        </Appear>
        <Appear>
          <ListItem textColor="tertiary">const</ListItem>
        </Appear>
        <Appear>
          <ListItem textColor="tertiary">import</ListItem>
        </Appear>
        <Appear>
          <ListItem textColor="tertiary">class</ListItem>
        </Appear>
      </List>
    </Slide>
    <Slide bgColor="tertiary">
      <Heading fit textColor="primary" textFont="tertiary">let & const</Heading>
    </Slide>
    <CodeSlide
      lang="js"
      code={functionScoped.toString()}
      ranges={[
        { loc: [0, 0], title: 'var is function scoped' },
        { loc: [1, 4] },
        { loc: [4, 5] }
      ]}
    />
    <CodeSlide
      lang="js"
      code={blockScoped}
      ranges={[
        { loc: [0, 0], title: 'let & const are block scoped' },
        { loc: [1, 5] },
        { loc: [5, 7] }
      ]}
    />
    <CodeSlide
      lang="js"
      code={hoisted}
      ranges={[
        { loc: [0, 0], title: 'var is hoisted' },
        { loc: [1, 2] },
        { loc: [2, 3] }
      ]}
    />
    <CodeSlide
      lang="js"
      code={notHoisted}
      ranges={[
        { loc: [0, 0], title: 'let & const are not hoisted' },
        { loc: [1, 3] },
        { loc: [4, 6] }
      ]}
    />
    <CodeSlide
      lang="js"
      code={immutable}
      ranges={[
        { loc: [0, 1], note: 'const must be immedieately initialized and is "immutable"' },
        { loc: [2, 4], note: 'once set the value cannot change' },
        { loc: [4, 5], note: 'however, the properties can change' }
      ]}
    />
    <Slide bgColor="tertiary">
      <Heading fit textColor="primary" textFont="tertiary">Modules</Heading>
      <List>
        <Appear>
          <ListItem>Completely Hoisted</ListItem>
        </Appear>
        <Appear>
          <ListItem>Circular dependenies just work</ListItem>
        </Appear>
        <Appear>
          <ListItem>Static analysis</ListItem>
        </Appear>
      </List>
    </Slide>
    <CodeSlide
      lang="js"
      code={simple}
      ranges={[
        { loc: [0, 0], title: 'Simple Syntax' },
        { loc: [0, 2] },
        { loc: [3, 6] },
        { loc: [7, 8] }
      ]}
    />
    <CodeSlide
      lang="js"
      code={defaults}
      ranges={[
        { loc: [0, 0], title: 'Default Exports' },
        { loc: [0, 2] },
        { loc: [3, 7] }
      ]}
    />
    <CodeSlide
      lang="js"
      code={named}
      ranges={[
        { loc: [0, 0], title: 'Named Exports' },
        { loc: [0, 4] },
        { loc: [5, 7] }
      ]}
    />
    <Slide bgColor="tertiary">
      <Heading fit textColor="primary" textFont="tertiary">Class &#123; &#125;</Heading>
    </Slide>
    <CodeSlide
      lang="js"
      code={proto}
      ranges={[
        { loc: [0, 0], title: 'Prototype Inheritance' },
        { loc: [0, 1] },
        { loc: [1, 2] }
      ]}
    />
    <CodeSlide
      lang="js"
      code={classIn}
      ranges={[
        { loc: [0, 0], title: 'Class Inheritance' },
        { loc: [0, 3] }
      ]}
    />
    <CodeSlide
      lang="js"
      code={withReact}
      ranges={[
        { loc: [0, 0], title: 'Using with React' },
        { loc: [0, 1] },
        { loc: [2, 3] },
        { loc: [3, 9] },
        { loc: [10, 17] },
        { loc: [11, 16] },
        { loc: [12, 15] }
      ]}
    />
    <CodeSlide
      lang="js"
      code={withBetterReact}
      ranges={[
        { loc: [0, 0], title: 'Better React Usage' },
        { loc: [0, 2] },
        { loc: [3, 4] },
        { loc: [4, 9] },
        { loc: [10, 13] },
        { loc: [14, 23] },
        { loc: [15, 16] },
        { loc: [17, 22] }
      ]}
    />
    <Slide>
      <Text fit lineHeight={2}>Class inheritance has a small performance hit</Text>
      <Appear>
        <Text textSize={18}>the more you inherit the bigger the performance cut</Text>
      </Appear>
    </Slide>
    <Slide bgColor="tertiary">
      <Heading fit textColor="primary" textFont="tertiary">&#123; Destructuring &#125;</Heading>
    </Slide>
    <CodeSlide
      lang="js"
      code={before}
      ranges={[
        { loc: [0, 0], title: 'Before' },
        { loc: [0, 3] },
        { loc: [4, 7] },
        { loc: [8, 10] }
      ]}
    />
    <CodeSlide
      lang="js"
      code={after}
      ranges={[
        { loc: [0, 0], title: 'After' },
        { loc: [0, 1] },
        { loc: [2, 3] },
        { loc: [4, 5] }
      ]}
    />
    <CodeSlide
      lang="js"
      code={complex}
      ranges={[
        { loc: [0, 0], title: 'Avoid overly complex destructuring' },
        { loc: [0, 2] },
        { loc: [3, 7] }
      ]}
    />
    <CodeSlide
      lang="js"
      code={func}
      ranges={[
        { loc: [0, 0], title: 'Refactoring a function' },
        { loc: [0, 6] },
        { loc: [7, 10] }
      ]}
    />
    <Slide bgColor="tertiary">
      <Heading fit textColor="primary" textFont="tertiary">...spread</Heading>
    </Slide>
  </Deck>
);
