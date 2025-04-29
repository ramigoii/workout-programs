import React from 'react';
"use client"

import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { collection, query, where, getDocs } from "firebase/firestore"
import { auth, db } from "../firebase"
import { Eye, EyeOff, LogIn } from "lucide-react"

function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")

    if (!username || !password) {
      setError("Пожалуйста, заполните все поля")
      return
    }

    setLoading(true)

    try {
      // Check if the input is an email
      const isEmail = username.includes("@")

      let email = username

      // In LoginPage.js, modify the username lookup query:
if (!isEmail) {
    const usersRef = collection(db, "users");
    const q = query(
      usersRef, 
      where("username", "==", username),
    );
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      setError("Пользователь не найден");
      setLoading(false);
      return;
    }
    
    // Get the email associated with this username
    email = querySnapshot.docs[0].data().email;
  }

      // Sign in with email and password
      await signInWithEmailAndPassword(auth, email, password)
      alert("Вы успешно вошли!")

      // Redirect to home page or dashboard
      // window.location.href = "/dashboard"
    } catch (error) {
      console.error("Error during login:", error)

      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        setError("Неверное имя пользователя или пароль")
      } else if (error.code === "auth/too-many-requests") {
        setError("Слишком много попыток входа. Попробуйте позже")
      } else {
        setError("Ошибка при входе. Пожалуйста, попробуйте снова")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: "450px", margin: "5rem auto", padding: "2rem" }}>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Вход</h2>
          <p className="text-muted-foreground">Войдите в свой аккаунт</p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Username/Email field */}
          <div className="form-group">
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Имя пользователя или Email
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введите имя пользователя или email"
              required
              className="w-full p-3 rounded-md border border-input-border bg-input-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
            />
          </div>

          {/* Password field */}
          <div className="form-group">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Пароль
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите ваш пароль"
                required
                className="w-full p-3 rounded-md border border-input-border bg-input-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-primary transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember me and Forgot password */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="remember" className="text-sm text-text-secondary">
                Запомнить меня
              </label>
            </div>
            <a href="/forgot-password" className="text-sm text-primary hover:text-primary-hover transition-colors">
              Забыли пароль?
            </a>
          </div>

          {/* Submit button */}
          <button type="submit" className="cta-button w-full flex justify-center items-center gap-2" disabled={loading}>
            {loading ? (
              <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
            ) : (
              <>
                <LogIn size={18} />
                <span>Войти</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-text-secondary">
            Нет аккаунта?{" "}
            <a href="/register" className="text-primary hover:text-primary-hover transition-colors">
              Зарегистрироваться
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
