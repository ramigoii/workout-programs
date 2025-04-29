"use client"
import React from "react";
import { useState } from "react"
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "../firebase"
import { Eye, EyeOff, UserPlus } from "lucide-react"

function RegisterPage() {
  // Form fields state
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [location, setLocation] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")

  // UI state
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault()
    setError("")

    // Basic validation
    if (password !== confirmPassword) {
      setError("Пароли не совпадают")
      return
    }

    if (password.length < 6) {
      setError("Пароль должен содержать минимум 6 символов")
      return
    }

    if (!email || !username || !location || !phone || !gender || !age) {
      setError("Пожалуйста, заполните все поля")
      return
    }

    setLoading(true)

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      await updateProfile(user, {
        displayName: username
      });
      // Store additional user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
        location: location,
        phone: phone,
        gender: gender,
        age: Number.parseInt(age),
        createdAt: new Date(),
      })


      alert("Регистрация прошла успешно!")
      // In RegisterPage.js, after creating the user:

      // Redirect to login or home page
      // window.location.href = "/login";
    } catch (error) {
      console.error("Error during registration:", error)
      if (error.code === "auth/email-already-in-use") {
        setError("Этот email уже используется")
      } else if (error.code === "auth/invalid-email") {
        setError("Некорректный email")
      } else {
        setError(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: "500px", margin: "3rem auto", padding: "2rem" }}>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Регистрация</h2>
          <p className="text-muted-foreground">Создайте новый аккаунт</p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Email field */}
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите ваш email"
              required
              className="w-full p-3 rounded-md border border-input-border bg-input-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
            />
          </div>

          {/* Username field */}
          <div className="form-group">
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Имя пользователя *
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введите имя пользователя"
              required
              className="w-full p-3 rounded-md border border-input-border bg-input-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
            />
          </div>

          {/* Password field */}
          <div className="form-group">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Пароль *
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Создайте пароль"
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
            <p className="text-xs text-text-muted mt-1">Минимум 6 символов</p>
          </div>

          {/* Confirm Password field */}
          <div className="form-group">
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
              Подтверждение пароля *
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Подтвердите пароль"
                required
                className="w-full p-3 rounded-md border border-input-border bg-input-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all pr-10"
              />
            </div>
          </div>

          {/* Location field */}
          <div className="form-group">
            <label htmlFor="location" className="block text-sm font-medium mb-1">
              Местоположение *
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Введите ваш город"
              required
              className="w-full p-3 rounded-md border border-input-border bg-input-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
            />
          </div>

          {/* Phone field */}
          <div className="form-group">
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Номер телефона *
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (XXX) XXX-XX-XX"
              required
              className="w-full p-3 rounded-md border border-input-border bg-input-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
            />
          </div>

          {/* Gender field */}
          <div className="form-group">
            <label htmlFor="gender" className="block text-sm font-medium mb-1">
              Пол *
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              className="w-full p-3 rounded-md border border-input-border bg-input-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
            >
              <option value="">Выберите пол</option>
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
              <option value="other">Другой</option>
            </select>
          </div>

          {/* Age field */}
          <div className="form-group">
            <label htmlFor="age" className="block text-sm font-medium mb-1">
              Возраст *
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Введите ваш возраст"
              min="18"
              max="100"
              required
              className="w-full p-3 rounded-md border border-input-border bg-input-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
            />
          </div>

          {/* Terms and conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              required
              className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label htmlFor="terms" className="text-sm text-text-secondary">
              Я согласен с{" "}
              <a href="#" className="text-primary hover:text-primary-hover transition-colors">
                условиями использования
              </a>
            </label>
          </div>

          {/* Submit button */}
          <button type="submit" className="cta-button w-full flex justify-center items-center gap-2" disabled={loading}>
            {loading ? (
              <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
            ) : (
              <>
                <UserPlus size={18} />
                <span>Зарегистрироваться</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-text-secondary">
            Уже есть аккаунт?{" "}
            <a href="/login" className="text-primary hover:text-primary-hover transition-colors">
              Войти
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
