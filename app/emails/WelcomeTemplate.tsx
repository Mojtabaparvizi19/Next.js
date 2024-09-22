import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from "@react-email/components";
import { CSSProperties } from "react";

const link: CSSProperties = {
  background: "rgb(222,222,222,0.5)",
  padding: "10px",
  borderRadius: "10px",
};
const textStyle: CSSProperties = {
  padding: "10px",
  borderRadius: "10px",
  background: "rgb(110 ,110,110,0.6)",
  border: "1px solid rgb(220,220,220,0.5)",
};

function WelcomeTemplate({ name }: { name: string }) {
  return (
    <Html>
      <Preview>Welcome Aboard!</Preview>
      <Tailwind>
        <Body className="p-5">
          <Container>
            <Text style={textStyle} className="font-bold text-[40px]">
              Hello {name}
            </Text>
            <Link style={link} href="http://google.com">
              Hi Babbbbbezzzzzz
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default WelcomeTemplate;
