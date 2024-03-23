import {atom} from "jotai"
import { login } from "./api"
import type { userProife } from "../dataType"


const loginAtomFC = atom(login)
const userProifeAtom= atom<userProife|undefined>(undefined)


export {loginAtomFC,userProifeAtom}