import { useState } from "react";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-header">
          <h1>
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>

          <p>
            {isLogin
              ? "Login to continue shopping"
              : "Create an account to start shopping"}
          </p>
        </div>

        <div className="auth-switch">

          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>

          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>

        </div>

        <form>

          {!isLogin && (
            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm your password"
              />
            </div>
          )}

          <button className="auth-submit">
            {isLogin ? "Login" : "Create Account"}
          </button>

        </form>

        <div className="auth-footer">

          <p>
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>

          <button
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Create an account" : "Login instead"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Auth;