import styled from 'styled-components'

export const BarchartContainer = styled.div`
  background-color: #222222;
  color: #f5f5f5;
  border-radius: 8px;

  h5 {
    text-align: center;
    border-radius: 0.5rem;
    padding: 1rem;
    background-color: #414141;
    margin: 0.6rem 0.7rem;
  }
`

interface Props {
  isGeneralBalancePositive: boolean
}

export const StyledTooltip = styled.div<Props>`
  background-color: rgba(65, 65, 65, 0.8);
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  h6 {
    margin: 0;
  }

  .general-balance {
    color: ${({ isGeneralBalancePositive }) =>
      isGeneralBalancePositive ? '#9CE79C' : '#f26a6a'};
  }

  .tooltip-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 1rem;
  }

  .info-title {
    font-size: 12px;
    font-weight: 800;
  }

  .info-value {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: left;
    width: 100%;
    font-size: 14px;
  }
`
