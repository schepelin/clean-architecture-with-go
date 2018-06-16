// Import React
import React from "react"

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Notes,
  Quote,
  S,
  Slide,
  Text,
} from "spectacle"
import CodeSlide from "spectacle-code-slide"

// Import theme
import createTheme from "spectacle/lib/themes/default"
import preloader from "spectacle/lib/utils/preloader"

// Require CSS
require("normalize.css")

const images = {
  diagram: require("../assets/images/clean-architecture.jpg"),
}
preloader(images)

const theme = createTheme({
  primary: "#FAFAFA",
  secondary: "#1F2022",
  tertiary: "#FFBF00", // "#03A9FC",
  quarternary: "#CECECE",
}, {
  primary: "Montserrat",
  secondary: "Helvetica",
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Clean Architecture With Go
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Maxim Schepelin. Gett RnD. 2018
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
            <p>Same functional requrements. One focus on security other focus on usability</p>
            <p>Ultimately both systems will be absolutely different</p>
            <h4>Outputs of archutecture process</h4>
            <ol>
              <li>Consistent functional requirements (What system does)</li>
              <li>List of the quality attrbutes supported by the system (How the system does what it does)</li>
            </ol>
          </Notes>
          <Layout>
            <Fill><Text textColor="primary" bold>Extensibility</Text></Fill>
            <Fill><Text textColor="primary" bold>Availability</Text></Fill>
            <Fill><Text textColor="primary" bold>Security</Text></Fill>
          </Layout>
          <Text textColor="secondary">noop</Text>
          <Layout>
            <Fill><Text textColor="primary" bold>Scalability</Text></Fill>
            <Fill><Text textColor="primary" bold>Modularity</Text></Fill>
            <Fill><Text textColor="primary" bold>Maintainability</Text></Fill>
          </Layout>
          <Text textColor="secondary">noop</Text>
          <Layout>
            <Fill><Text textColor="primary" bold>Reliability</Text></Fill>
            <Fill><Text textColor="primary" bold>Testability</Text></Fill>
            <Fill><Text textColor="primary" bold>Auditability</Text></Fill>
          </Layout>
          <Text textColor="primary">...</Text>
          <Link textColor="tertiary" href="https://en.wikipedia.org/wiki/List_of_system_quality_attributes">
            *Full list of system quality attributes
          </Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>Derived from DDD</p>
            <p>Clean architecture approach establishes 4 principles</p>
            <p>Why those four? Designing with focus on the long-term</p>
            <p>These principles imply some quality attributes</p>
            <p>Which one do you think?</p>
          </Notes>
          <Heading size={3} textColor="primary">Clean architecture</Heading>
          <List textColor="primary">
            <ListItem>Framework agnostic business logic</ListItem>
            <ListItem>Dependency isolation</ListItem>
            <ListItem>Easy to test</ListItem>
            <ListItem>Independent of UI</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <h4>Why those three?</h4>
            <ol>
              <li>They are critical for any long-term project</li>
              <li>They impact development process itself. Your DoD, Quality gates, Acceptance criteria</li>
            </ol>
          </Notes>
          <Layout>
            <Fill><Text textColor="tertiary" bold>Extensibility</Text></Fill>
            <Fill><Text textColor="primary" bold>Availability</Text></Fill>
            <Fill><Text textColor="primary" bold>Security</Text></Fill>
          </Layout>
          <Text textColor="secondary">noop</Text>
          <Layout>
            <Fill><Text textColor="primary" bold>Scalability</Text></Fill>
            <Fill><Text textColor="primary" bold>Modularity</Text></Fill>
            <Fill><Text textColor="tertiary" bold>Maintainability</Text></Fill>
          </Layout>
          <Text textColor="secondary">noop</Text>
          <Layout>
            <Fill><Text textColor="primary" bold>Reliability</Text></Fill>
            <Fill><Text textColor="tertiary" bold>Testability</Text></Fill>
            <Fill><Text textColor="primary" bold>Auditability</Text></Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>As the first step of the architecture process we must grasp the domain knowledge</p>
            <p>The model of bussines domain defines what componenst the system will consist of</p>
            <p>
              For example: flight tiket buying.
              What is for flight company. "Passenger" maybe "seat" maybe "flight ticket"
            </p>
            <p>Entities are concepts whose instances are uniquely identifiable</p>
            <p>Entites are not models!. It has no idea how it will be stored</p>
            <p>Use-Case it's a business process reporesentation</p>
            <p>Service it's a component responsible for a set of use cases</p>
          </Notes>
          <Heading size={3} textColor="primary">
            Domain exploration
          </Heading>
          <Heading size={3} textColor="tertiary">
            Entities, Use-Cases, and Services
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>The core of your system is Entites and Use-Cases</p>
            <p>Strict rule: dependencies goes only inwards. Not outward</p>
          </Notes>
          <Image src={images.diagram} width={772} height={567}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>To show the code I built an example service</p>
          </Notes>
          <Heading size={3} textColor="primary">
            Image resizing
          </Heading>
          <BlockQuote>
            <Text textColor="primary" padding="0 0 20px 0">Upload an image for resize with given width and height</Text>
            <Text textColor="primary" padding="0 0 20px 0">Get the original image</Text>
            <Text textColor="primary" padding="0 0 20px 0">Get the resized image</Text>
          </BlockQuote>
        </Slide>

      </Deck>
    )
  }
}
