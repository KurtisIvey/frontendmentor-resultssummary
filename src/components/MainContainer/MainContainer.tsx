import Summary from "../SummaryContainer/Summary";
import YourResult from "../YourResultContainer/YourResult";
import "./MainContainer.css";

const MainContainer = (props: Props) => {
  return (
    <main>
      <YourResult />
      <Summary />
    </main>
  );
};

export default MainContainer;
