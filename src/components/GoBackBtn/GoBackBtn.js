// import { HIChevronDoubleLeft } from '@icongo/hi/lib/HIChevronDoubleLeft';
import { HIChevronDoubleLeftOutline } from '@icongo/hi/lib/HIChevronDoubleLeftOutline';
// import { BsArrowLeft } from 'react-icons/bs';
import { Button, Container } from './GoBackBtn.styled';

export const GoBackBtn = () => {
  return (
    <Container>
      <Button>
        <HIChevronDoubleLeftOutline />
        <p>Go back</p>
      </Button>
    </Container>
  );
};
