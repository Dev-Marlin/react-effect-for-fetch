import UsersList from "./components/UsersList"

function UsersSection({users}) {
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={users}></UsersList>
      </div>
    </section>
  )
}

export default UsersSection
