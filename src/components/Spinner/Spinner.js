import { TailSpin } from 'react-loader-spinner';
import { Preloader, SpinnerStyle } from './Spinner.styled';

export const Spinner = () => {
  return (
    <Preloader>
      <SpinnerStyle>
        <TailSpin
          height="40"
          width="40"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </SpinnerStyle>
    </Preloader>
  );
};
