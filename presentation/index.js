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
  endpoints: require("raw-loader!../assets/code/endpoints.go"),
  transport: require("raw-loader!../assets/code/transport.go"),
  main: require("raw-loader!../assets/code/main.go"),
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
            <p>The model of business domain defines what componenst the system will consist of</p>
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
            With no idea of implementation details

            DDD Anti corruption layer
          `}
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

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>At this point, I implemented all the use-cases</p>
            <p>For transport layer I gonna use go-kit.</p>
            <p>It's not MVC framework. But, also has layers</p>
            <p>Transport layer it's encapsulates protocol specific details</p>
            <p>Endpoint layer it's an abstraction over Service. Represent entrypoint to a use case</p>
            <p>Service layer. Where the business logic lives</p>
          </Notes>
          <Heading size={3} textColor="primary">
            Expose API
            <Text textColor="tertiary">Go-kit</Text>
          </Heading>

          <BlockQuote>
            <Text textColor="primary" padding="0 0 20px 0">Transport layer</Text>
            <Text textColor="primary" padding="0 0 20px 0">Endpoint layer</Text>
            <Text textColor="primary" padding="0 0 20px 0">Service layer</Text>
          </BlockQuote>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          color={colors.primary}
          transition={["fade"]}
          lang="go"
          code={code.endpoints}
          notes={`
            Enpoint it's a function.
            Responsible for converting request data
            into service method arguments
            and service output to the response
          `}
          ranges={[
            { loc: [6, 7], title: "Endpoint layer" },
            { loc: [9, 14], note: "Request format" },
            { loc: [15, 19], note: "Response format" },
            { loc: [23, 27], note: "Endpoint it's a function" },

            { loc: [27, 29], note: "Transform external request into service object arguments" },
            { loc: [32, 37], note: "Calls service's method" },
            { loc: [37, 41], note: "Returns response" },
          ]}
        />

        <CodeSlide
          bgColor="secondary"
          color={colors.primary}
          transition={["fade"]}
          lang="go"
          code={code.transport}
          notes={`
            At transport layer I'll use http.
            Transport wraps endpoint with particular protocol implementation

            Transport can be gRPC, nats, kafka,
          `}
          ranges={[
            { loc: [8, 9], title: "Transport layer" },
            { loc: [24, 33], note: "Build HTTP handler around endpoint" },
            { loc: [27, 28], note: "Go-Kit does the dirty job" },
            { loc: [28, 29], note: "Receives endpoint" },
            { loc: [29, 30], note: "Request decoding can be customized" },
            { loc: [15, 22], note: "Custom error for json decoding" },
            { loc: [30, 31], note: "Go-kit provides encoders/decoders for popular formats" },
          ]}
        />

        <CodeSlide
          bgColor="secondary"
          color={colors.primary}
          transition={["fade"]}
          lang="go"
          code={code.main}
          notes={`
            And the last thing I do it's building the main package
          `}
          ranges={[
            { loc: [0, 1], title: "Build the binary" },
            { loc: [8, 11], note: "Import implementations of dependencies and services" },

            { loc: [13, 20], note: "Dependency: Image ID generator" },

            { loc: [22, 27], note: "Connect tothe database" },
            { loc: [27, 28], note: "Initialize postgress storage dependency" },
            { loc: [28, 29], note: "Initialize ResizeService dependency" },

            { loc: [29, 34], note: "Initialize ImageService with all dependencies" },
            { loc: [35, 36], note: "Create handler for upload use-case" },

            { loc: [36, 38], note: "Create a router. Bind handler" },

            { loc: [38, 43], note: "Create and run http server" },

          ]}
        />

        {/*TODO: Add pros and cons slides*/}

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>Design knowledge lays down in the code not supplimentary documentation</p>
            <p>Show me your design (outdated photo of whiteboard)</p>
          </Notes>
          <Heading size={3} textColor="primary">
            Advantages
          </Heading>

          <BlockQuote>
            <Text textColor="primary" padding="0 0 20px 0">
              Design embedded into the code. Not supplimentary documentation
            </Text>
            <Text textColor="primary" padding="0 0 20px 0">
              Design and implementation are separated processes
            </Text>
            <Text textColor="primary" padding="0 0 20px 0">
              Ability to adjust quality attributes without changing business logic
            </Text>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>Not traditional way of writing software</p>

          </Notes>
          <Heading size={3} textColor="primary">
            Drawbacks
          </Heading>

          <BlockQuote>
            <Text textColor="primary" padding="0 0 20px 0">
              Boilerplate code
            </Text>
            <Text textColor="primary" padding="0 0 20px 0">
              Har to implement in a large team
            </Text>
            <Text textColor="primary" padding="0 0 20px 0">
              Bound to domain knowledge
            </Text>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">
            Questions?
          </Heading>
          <Text textColor="tertiary">
            m.schepelin@gmail.com
          </Text>
        </Slide>


        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">
            Resources
          </Heading>
          <BlockQuote>
            <List>
              <ListItem>
                <Link textColor="tertiary" href="https://en.wikipedia.org/wiki/List_of_system_quality_attributes">
                  List of system quality attributes
                </Link>
              </ListItem>
              <ListItem>
                <Link textColor="tertiary" href="https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html">
                  Original article "Clean architecture"
                </Link>
              </ListItem>
              <ListItem>
                <Link textColor="tertiary" href="http://a.co/68ZcJ15">
                  Book: Robert C. Martin – "Clean architecture"
                </Link>
              </ListItem>
              <ListItem>
                <Link textColor="tertiary" href="http://a.co/jg6sKfJ">
                  Book: Eric Evans – "Domain Driven Design"
                </Link>
              </ListItem>
            </List>
          </BlockQuote>
        </Slide>

      </Deck>
    )
  }
}
