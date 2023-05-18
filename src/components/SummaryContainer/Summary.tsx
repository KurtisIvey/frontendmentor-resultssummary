type Props = {};
import "./Summary.css";

import iconReaction from "../../assets/images/icon-reaction.svg";
import iconMemory from "../../assets/images/icon-memory.svg";
import iconVerbal from "../../assets/images/icon-verbal.svg";
import iconVisual from "../../assets/images/icon-visual.svg";

const Summary = (props: Props) => {
  return (
    <section className="summary">
      <h2>Summary</h2>
      <div className="smallContainer reaction">
        <div className="left">
          <img src={iconReaction} alt="" />
          <p>Reaction</p>
        </div>
        <div className="right">
          <p>
            <span>80</span> / 100
          </p>
        </div>
      </div>
      <div className="smallContainer memory">
        <div className="left">
          <img src={iconMemory} alt="" />
          <p>Memory</p>
        </div>
        <div className="right">
          <p>
            <span>92</span> / 100
          </p>
        </div>
      </div>
      <div className="smallContainer verbal">
        <div className="left">
          <img src={iconVerbal} alt="" />
          <p>Verbal</p>
        </div>
        <div className="right">
          <p>
            <span>61</span> / 100
          </p>
        </div>
      </div>
      <div className="smallContainer visual">
        <div className="left">
          <img src={iconVisual} alt="" />
          <p>Visual</p>
        </div>
        <div className="right">
          <p>
            <span>72</span> / 100
          </p>
        </div>
      </div>
      <button>Continue</button>
    </section>
  );
};

export default Summary;
