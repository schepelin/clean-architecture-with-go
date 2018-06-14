// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Layout,
  Notes,
  Fill,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#FAFAFA",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Clean Architecture With Go
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Maxim Schepelin, Gett RnD, 2018
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Why architecture is important?</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <ol>
              <li>Work – system executes functional requirements</li>
              <li>Conditions – the quality attributes of a system</li>
            </ol>
          </Notes>
          <BlockQuote>
            <Heading textColor="primary" size={3}>
              To make system <Heading textColor="tertiary" size={3}>work*</Heading> under certain
              <Heading textColor="tertiary" size={3}>conditions*</Heading>
            </Heading>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>Chosen quality attributes impact the final design of the system</p>
            <h4>Outputs of archutecture process</h4>
            <ol>
              <li>Consistent functional requirements (What system does)</li>
              <li>List of the quality attrbutes supported by the system (How the system does what it does)</li>
            </ol>
          </Notes>
          <Layout>
            <Fill><Text textColor="primary">Availability</Text></Fill>
            <Fill><Text textColor="primary">Security</Text></Fill>
            <Fill><Text textColor="primary">Extensibility</Text></Fill>
          </Layout>
          <Text textColor="secondary">noop</Text>
          <Layout>
            <Fill><Text textColor="primary">Scalability</Text></Fill>
            <Fill><Text textColor="primary">Maintainability</Text></Fill>
            <Fill><Text textColor="primary">Testability</Text></Fill>
          </Layout>
          <Text textColor="secondary">noop</Text>
          <Layout>
            <Fill><Text textColor="primary">Reliability</Text></Fill>
            <Fill><Text textColor="primary">Modularity</Text></Fill>
            <Fill><Text textColor="primary">Auditability</Text></Fill>
          </Layout>
          <Text textColor="secondary">noop</Text>
          <Link textColor="tertiary" href="https://en.wikipedia.org/wiki/List_of_system_quality_attributes">
            Full list of system quality attributes
          </Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>Before going to the architecture process we must grasp the domain knowledge</p>
            <p>The model of bussines domain defines what componenst the system consists of</p>
            <p>
              For example: naive design of flight tiket buying. I've created a model of passenger.
              But do flight company operates the passgener entity. maybe "seat" maybe "flight ticket"
            </p>
            <p>Architecting without understanding the domain you build on sand</p>
          </Notes>
          <Heading size={3} textColor="primary">Before the architecture:</Heading>
          <Heading size={3} textColor="tertiary">Understanding of the business domain</Heading>
        </Slide>



      </Deck>
    );
  }
}
