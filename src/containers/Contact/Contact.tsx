import { FormEvent, useContext, useEffect, useState } from "react";
import axios from "axios";

import {
  Container,
  Form,
  FormContainer,
  SocialContainer,
} from "./ContactStyle";
import PageContext from "../../context/Page";
import { Page } from "../../types/Pages";
import ThemeContext from "../../context/Style";
import { BsArrowLeft } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import IconButton from "../../components/IconButton/IconButton";
import { Header, Input, TextArea, SubmitButton } from "./ContactStyle";

interface IContact {
  t: any;
}

type Message = {
  email: string;
  subject: string;
  message: string;
};

const defaultMessage: Message = {
  email: "",
  subject: "",
  message: "",
};

const Contact = ({ t }: IContact) => {
  const pageCtx = useContext(PageContext);
  const themeCtx = useContext(ThemeContext);

  const [message, setMessage] = useState<Message>(defaultMessage);
  const [transform, setTransform] = useState<number>(150);
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (pageCtx.currentPage !== Page.CONTACT) {
      setTransform(100);
    } else {
      setTransform(50);
    }
  }, [pageCtx]);

  const onSubmit = (e: FormEvent<HTMLFormElement>, message: Message): void => {
    e.preventDefault();

    if (message.message && message.subject && message.email) {
      setDisabled(true);
      axios
        .post("https://priv-email-sender.herokuapp.com/", message)
        .then((resp) => {
          setDisabled(false);
          setMessage(defaultMessage);
          console.log(resp.status);
        })
        .catch((e) => {
          setDisabled(false);
          setMessage(defaultMessage);
          console.error(e);
        });
    }
    console.log(message);
  };

  const onChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const element = e.currentTarget as HTMLInputElement;

    setMessage((prevState) => ({
      ...prevState,
      [element.name]: element.value,
    }));
  };

  return (
    <Container transform={transform}>
      <FormContainer>
        <IconButton
          onClick={() => pageCtx.setCurrentPage(Page.SKILLS)}
          text="Back"
        >
          <BsArrowLeft size={64} />
        </IconButton>
        <Header theme={themeCtx.themeMode}>Contact</Header>
        <Form onSubmit={(event) => onSubmit(event, message)}>
          <Input
            name="email"
            placeholder="Your email"
            value={message.email}
            onChange={onChange}
            minLength={2}
            maxLength={42}
            type="email"
            theme={themeCtx.themeMode}
            required
          />
          <Input
            name="subject"
            placeholder="Subject"
            value={message.subject}
            onChange={onChange}
            minLength={2}
            maxLength={42}
            theme={themeCtx.themeMode}
            required
          />
          <TextArea
            name="message"
            placeholder="Message"
            value={message.message}
            onChange={onChange}
            minLength={32}
            theme={themeCtx.themeMode}
            required
          />
          <SubmitButton
            type="submit"
            theme={themeCtx.themeMode}
            disabled={disabled}
          >
            <FiSend size={52} />
          </SubmitButton>
        </Form>
      </FormContainer>
      <SocialContainer>
        <FiSend size={42} />
      </SocialContainer>
    </Container>
  );
};

export default Contact;
