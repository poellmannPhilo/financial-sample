import { ECreditScoreGroup } from "@/types/CreditEvalInfo";

const creditScoreGradientColorsMap = new Map() as Map<
  ECreditScoreGroup,
  string
>;
creditScoreGradientColorsMap.set("AAA", "#2e7f18");
creditScoreGradientColorsMap.set("AA+", "#45731e");
creditScoreGradientColorsMap.set("A", "#675e24");
creditScoreGradientColorsMap.set("B", "#8d472b");
creditScoreGradientColorsMap.set("C", "#b13433");
creditScoreGradientColorsMap.set("D", "#c82538");
creditScoreGradientColorsMap.set("E-", "red");

export const CreditScoreCard = ({
  creditScore,
  creditScoreGroup,
}: {
  creditScore: number;
  creditScoreGroup: ECreditScoreGroup;
}) => {
  const creditScoreColor = creditScoreGradientColorsMap.get(creditScoreGroup);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: creditScoreColor,
        height: 60,
        width: 60,
        borderRadius: 20,
        border: "1px solid grey",
      }}
    >
      <p style={{ color: "black", fontWeight: "bold" }}>{creditScoreGroup}</p>
      <p style={{ color: "black" }}>{creditScore}</p>
    </div>
  );
};
