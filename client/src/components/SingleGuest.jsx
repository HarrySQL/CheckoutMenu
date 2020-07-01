import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  align-items: center;
  background: none;
  border: .5px solid #b0b0b0;
  font-size: 18px;
  padding: 2px;
  margin: 5px 8px;
  cursor: pointer;
  color: #717171;
  :focus {
    outline:0;
  }
`;

const EachGuest = styled.div`
  padding: 5px 0;
  font-size: 15px;
  margin: 5px;
`;

const Msg = styled.div`
  font-size: 12px;
  cursor: text;
  font-weight: 300;
  text-align: left;
`;

const Category = styled.div`
  display: inline-block;
  height: 20px;
  text-align: center;
  padding: 5px 0;
  font-size: 12px;
  font-weight: 500;
`;

const Buttons = styled.div`
  display: inline-block;
  float: right;
  text-align: center;
`;

const Count = styled.span`
  margin: 5px;
  cursor: text;
`;

const TransparentButton = styled.button`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  align-items: center;
  background: none;
  border: .5px solid #b0b0b0;
  font-size: 18px;
  padding: 2px;
  margin: 5px;
  color: #717171;
  opacity: 0.3;
  cursor: no-drop;
  :focus {
    outline:0;
  }
`;

const Item = styled.div`
  cursor: text;
  display: inline-block;
  font-size: 15px;
`;

class SingleGuest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: props.adults,
      children: props.children,
      infants: props.infants,
    };
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleMinusClick = this.handleMinusClick.bind(this);
  }

  handlePlusClick(e) {
    if (this.props.item === 'Adults') {
      this.setState((prevState, props) => ({
        adults: prevState.adults + 1,
      }));
      this.props.guestPlusClick();
      this.props.getAdultCount(this.state.adults + 1);
    } else if (this.props.item === 'Children') {
      this.setState((prevState, props) => ({
        children: prevState.children + 1,
      }));
      this.props.guestPlusClick();
      this.props.getChildrenCount(this.state.children + 1);
    } else if (this.props.item === 'Infants') {
      this.setState((prevState, props) => ({
        infants: prevState.infants + 1,
      }));
      this.props.infantPlusClick();
    }
  }

  handleMinusClick(e) {
    if (this.props.item === 'Adults') {
      this.setState((prevState, props) => ({
        adults: prevState.adults - 1,
      }));
      this.props.guestMinusClick();
      this.props.getAdultCount(this.state.adults - 1);
    } else if (this.props.item === 'Children') {
      this.setState((prevState, props) => ({
        children: prevState.children - 1,
      }));
      this.props.guestMinusClick();
      this.props.getChildrenCount(this.state.children - 1);
    } else if (this.props.item === 'Infants') {
      this.setState((prevState, props) => ({
        infants: prevState.infants - 1,
      }));
      this.props.infantMinusClick();
    }
  }

  render() {
    let currentGuestCount;
    let msg = '';
    if (this.props.item === 'Adults') {
      currentGuestCount = this.state.adults;
    } else if (this.props.item === 'Children') {
      currentGuestCount = this.state.children;
      msg = 'Ages 2-12';
    } else {
      currentGuestCount = this.state.infants;
      msg = 'Under 2';
    }
    let currentMinusButton;
    if (currentGuestCount === 0 || (this.props.item === 'Adults' && currentGuestCount === 1)) {
      currentMinusButton = <TransparentButton>-</TransparentButton>;
    } else {
      currentMinusButton = <Button onClick={this.handleMinusClick}>-</Button>;
    }
    let currentPlusButton;
    if (this.props.item === 'Infants') {
      if (this.state.infants === 5) {
        currentPlusButton = <TransparentButton>+</TransparentButton>;
      } else {
        currentPlusButton = <Button onClick={this.handlePlusClick}>+</Button>;
      }
    } else if (this.props.guests === this.props.guestsAllowed) {
      currentPlusButton = <TransparentButton>+</TransparentButton>;
    } else {
      currentPlusButton = <Button onClick={this.handlePlusClick}>+</Button>;
    }

    return (
      <EachGuest>
        <Category>
          <Item>
            {this.props.item}
          </Item>
          <Msg>
            {msg}
          </Msg>
        </Category>
        <Buttons>
          <span>
            {currentMinusButton}
          </span>
          <Count>
            {currentGuestCount}
          </Count>
          <span>
            {currentPlusButton}
          </span>
        </Buttons>
      </EachGuest>
    );
  }
};

export default SingleGuest;
