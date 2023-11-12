import { RotatingLines } from 'react-loader-spinner';
import { Preloader, SpinnerStyle } from './Spinner.styled';

export const Spinner = () => {
  return (
    <Preloader>
      <SpinnerStyle>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </SpinnerStyle>
    </Preloader>
  );
};
