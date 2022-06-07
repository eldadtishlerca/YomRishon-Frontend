export const UserMsgModal = () => {
  const { userMsg } = useSelector((storeState) => storeState.boardModule)

  return(
      <div>
          <h1>I AM USER MSG MODAL</h1>
          <h2>message: {userMsg}</h2>
          </div>
  )
  }