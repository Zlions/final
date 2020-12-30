import axios from "axios";
import url from "./url";

const instance = axios.create({
    baseURL: url.baseUrl,
});

interface IUserLoginType {
    userId: string;
    pwd: string;
}

interface newUser {
    name: string;
    pwd: string;
    email: string;
    phone: string;
}

const api = {
    // User_reg
    userLogin: async (userObj: IUserLoginType) => {
        const result = await instance.post(url.userLogin, {
            userIdentity: userObj.userId,
            pwd: userObj.pwd,
        });
        return result;
    },
    saveUser: async (newUser: newUser) => {
        const result = await instance.post(url.saveUser, newUser);
        return result;
    },
    getUserById: async (id: string) => {
        const result = await instance.get(url.getUserById, {
            params: {id}
        })
        return result;
    },
    resetUserPwd: async (newRecord: object) => {
        const result = await instance.post(url.resetUserPwd, newRecord)
        return result;
    },

    // Resume
    getResumeByUid: async (uid: string) => {
        const result = await instance.post(url.getResumeByUid, {
            uid,
        });
        return result;
    },
    saveResume: async (newResume: object) => {
        const result = await instance.post(url.saveResume, {
            ...newResume,
        });
        return result;
    },

    // Company
    getCompanyByUid: async (uid: string) => {
        const result = await instance.post(url.getCompanyByUid, {
            uid,
        });
        return result;
    },
    getAllCompanyByCondition: async (condition: object) => {
        const result = await instance.post(url.getAllCompanyByCondition, {
            ...condition,
        });
        return result;
    },
    saveCompany: async (newCompany: object) => {
        console.log(newCompany);
        const result = await instance.post(url.saveCompany, {
            ...newCompany,
        });

        return result;
    },
    updateCompany: async (newRecord: object) => {
        const result = await instance.put(url.updateCompany, {
            newRecord,
        });
        return result;
    },
    deleteCompany: async (id: string) => {
        const result = await instance.delete(url.deleteCompany, {
            params: {
                id,
            },
        });
        return result;
    },
    getCompanyById: async (id: string) => {
        const result = await instance.get(url.getCompanyById, {
            params: { id },
        });
        return result;
    },

    // CompanyType
    getCompanyType: async () => {
        const result = await instance.get(url.getCompanyType);
        return result;
    },

    // Position
    savePosition: async (newPosition: object) => {
        const result = await instance.post(url.savePosition, {
            ...newPosition,
        });
        return result;
    },
    getAllPositonByCondition: async (condition: object) => {
        const result = await instance.post(url.getAllPositonByCondition, {
            ...condition,
        });
        return result;
    },
    getPositionByCid: async (cid: string) => {
        const result = await instance.post(url.getPositionByCid, {
            cid,
        });
        return result;
    },
    getPositionById: async (id: string) => {
        const result = await instance.get(url.getPositionById, {
            params: { id },
        });
        return result;
    },
    updatePosition: async (newRecord: object) => {
        const result = await instance.put(url.updatePosition, {
            newRecord,
        });
        return result;
    },
    deletePositionById: async (id: string) => {
        const result = await instance.delete(url.deletePositionById, {
            params: {
                id,
            },
        });
        return result;
    },

    // SendRecord
    saveSendRecord: async (newRecord: object) => {
        console.log(newRecord)
        const result = await instance.post(url.saveSendRecord, {
            ...newRecord,
        });
        return result;
    },
    getSendRecordByPositionId: async (pid: string) => {
        const result = await instance.post(url.getSendRecordByPositionId, {
            pid,
        });
        return result;
    },
};

export default api;
