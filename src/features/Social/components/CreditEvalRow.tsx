import { Avatar } from "@/components/Avatar";
import { Applicant } from "@/types/CreditEvalInfo";
import { CreditScoreCard } from "./CreditScoreCard";

export const CreditEvalRow = ({ applicant }: { applicant: Applicant }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "80%",
        }}
      >
        <Avatar src={applicant.imgPath}></Avatar>
        <div>
          <p>{applicant.firstName + " " + applicant.lastName}</p>
          <p>
            {applicant.purchase.products.at(0)?.name +
              " and " +
              applicant.purchase.products.length +
              " other products"}
          </p>
        </div>
      </div>
      <CreditScoreCard
        creditScore={applicant.creditScore}
        creditScoreGroup={applicant.creditScoreGroup}
      ></CreditScoreCard>
    </div>
  );
};
