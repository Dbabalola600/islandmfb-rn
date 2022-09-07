export type RootStackParamList = {
    GettingStarted: undefined,
    SignIn: undefined,
    LetsGetStarted: undefined,
    SetProfile: undefined,
    Verification: undefined;
    CreateYourAccount: undefined;
    PersonalInfo: undefined;
    AccountTypeSetup: undefined;
    Transfer: undefined;
    DashBoard: undefined;
    Profile: undefined;
    EditPersonalInfo:undefined;
    EditContactDetails: undefined;
    MeansOfId: undefined;
    ProofOfAddress: undefined;
    EditEmployment: undefined;
    EditNextofKin: undefined;
    LoanDash:undefined;
    LoanTransaction: undefined;
    LoanRepayment:undefined;
    LoanRepaymentDet:undefined;
    LoanProducts:undefined;
    LoanApplication: undefined;


    SelfService:undefined;
    Success: { successMessage: string, nextPage: keyof RootStackParamList, canGoBack: boolean, successButtonText: string, nextPageParams?: any } | undefined;

    BillPayment: undefined;
   


    ForgotPassword: undefined;
    EnterCode: undefined;
    ResetPassword: undefined;
    Airtime: undefined;

    
    



}