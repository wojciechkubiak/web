import { FormEvent, useContext, useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import {
  FaDeviantart,
  FaGit,
  FaFacebook,
  FaLinkedin,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import axios from 'axios';

import ThemeContext from '../../context/Style';
import PageContext from '../../context/Page';

import { Page } from '../../types/Pages';

import {
  Container,
  Form,
  FormContainer,
  SocialContainer,
  Socials,
} from './ContactStyle';
import {
  Header,
  Input,
  TextArea,
  SubmitButton,
} from './ContactStyle';
import IconButton from '../../components/IconButton/IconButton';

interface IContact {
  t: any;
}

type Message = {
  email: string;
  subject: string;
  message: string;
};

const defaultMessage: Message = {
  email: '',
  subject: '',
  message: '',
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

  const onSubmit = (
    e: FormEvent<HTMLFormElement>,
    message: Message,
  ): void => {
    e.preventDefault();

    if (message.message && message.subject && message.email) {
      setDisabled(true);
      axios
        .post('https://priv-email-sender.herokuapp.com/', message)
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

  const onChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const element = e.currentTarget as HTMLInputElement;

    setMessage((prevState) => ({
      ...prevState,
      [element.name]: element.value,
    }));
  };

  const onIconClicked = (value: string) => {
    window.open(value, '_blank');
  };

  return (
    <Container transform={transform}>
      <FormContainer theme={themeCtx.themeMode}>
        <IconButton
          onClick={() => pageCtx.setCurrentPage(Page.SKILLS)}
          text={t('global.back', { framework: 'react-i18next' })}
        >
          <BsArrowLeft size={64} />
        </IconButton>
        <Header theme={themeCtx.themeMode}>
          {t('pages.contact', { framework: 'react-i18next' })}
        </Header>
        <Form onSubmit={(event) => onSubmit(event, message)}>
          <Input
            name="email"
            placeholder={t('form.email', {
              framework: 'react-i18next',
            })}
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
            placeholder={t('form.subject', {
              framework: 'react-i18next',
            })}
            value={message.subject}
            onChange={onChange}
            minLength={2}
            maxLength={42}
            theme={themeCtx.themeMode}
            required
          />
          <TextArea
            name="message"
            placeholder={t('form.message', {
              framework: 'react-i18next',
            })}
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
        <Socials theme={themeCtx.themeMode}>
          <FaLinkedin
            size={42}
            onClick={() =>
              onIconClicked(
                'https://www.linkedin.com/in/wojciechkubiakin',
              )
            }
          />
          <FaGit
            size={42}
            onClick={() =>
              onIconClicked('https://www.github.com/wojciechkubiak')
            }
          />
          <FaFacebook
            size={42}
            onClick={() =>
              onIconClicked(
                'https://www.facebook.com/wojciechkubiakfb',
              )
            }
          />
          <FaDeviantart
            size={42}
            onClick={() =>
              onIconClicked('https://deviantart.com/biakku')
            }
          />
        </Socials>
      </SocialContainer>
    </Container>
  );
};

export default Contact;
