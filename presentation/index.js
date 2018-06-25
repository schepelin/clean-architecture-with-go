// Import React
import React from "react"

// Import Spectacle Core tags
import {
  BlockQuote,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Notes,
  Slide,
  Text,
  Appear,
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
  rootPackage: require("raw-loader!../assets/code/uploader.go"),
  storage: require("raw-loader!../assets/code/storage.go"),
  serviceImplementation: require("raw-loader!../assets/code/implementation.go"),


  tests: require("raw-loader!../assets/code/tests.go"),
  endpoints: require("raw-loader!../assets/code/endpoints.go"),
  transport: require("raw-loader!../assets/code/transport.go"),
  main: require("raw-loader!../assets/code/main.go"),
}
preloader(code)

const colors = {
  primary: "#FEFEFE",
  secondary: "#1F2022",
  tertiary: "#FFBF00",
  quarternary: "#CECECE",
}

const theme = createTheme(colors, {
  primary: "Montserrat",
  secondary: "Helvetica",
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        contentHeight={900}
        contentWidth={1200}
      >
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
            <Heading textColor="primary" size={3} textAlign="left">
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
            <Text textColor="tertiary">Entities, Use-Cases, and Services</Text>
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
            <p>To show the code I built an realy simple service for image uploading</p>
          </Notes>
          <Heading size={3} textColor="primary">
            Image uploading
          </Heading>
          <List textAlign="left">
            <ListItem textColor="primary" padding="0 0 20px 0">Upload an image to the service</ListItem>
            <ListItem textColor="primary" padding="0 0 20px 0">Get the link to uploaded image</ListItem>
            <ListItem textColor="primary" padding="0 0 20px 0">Get an image by openning the link</ListItem>
          </List>
          <Appear>
            <List textAlign="left">
              <ListItem textColor="tertiary" padding="0 0 20px 0">
                Do not upload the same image twice
              </ListItem>
              <ListItem textColor="tertiary" padding="0 0 20px 0">
                Make links easy to copy (short urls)
              </ListItem>
            </List>
          </Appear>

        </Slide>

        <CodeSlide
          bgColor="secondary"
          color={colors.primary}
          transition={["fade"]}
          lang="go"
          code={code.rootPackage}
          notes={`
            Hasher and URLShortener define contracts between the components of the system
          `}
          ranges={[
            { loc: [14, 19], note: "Describe Image entity" },
            { loc: [15, 16], note: "ID will store hash of an image to check uniqueness" },
            { loc: [16, 17], note: "Store an image's content as a byte slice" },

            { loc: [21, 22], note: "UploadService describes use cases" },
            { loc: [22, 25], note: "Upload an image and return link" },
            { loc: [25, 28], note: "Get image. Returns Image entity" },

            { loc: [31, 34], note: "Encapsulates Image's ID generation" },
            { loc: [36, 39], note: "Encapsulates short URL generation logic" },

          ]}
        />

        <CodeSlide
          bgColor="secondary"
          color={colors.primary}
          transition={["fade"]}
          lang="go"
          code={code.storage}
          notes={
            `To start design my service I definitely the storage.
            I will prepare the interface for storage

            DDD Anti corruption layer. I built abstraction layer over storage
          `}
          ranges={[
            { loc: [10, 11], note: "Define a storage interface" },
            { loc: [11, 14], note: "Saves Image entity to the storage" },
            { loc: [14, 17], note: "Get image from the storage" },
            { loc: [10, 18], note: "Defines anti-corruption layer for application logic" },
          ]}
        />

        <CodeSlide
          bgColor="secondary"
          color={colors.primary}
          transition={["fade"]}
          lang="go"
          code={code.serviceImplementation}
          notes={`
            I have all the interfaces and isolated dependencies.
            At this point, I can start implementation of Use-Cases

            Dependency injection example.

            I haven't written executable code.
            But, I already can model use cases
          `}
          ranges={[
            { loc: [11, 16], note: "Define a struct with all the dependencies" },
            { loc: [12, 13], note: "Storage for Image saving" },
            { loc: [13, 14], note: "URL shortener" },
            { loc: [14, 15], note: "Hasher for Image ID generation" },

            { loc: [17, 20], note: "Implement GetImage use case" },
            { loc: [20, 21], note: "Just get an image from the storage" },

            { loc: [23, 26], note: "Implement Upload image use case" },
            { loc: [26, 27], note: "Generate Image ID" },
            { loc: [28, 33], note: "Initialize the Image entity" },

            { loc: [33, 34], note: "Try to save an Image to the storage" },

            { loc: [35, 41], note: "Handle behavior depend on storage error" },

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

            It tests that my design works as expected.
            I can model any behavior I want with test.

            Critical difference with supplimentary documentation approach
            I can play around with my design decision and evaluate based on real use case
          `}
          ranges={[
            { loc: [14, 16], note: "Initialize a mocks controller" },
            { loc: [16, 19], note: "Initialize dependencies mocks" },
            { loc: [21, 26], note: "Build UploadService with mocks" },
            { loc: [26, 31], note: "Prepare expected Image entetity" },

            { loc: [32, 33], note: "Set up mocked dependencies expectation" },
            { loc: [33, 36], note: "Set up ID Hasher will return" },
            { loc: [36, 39], note: "Set up Shortener expected output" },
            { loc: [39, 42], note: "Set expecatation for Storage call. Return an error" },

            { loc: [44, 47], note: "Call the use case" },
            { loc: [47, 49], note: "Assert results" },
          ]}
        />

        {/* TODO: stopped here */}

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

          <List textAlign="left">
            <ListItem textColor="primary" padding="0 0 20px 0">Transport layer</ListItem>
            <ListItem textColor="primary" padding="0 0 20px 0">Endpoint layer</ListItem>
            <ListItem textColor="primary" padding="0 0 20px 0">Service layer</ListItem>
          </List>
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

            { loc: [36, 38], note: "Create a router. Bind the handler" },

            { loc: [38, 43], note: "Create and run http server" },

          ]}
        />

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>Design knowledge lays down in the code not supplimentary documentation</p>
            <p>Show me your design (outdated photo of whiteboard)</p>
          </Notes>
          <Heading size={3} textColor="primary">
            Advantages
          </Heading>

          <List textColor="primary" ordered textAlign="left">
            <ListItem padding="0 0 20px 0">
              Design with a code, not supplimentary documentation
            </ListItem>
            <ListItem padding="0 0 20px 0">
              Reveals design solutions
            </ListItem>
            <ListItem padding="0 0 20px 0">
              Focus on the Long-Term
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>Not traditional way of writing software</p>

          </Notes>
          <Heading size={3} textColor="primary">
            Drawbacks
          </Heading>
          <List textColor="primary" ordered textAlign="left">
            <ListItem padding="0 0 20px 0">
              Not traditional way to build software
            </ListItem>
            <ListItem padding="0 0 20px 0">
              Ivory tower architect pitfall
            </ListItem>
            <ListItem padding="0 0 20px 0">
              Boilerplate code
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">
            Questions?
          </Heading>
          <Text textColor="tertiary">
            schepelin@gett.com
          </Text>
          <Link textColor="tertiary" href="https://github.com/schepelin">
            @schepelin
          </Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">
            Resources
          </Heading>
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
        </Slide>

      </Deck>
    )
  }
}
