import { Button } from '@mui/material'

const SignIn = () => {
  const signInWithGoogle = () => {
    // fireBaseのDBにデータ追加
  }

  return (
    <div>
      <Button onClick={signInWithGoogle}>Login With Google</Button>
    </div>
  )
}

export default SignIn

// 1. FIrebaseの初期化
// 2. Firestoreの初期化・値を渡す