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
const code = {
  entities: require("raw-loader!../assets/code/entities.go"),
  services: require("raw-loader!../assets/code/services.go"),
  storage: require("raw-loader!../assets/code/storage.go"),
  serviceImplementation: require("raw-loader!../assets/code/implementation.go"),
  tests: require("raw-loader!../assets/code/tests.go"),
}
preloader(code)

const colors = {
  primary: "#FAFAFA",
  secondary: "#1F2022",
  tertiary: "#FFBF00", // "#03A9FC",
  quarternary: "#CECECE",
}

const theme = createTheme(colors, {
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
            <p>Here is the list of use cases</p>
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

        <CodeSlide
          bgColor="secondary"
          color={colors.primary}
          transition={["fade"]}
          lang="go"
          code={code.entities}
          ranges={[
            { loc: [2, 6], note: "Image representation" },
            { loc: [7, 13], note: "Resize Job" },
            { loc: [14, 19], note: "Result of resize" },
          ]}
        />

        <CodeSlide
          bgColor="secondary"
          color={colors.primary}
          transition={["fade"]}
          lang="go"
          code={code.services}
          notes={
            `Framework agnostic business logic
            Not the db schema not the framework.
            Not even main package
            `
          }
          ranges={[
            { loc: [6, 7], note: "Encapsulates uploading and getting use-cases" },
            { loc: [7, 12], note: "Recieves bytes and sizes. Returns ResizeJob entity and error" },
            { loc: [13, 17], note: "Recieves ID and returns Image entity" },

            { loc: [24, 25], note: "Encapsulates resize related logic" },
            { loc: [25, 29], note: "Responsible for image format encoding, resize algorith and so on" },

            { loc: [32, 35], note: "Supplimentary interface for Image ID generation" },

            { loc: [4, 5], note: "Generate mocks for all defined interfaces" },
          ]}
        />

        <CodeSlide
          bgColor="secondary"
          color={colors.primary}
          transition={["fade"]}
          lang="go"
          code={code.storage}
          notes={
            `At this point, I need a storage.
            I'll show the dependency isolation principle of Clean Architecture
            I defined a storage with meaningfull methods for my business logic.
            With no idea of implementation details`
          }
          ranges={[
            { loc: [10, 11], note: "Define a storage interface" },
            { loc: [11, 15], note: "Saves Image entity to a storage" },
            { loc: [21, 25], note: "Saves resize job parameters" },

            { loc: [2, 3], note: "Generates mocks for storage interface" },
          ]}
        />

        <CodeSlide
          bgColor="secondary"
          color={colors.primary}
          transition={["fade"]}
          lang="go"
          code={code.serviceImplementation}
          notes={
            `I have all the interfaces and isolated dependencies.
            At this point, I can start implementation of Use-Cases
            Dependency injection example.

            I model the domain with struct and interfaces of programmign language
            `
          }
          ranges={[
            { loc: [2, 7], note: "Define a struct with all the dependencies" },
            { loc: [8, 15], note: "Define constructor function for convenience" },

            { loc: [16, 17], note: "Implementing upload use-case" },
            { loc: [21, 25], note: "Create the Image entity instance" },
            { loc: [25, 29], note: "Save it to storage" },
            { loc: [29, 34], note: "Create the ResizeJob" },
            { loc: [34, 41], note: "Save to a storage. Get an ID from it" },
            { loc: [42, 44], note: "Run resize process and return the job entity" },
          ]}
        />

        <CodeSlide
          bgColor="secondary"
          color={colors.primary}
          transition={["fade"]}
          lang="go"
          code={code.tests}
          notes={`
            I can write a test for that.

            Test as design experiment.
            It tests that my design works as expected.
            It's a huge benefit as compare with diagrams and whitebord drawings

            Design process has meaningful and measurable output
          `}
          ranges={[
            { loc: [5, 10], note: "Initialize the mocks for dependencies" },
            { loc: [11, 16], note: "Initialize with mocked dependencies" },
            { loc: [17, 29], note: "Set up expected values" },
            { loc: [31, 43], note: "Set up mocks expectations" },
            { loc: [33, 36], note: "Storage call for new image" },
            { loc: [36, 39], note: "Storage call for resize job" },
            { loc: [39, 42], note: "ResizeService for job processing" },

            { loc: [43, 46], note: "Run the use case" },
            { loc: [46, 48], note: "Assert the result" },

          ]}
        />

      </Deck>
    )
  }
}
