import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

export const StyledReactQuill = styled(ReactQuill)`
  width: 72rem;

  .ql-editor {
    height: 26rem;
  }

  .ql-container {
    border-bottom-left-radius: 1.5em;
    border-bottom-right-radius: 1.5em;
  }
  .ql-toolbar {
    border-top-left-radius: 1.5em;
    border-top-right-radius: 1.5em;
  }

  @media (min-width: 375px) {
    width: 100%;
  }
`;

export const ReactQuillContainer = styled.div`
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray-300, #ccc);
  overflow: hidden;

  @media screen and (min-width: 375px) {
    width: 100%;
  }
  @media screen and (min-width: 767px) {
    width: 72rem;
  }
`;
