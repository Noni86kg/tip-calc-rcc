export interface LeftCardPropsTypes {
  date: {
    calcTipResult: {
      tip: number;
      total: number;
      finish: boolean;
      billHiddenMessage: boolean;
      peopleHiddenMessage: boolean;
    };
    bill: number | null;
    numOfPeople: number | null;
    percentage: number | null;
    inputPercentage: number | null;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  tipCalc: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface RightCardPropsTypes {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
