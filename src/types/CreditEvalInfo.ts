export type ECreditScoreGroup = "AAA" | "AA+" | "A" | "B" | "C" | "D" | "E-";

export interface Applicant {
  firstName: string;
  lastName: string;
  country: string;
  creditScore: number;
  creditScoreGroup: ECreditScoreGroup;
  purchase: Purchase;
  imgPath: string;
}

export interface Purchase {
  products: Array<Product>;
  totalSum: number;
}

export interface Product {
  name: string;
}
