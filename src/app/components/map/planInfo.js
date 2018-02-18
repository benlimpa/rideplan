import React from "react";

export default class PlanInfo extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick()
  {
    this.props.close();
  }
  render()
  {
    return <button onClick={this.handleClick}>Test</button>;
    //return (<p>{this.props.riderMap.get(this.props.ridePlan.owner)}</p>);
  }
}