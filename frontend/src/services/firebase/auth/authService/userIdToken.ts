import { authService } from "../authService"
import { FirebaseError } from "firebase/app"

export function userIdToken(): Promise<string | null> {
  return new Promise((resolve, reject) => {
    authService.userAuthState(async (user) => {
      try {
        if (user) {
          const idToken = await user.getIdToken()
          resolve(idToken)
        } else {
          resolve(null)
        }
      } catch (error) {
        if (error instanceof FirebaseError) {
          reject(error.code)
        } else {
          reject(`Unexpected error: ${error}`)
        }
      }
    })
  })
}