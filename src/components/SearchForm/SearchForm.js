import { BtnSubmit, FormContainer } from './SearchForm.styled';

export const SearchForm = ({ onSubmit, movieQuery }) => {
  return (
    <FormContainer>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          defaultValue={movieQuery}
        />
        <BtnSubmit type="submit">Search</BtnSubmit>
      </form>
    </FormContainer>
  );
};
