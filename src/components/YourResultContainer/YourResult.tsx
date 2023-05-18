import "./YourResult.css";

type Props = {};

const YourResult = (props: Props) => {
  return (
    <section className="yourResultcontainer">
      <h2>Your Result</h2>
      <div className="outOf">
        <div>76</div>
        <p>of 100</p>
      </div>
      <div className="great">Great</div>
      <p className="description">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  );
};

export default YourResult;
