import { RefObject, useEffect, useRef, useState } from "react";

// import Clients from "./components/Clients";
import Container from "./components/Container";
import Features from "./components/Features/Features";
import Footer from "./components/Footer";
import FormSection from "./components/FormSection/FormSection";
import Header from "./components/Header";
import MainInfo from "./components/MainInfo";
import Subscriptions from "./components/Subscriptions";
import Wrapper from "./components/Wrapper";
import ButtonSticky from "./components/ButtonSticky";

export default function App() {
  const headerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const subscriptionsRef = useRef<HTMLDivElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);

  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrooll = () =>
    scrollToSection(headerRef as RefObject<HTMLDivElement>);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Header
        scrollToSection={scrollToSection}
        refs={{ featuresRef, aboutRef, subscriptionsRef, formSectionRef }}
        ref={headerRef}
      />
      <MainInfo
        scrollToSection={scrollToSection}
        formSectionRef={formSectionRef}
      />
      <Wrapper>
        <Features
          ref={featuresRef}
          scrollToSection={scrollToSection}
          formSectionRef={formSectionRef}
        />
        {/* <Clients /> */}
        <Subscriptions ref={subscriptionsRef} />
        <FormSection ref={formSectionRef} />
      </Wrapper>
      <Footer ref={aboutRef} />
      {showScrollButton && <ButtonSticky handleClick={handleScrooll} />}
    </Container>
  );
}
