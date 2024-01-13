import "./Test.css";
const Test = () => {
  return (
    <>
      <div>
        <header>
          <h1>Admin Page</h1>
        </header>
        <div className="container">
          <div className="content">
            <h2>Dashboard</h2>
            <p>Welcome to the admin dashboard.</p>
            <h3>Add User</h3>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
              <button type="submit">Add User</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
