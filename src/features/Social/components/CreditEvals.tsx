import { BiDotsHorizontalRounded } from "react-icons/bi";
import { applicants } from "./applicants";
import { CreditEvalRow } from "./CreditEvalRow";

export const CreditEvals = () => {
  return (
    <div>
      <div
        className="horizontal-array space-between"
      >
        <div className="horizontal-array">
          <h3>New Credit Score Evaluations</h3>
          <em
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "1rem",
              backgroundColor: "red",
              borderRadius: "1rem",
              width: 20,
              height: 20,
            }}
          >
            <p>{applicants.length}</p>
          </em>
        </div>
        <BiDotsHorizontalRounded size={20}></BiDotsHorizontalRounded>
      </div>
      <div>
        {applicants.map((a) => {
          return (
            <CreditEvalRow key={a.firstName} applicant={a}></CreditEvalRow>
          );
        })}
      </div>
    </div>
  );
};
