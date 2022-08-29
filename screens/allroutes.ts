export type RootStackParamList = {
    GettingStarted: undefined,
    SignIn:undefined,
    LetsGetStarted: undefined,
    SetProfile:undefined,
    Verification: undefined;

    CreateYourAccount: undefined;
    PersonalInfo: undefined;
    AccountTypeSetup: undefined;

    TestPage1: undefined;
    TestPage2: undefined
    Success: {successMessage:string, nextPage:keyof RootStackParamList, canGoBack:boolean, successButtonText:string, nextPageParams?: any} | undefined;

    
    
    


}