import styled from 'styled-components'

export const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .animate {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
