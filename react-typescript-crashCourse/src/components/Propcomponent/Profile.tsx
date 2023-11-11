
export type ProfileProp={
    name:string
}
const Profile = ({name}:ProfileProp) => {
  return (
    <h2>Welcome {name}</h2>
  )
}

export default Profile