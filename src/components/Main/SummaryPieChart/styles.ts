import styled from 'styled-components'

export const SummaryPieChartContainer = styled.div`
  background-color: #222222;
  margin: 0;
  padding: 0.7rem;
  border-radius: 0.5rem;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 50vh;

  h5 {
    text-align: center;
    border-radius: 0.5rem;
    padding: 1rem;
    background-color: #414141;
  }

  .flex-row {
    display: flex;
    background-color: #414141;
    border-radius: 0.5rem;
    height: 100%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  .piechart-labels {
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 55%;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  .piechart-labels span {
  }

  .label {
    display: flex;
    align-items: center;
    padding: 0.6rem;
    border-radius: 0.5rem;
    background-color: #565656;
    margin: 0.2rem 0;
    width: 100%;
    @media (max-width: 1024px) {
      padding: 0.3rem;
    }
  }

  @media (max-width: 550px) {
    display: none;
  }
`

export const StyledTooltip = styled.div`
  background-color: rgba(34, 34, 34, 0.8);
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;

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
    font-size: 14px;
  }
`

export const LabelColor = styled.div<{ color?: string }>`
  background-color: ${(props) => props.color};
  width: 1.2rem;
  height: 1rem;
  border: 1px solid white;
  margin-right: 0.5rem;
`
