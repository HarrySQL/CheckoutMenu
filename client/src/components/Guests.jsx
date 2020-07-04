import React from 'react';
import styled from 'styled-components';
import SingleGuest from './SingleGuest.jsx';

const Dropdown = styled.div`
  display: inline-block;
  position: absolute;
  width: 285px;
  height: 250px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 16px;
  border: .5px solid #dddddd;
  background: white;
  border-radius: 4px;
  padding: 10px;
  cursor: default;
  z-index: 80;
`;

const CloseButton = styled.button`
  border-radius: 6px;
  border: none;
  background: none;
  padding: 6px;
  float: right;
  text-decoration: underline;
  cursor: pointer;
  :hover {
    background-color: #f7f7f7;
  }
  font-size: 15px;
`;

const Msg = styled.div`
  margin: 10px 5px;
  color: #717171;
  font-size: 12px;
  cursor: text;
  padding: 2px;
`;

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['Adults', 'Children', 'Infants'],
    };
  }

  render() {
    return (
      <Dropdown>
        {this.state.list.map((item, i) => (
          <SingleGuest
            item={item}
            key={i}
            guests={this.props.guests}
            guestPlusClick={this.props.guestPlusClick}
            guestMinusClick={this.props.guestMinusClick}
            infantPlusClick={this.props.infantPlusClick}
            infantMinusClick={this.props.infantMinusClick}
            guestsAllowed={this.props.guestsAllowed}
            getAdultCount={this.props.getAdultCount}
            getChildrenCount={this.props.getChildrenCount}
            adults={this.props.adults}
            children={this.props.children}
            infants={this.props.infants}
          />
        ))}
        <Msg>
          {this.props.guestsAllowed} guests maximum. Infants don't count toward the number of guests.
        </Msg>
        <div>
          <CloseButton onClick={this.props.handleClick}>Close</CloseButton>
        </div>
      </Dropdown>
    );
  }
}

export default Guests;
