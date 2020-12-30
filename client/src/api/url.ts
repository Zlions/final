const url = {
    baseUrl: "http://localhost",
    // User_Reg
    userLogin: "/api/user_reg/login",
    saveUser: "/api/user_reg",
    getUserById: '/api/user_reg/:id',
    resetUserPwd: '/api/user_reg/resetPwd',

    // Resume
    getResumeByUid: "/api/resume/byUid",
    saveResume: "/api/resume",

    // Company
    getCompanyByUid: "/api/company/getCompanyByUid",
    saveCompany: "api/company",
    getAllCompanyByCondition: '/api/company/condition',
    getCompanyById: "/api/company/:id",
    updateCompany: '/api/company',
    deleteCompany: '/api/company',

    // CompanyType
    getCompanyType: "/api/companyType",

    // Position
    savePosition: "/api/position",
    getPositionByCid: "/api/position/byCid",
    getPositionById: "/api/position/:id",
    getAllPositonByCondition: '/api/position/condition',
    updatePosition: "/api/position",
    deletePositionById: "/api/position",

    // SendRecord
    saveSendRecord: '/api/send_record',
    getSendRecordByPositionId: '/api/send_record/byPid',
};

export default url;
