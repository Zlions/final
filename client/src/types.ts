export interface IResume {
    name: string;
    sex: boolean;
    phone: string;
    email: string;
    major: string;
    school: string;
    birth: string;
    wechat: string;
    jobState: string;
    wantedJob: string;
    eduYear: string;
    godness: string;
}

export interface ICompanyType {
    name: string;
    id: string;
}

export interface ICompany {
    describe: string;
    id: string;
    addr: string;
    name: string;
    finance: string;
    scope: string;
    createdAt: string;
    type: ICompanyType;
}
export interface IPosition {
    id: string;
    name: string;
    addr: string;
    city: string;
    finance: string;
    experience: string;
    education: string;
    describe: string;
    belongTo: ICompany
}

export interface IAction {
    type: string;
    payload: any;
} 