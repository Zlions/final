import { IAction } from "@/types";

const initialState = {
    user: "",
    x: ''
};

export default function (state = initialState, { type, payload }: any) {
    switch (type) {
        case "LOGIN":
            console.log(123);
            return {
                ...state,
                ...payload,
            };
        case "QUIT":
            return {
                ...state,
                user: "",
            };
        case "ADD":
            return {
                ...state,
                ...payload,
            };
        default:
            return {
                ...state,
            };
    }
}
