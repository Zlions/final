import * as bcrypt from "bcrypt";

export async function encryption(obj: any) {
	if (obj.pwd) {
		const hash = await bcrypt.hash(obj.pwd, 10);
		obj.pwdHash = hash;
		delete obj.pwd;
	}
}
