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
        marginTop: "1rem",
        padding: "0.5rem",
        backgroundColor: "#535683",
        borderRadius: "1rem",
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
        <Avatar src={applicant.imgPath} hasBorder={false}></Avatar>
        <div
          style={{
            marginLeft: "1rem",
          }}
        >
          <p style={{ fontWeight: "bold" }}>
            {applicant.firstName + " " + applicant.lastName}
          </p>
          <p style={{ fontSize: "0.75rem" }}>
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
