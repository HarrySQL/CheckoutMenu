import React from 'react';
import styled from 'styled-components';

const CheckIn = styled.span`
  text-align: center;
  float: left;
`;

const CheckOut = styled.span`
  text-align: center;
  float: right;
`;

const BetweenCalendars = styled.span`
  margin: 5px;
`;

const CalendarView = (props) => (
  <div>
    <CheckIn>
      <table>
        <tbody>
          {props.calendar[0]}
        </tbody>
      </table>
    </CheckIn>
    <BetweenCalendars> </BetweenCalendars>
    <CheckOut>
      <table>
        <tbody>
          {props.calendar[1]}
        </tbody>
      </table>
    </CheckOut>
  </div>
);

export default CalendarView;