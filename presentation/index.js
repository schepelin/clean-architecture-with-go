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
          <Notes>
            <p>During the talk I'll consider an architecture process itself</p>
            <p>Then, I'll explain what is a clean architecture approach</p>
            <p>And last, I'll show the code of my demo app</p>
          </Notes>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Clean Architecture With Go
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Maxim Schepelin. Gett RnD. 2018
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>Developers like to argue about architecture stuff</p>
            <p>But why architecture is important?</p>
            <p>Wy is it worth to invest our effort to an architecture staff?</p>
          </Notes>
          <Heading size={3} textColor="primary">Why architecture is important?</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>From my point of view, the answer is</p>
            <p>Work – system executes functional requirements</p>
            <p>And, the Conditions – amount of users, a budget, a reponse time and so on</p>
            <p>Conditions are described by the quality attributes</p>
          </Notes>
          <BlockQuote>
            <Heading textColor="primary" size={3} textAlign="left" textSize="4.9rem">
              To make a system <Text textColor="tertiary" textSize="4.9rem" size={4}>work*</Text> under certain
              <Text textColor="tertiary" size={4} textSize="4.9rem">conditions*</Text>
            </Heading>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>Here is a list of some quality attributes</p>
            <p>The full list is much longer</p>

            <p>The chosen quality attributes impact the final design of the system</p>

            <p>Suppose, you and I design two online banking apps with the same functional requrement</p>
            <p>But, we focus on different quality attributes</p>
            <p>Your is performance and usability</p>
            <p>And my is security</p>

            <h4>The outputs of archutecture process</h4>
            <ol>
              <li>Consistent functional requirements (What system does)</li>
              <li>List of the quality attrbutes fo a system (How the system does what it does)</li>
            </ol>
            <p>Now, lest's go to the clean architecture aprroach</p>
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
            <p>So, clean architecture</p>
            <p>It's the guidline for design process</p>
            <p>Which establishes 4 principles</p>
            <p>Read them</p>
            <p>Why those four?</p>
            <p>That's the things your customer will never ask you</p>

            <p>BTW, these principles imply some of the quality attributes</p>
            <p>Which ones do you think?</p>
          </Notes>
          <Heading size={3} textColor="primary">Clean architecture</Heading>
          <List textColor="primary">
            <ListItem>Framework agnostic business logic</ListItem>
            <ListItem>Dependency isolation</ListItem>
            <ListItem>Easy to test</ListItem>
            <ListItem>Independent of UI and transport</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>Why those three?</p>
            <p>They are critical for any long-term project</p>
            <p>The impact development process itself. Your DoD, Quality gates, Acceptance criteria</p>
            <p>They affects not only what the final design of a solution</p>
            <p>But also the way we build the solutin</p>
            <p>
              You have to care about technical debt and lead time<br/>
              And, restrain it against growing<br/>
              Manage the complexity of your codebase<br/>
            </p>
            <p>So, the first thing we should start with</p>
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
            <p>Framework agnostic business logic</p>
            <p>You have to align the solution with the business domain</p>

            <p>The model of business domain defines what components the system will consist of</p>
            <p>
              For example: flight tiket buying.
              You are my customer, and you define flight ticket as "seats" in the plane
              And I as developer define in my code base a passenger model
            </p><br/>

            <p>Such things are called Entites</p>
            <p>Entities are concepts whose instances are uniquely identifiable</p>
            <p>Entites are not models! It has no idea how it will be stored</p>

            <p>A Use-Case it's a reporesentation of a business process</p>
            <p>A Service it's a component of the system responsible for a bunch of use cases</p>
          </Notes>
          <Heading size={3} textColor="primary">
            Align with the domain
            <Text textColor="tertiary">Entities, Use-Cases, and Services</Text>
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>The core of your system is Entites and Use-Cases</p>
            <p>Strict rule: dependencies goes only inwards. Not outward</p>
            <p>Your entities know about nothing</p>
            <p>Use cases know about entities</p>
            <p>But, all the business logic is not aware of transport layer or UI od Databse</p>
            <p>Which means it has no dependencies</p>
          </Notes>
          <Image src={images.diagram} width={772} height={567}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>To show the approach I built the simple app for image uploading</p>

            <p>Next slides I'll show of my example app and explain the code</p>
          </Notes>
          <Heading size={3} textColor="primary">
            Image uploading
          </Heading>
          <List textAlign="left">
            <ListItem textColor="primary" padding="0 0 20px 0">Upload an image to the server</ListItem>
            <ListItem textColor="primary" padding="0 0 20px 0">Get the link to an uploaded image</ListItem>
            <ListItem textColor="primary" padding="0 0 20px 0">Get an image by openning the link</ListItem>
          </List>
          <Appear>
            <List textAlign="left">
              <ListItem textColor="tertiary" padding="0 0 20px 0">
                Do not upload the same image twice
              </ListItem>
              <ListItem textColor="tertiary" padding="0 0 20px 0">
                Make links easy to copy (use short urls)
              </ListItem>
            </List>
          </Appear>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          color={colors.primary}
          transition={["fade"]}
          lang="clike"
          code={code.rootPackage}
          notes={`
            Hasher and URLShortener define contracts between the components of the system
          `}
          ranges={[
            { loc: [0, 1], note: "Package which describes Entities and Use Cases" },
            { loc: [2, 6], note: "No application level dependencies" },
            { loc: [14, 19], note: "Describe Image entity" },
            { loc: [15, 16], note: "ID will store hash of an image to check uniqueness" },
            { loc: [16, 17], note: "Store an image's content as a byte slice" },

            { loc: [21, 22], note: "UploadService describes use cases" },
            { loc: [22, 25], note: "Upload an image and return link" },
            { loc: [25, 28], note: "Get an image. Returns Image entity" },

            { loc: [31, 34], note: "Encapsulates Image's ID generation" },
            { loc: [36, 39], note: "Encapsulates short URL generation logic" },

          ]}
        />

        <CodeSlide
          bgColor="secondary"
          color={colors.primary}
          transition={["fade"]}
          lang="clike"
          code={code.storage}
          notes={
            `To start design my service I definitely the storage.
            I will prepare the interface for storage

            And isolate my storage by interface

            DDD it called Anti corruption layer. I built abstraction layer over storage
          `}
          ranges={[
            { loc: [10, 11], note: "Define a storage interface" },
            { loc: [11, 14], note: "Saves an Image entity to the storage" },
            { loc: [14, 17], note: "Get an image from the storage" },
            { loc: [10, 18], note: "ImagesStorage makes the application not aware of DB specific stuff" },
          ]}
        />

        <CodeSlide
          bgColor="secondary"
          color={colors.primary}
          transition={["fade"]}
          lang="clike"
          code={code.serviceImplementation}
          notes={`
            I have all the interfaces and isolated dependencies.
            At this point, I can start implementation of my Use-Cases

            Dependency injection example.

            I haven't written executable code.
            But, I already can model use cases
            I've defined the data flow through the application
          `}
          ranges={[
            { loc: [11, 16], note: "Define a struct with all the dependencies" },
            { loc: [12, 13], note: "Storage for Image saving" },
            { loc: [13, 14], note: "URL shortener" },
            { loc: [14, 15], note: "Hasher for Image ID generation" },

            { loc: [17, 20], note: "Implements GetImage use case" },
            { loc: [20, 21], note: "Just get an image from the storage" },

            { loc: [23, 26], note: "Implements Upload image use case" },
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
          lang="clike"
          code={code.tests}
          notes={`
            I can write a test for that.

            It tests that my design works as expected.
            I can model any behavior I want with test.

            Critical difference with supplimentary documentation approach
            I can play around with my design decision and evaluate based on real use case
          `}
          ranges={[
            { loc: [6, 7], note: "gomock generates mocks for defined interfaces" },
            { loc: [14, 16], note: "Initialize a mocks controller" },
            { loc: [16, 19], note: "Initialize dependencies mocks" },
            { loc: [21, 26], note: "Build UploadService with mocks" },
            { loc: [26, 31], note: "Prepare expected Image entetity" },

            { loc: [32, 33], note: "Set up mocked dependencies expectation" },
            { loc: [33, 36], note: "Set up ID Hasher will return" },
            { loc: [36, 39], note: "Set up Shortener expected output" },
            { loc: [39, 42], note: "Set expectation for Storage call. Return an error" },

            { loc: [44, 47], note: "Call the use case" },
            { loc: [47, 49], note: "Assert results" },
            { loc: [13, 14], note: "Models the data flow through the application" },
          ]}
        />

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>At this point, I implemented all the use-cases</p>
            <p>For transport layer I gonna use go-kit.</p>
            <p>It's not MVC framework. But, also has layers</p>
            <p>Transport layer it's encapsulates protocol specific details</p>
            <p>Endpoint layer define contracts between Service and transport lyaers.</p>
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
          lang="clike"
          code={code.endpoints}
          notes={`
            I've already shown the service layer.
            Now, I gonna show endpoint and transport layers
            ----
            Endpoint transforms request from transport to service layer calls.

          `}
          ranges={[
            { loc: [8, 9], note: "Use go-kit's endpoint to declare contract between service an transport" },
            { loc: [12, 15], note: "Endpoint is aware of what goes over transport layer" },
            { loc: [13, 14], note: "Request object might be aware of serialization details" },
            { loc: [16, 20], note: "Response describes what will be sent back over a transport layer" },
            { loc: [21, 23], note: "Create an endpoint for UploadService" },
            { loc: [23, 27], note: "Endpoint it's a function receives request and returns response" },

            { loc: [28, 31], note: "Convert base64 encoded image into bytes" },
            { loc: [34, 39], note: "Validate it" },
            { loc: [39, 40], note: "Make a call to the service layer" },
            { loc: [40, 44], note: "Produce the response" },
            { loc: [21, 27], note: "Endpoint abstracts a Service from details of getting request params" },
          ]}
        />

        <CodeSlide
          bgColor="secondary"
          color={colors.primary}
          transition={["fade"]}
          lang="clike"
          code={code.transport}
          notes={`
            I'll use http as the transport layer
            Transport wraps endpoint with particular protocol implementation
            ----
            Transport can be gRPC, nats, kafka, whatever.
            ----
            The rule of thumb is the transport must not affect your business logic layer.
          `}
          ranges={[
            { loc: [11, 12], note: "Use go-kit's library for HTTP" },
            { loc: [16, 19], note: "Create an HTTP handler for the service object" },
            { loc: [17, 18], note: "Receives service object" },
            { loc: [18, 19], note: "Returns an HTTP handler" },
            { loc: [19, 24], note: "Go-kit does the dirty job to create an HTTP handler" },

            { loc: [20, 21], note: "Just pass the endpoint" },
            { loc: [21, 22], note: "The request decoder" },
            { loc: [22, 23], note: "And, the response encoder" },

            { loc: [26, 30], note: "GetImage request decoder. Creates request object from the data passed over the protocol" },

            { loc: [30, 32], note: "Gets Image id from path" },
            { loc: [35, 38], note: "Creates request object which will be passed to the endpoint" },

            { loc: [40, 45], note: "GetImage response encoder. Transforms endpoint's response to a protocol specific params" },

            { loc: [45, 46], note: "Cast an endpoint's response to the particular type" },
            { loc: [46, 56], note: "Transforms endpoint's output to transport HTTP headers and body" },

            { loc: [54, 55], note: "Respond with bad status code if something went wrong" },

            { loc: [89, 92], note: "Collect all the handlers in one router" },
            { loc: [92, 93], note: "Initialize the router" },
            { loc: [93, 97], note: "Bind the Upload handler" },
            { loc: [97, 101], note: "Bind the GetImage handler" },

          ]}
        />

        <CodeSlide
          bgColor="secondary"
          color={colors.primary}
          transition={["fade"]}
          lang="clike"
          code={code.main}
          notes={`
            And the last thing I do it's building the executable binary
            ----
            Composing dependencies with each other
            And keep config, logging all infrastructure related topics away from application logic
            ----
            The code of this app was written in order I've shown
            ---
            Of course, I did some steps back when had discovered inconsistency in my design.
            I'll share the link to the repo with demo app
          `}
          ranges={[
            { loc: [0, 1], note: "It's time to build an executable binary" },
            { loc: [16, 21], note: "Define noopShortener, just to satisfy an interface" },
            { loc: [22, 30], note: "MD5 hash for Image ID generator" },

            { loc: [44, 48], note: "Initialize DB connection" },
            { loc: [52, 53], note: "Initialize postgres storage implementation" },
            { loc: [53, 58], note: "Initialize UploadService with dependencies" },
            { loc: [54, 55], note: "The Storage" },
            { loc: [55, 57], note: "Shortener and Hasher" },

            { loc: [59, 63], note: "Initialize the HTTP server" },
            { loc: [61, 62], note: "Pass the router" },
            { loc: [64, 71], note: "Run the HTTP server in a separeate goroutine" },
          ]}
        />

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>The design knowledge lays down in the code not supplimentary documentation</p>
            <p>Show me your design (outdated photo of whiteboard)</p>
            <p>Reveals design solutions</p>

            <p>Code produced by this approach is modular, testable, covered by abstraction layers</p>
          </Notes>
          <Heading size={3} textColor="primary">
            Advantages
          </Heading>

          <List textColor="primary" ordered textAlign="left">
            <ListItem padding="0 0 20px 0">
              The design lives in a code, not supplimentary documentation
            </ListItem>
            <ListItem padding="0 0 20px 0">
              An architecture is isomorphic to a business domain
            </ListItem>
            <ListItem padding="0 0 20px 0">
              Address long-term maintainability goals
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <p>Not traditional way of writing software</p>
            <p>I mean, all team have to understand the approach, know the domain, communicate with customers</p>
            <p>It requires some level of discipline for the team to follow</p>

            <p>Ivory tower</p>
            <p>Yes, we could model the data flow of an application with interfaces</p>
            <p>It's easy to say the rest is an implementatio ndetail</p>
            <p>You isolate dependencies and technical stuff. But it does not make them disappear</p>
            <p>Not, all the technical problems are magically solved</p>
            <p>It's still your responsibility to check feasibility of your design with technologies you will use</p>

            <p>Boilerplate</p>
            <p>By buiding abstraction layers you have to write some code</p>
            <p>If a reader of my code doesn't aware about the approach it looks useless</p>
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
            <ListItem padding="0 0 20px 0">
              <Link textColor="tertiary" href="https://github.com/schepelin/imguploader">
                The repo of the demo app written in clean approach
              </Link>
            </ListItem>
            <ListItem padding="0 0 20px 0">
              <Link textColor="tertiary" href="http://gokit.io/">
                Go-kit official site
              </Link>
            </ListItem>
            <ListItem padding="0 0 20px 0">
              <Link textColor="tertiary" href="https://en.wikipedia.org/wiki/List_of_system_quality_attributes">
                List of system quality attributes
              </Link>
            </ListItem>
            <ListItem padding="0 0 20px 0">
              <Link textColor="tertiary" href="https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html">
                Original article "Clean architecture"
              </Link>
            </ListItem>
            <ListItem padding="0 0 20px 0">
              <Link textColor="tertiary" href="http://a.co/68ZcJ15">
                Book: Robert C. Martin – "Clean architecture"
              </Link>
            </ListItem>
            <ListItem padding="0 0 20px 0">
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
