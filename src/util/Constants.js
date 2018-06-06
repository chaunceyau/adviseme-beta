// Styling for the main container
const containerStyle = {
  // only take x% of page
  width: "85%",
  // center align
  margin: "0 auto"
};

const urls = {
  plan: {
    default: "/plan/",
    planner: "/plan/planner/",
    requirements: "/plan/requirements/",
    options: "/plan/requirements/:requirementName"
  }
};

export { containerStyle, urls };
