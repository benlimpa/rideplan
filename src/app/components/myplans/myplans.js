import React from "react";
import PlanCard from "../map/planCard";

const ridePlans = [
  {
    owner: 0,
    start: {
      name: "Someplace",
      lat: 0, lng: 0},
    end: {
      name: "Someplace else",
      lat: 0, lng: 0},
  },
];

export default class MyPlans extends React.Component
{
  render()
  {
    return (
      <PlanCard />
    );
  }
}
