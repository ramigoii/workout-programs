"use client"
import React from "react";
import { useState, useEffect } from "react"
import { updatePassword, EmailAuthProvider, reauthenticateWithCredential, updateEmail } from "firebase/auth"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { auth, db } from "../firebase"
import { Eye, EyeOff, Save, User, MapPin, Phone, Calendar, Mail } from "lucide-react"
//import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  // User data state
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    location: "",
    phone: "",
    gender: "",
    age: "",
  })

  // Password change state
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  // UI state
  const [loading, setLoading] = useState(false)
  const [loadingPassword, setLoadingPassword] = useState(false)
  const [error, setError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [success, setSuccess] = useState("")
  const [passwordSuccess, setPasswordSuccess] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser

        if (!user) {
          // Redirect to login if not authenticated
          console.log("User not authenticated")
          // window.location.href = "/login"
          return
        }

        const userDoc = await getDoc(doc(db, "users", user.uid))

        if (userDoc.exists()) {
          const data = userDoc.data()
          setUserData({
            username: data.username || "",
            email: user.email || "",
            location: data.location || "",
            phone: data.phone || "",
            gender: data.gender || "",
            age: data.age ? data.age.toString() : "",
          })
        }

        setInitialLoad(false)
      } catch (error) {
        console.error("Error fetching user data:", error)
        setError("Ошибка при загрузке данных пользователя")
        setInitialLoad(false)
      }
    }

    fetchUserData()
  }, [])

  // Handle input changes for profile data
  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle input changes for password data
  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle profile update
  const handleUpdateProfile = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setLoading(true)

    try {
      const user = auth.currentUser

      if (!user) {
        setError("Пользователь не авторизован")
        return
      }

      // Update email if changed
      if (user.email !== userData.email) {
        try {
          await updateEmail(user, userData.email)
        } catch (emailError) {
          // If email update requires recent authentication
          if (emailError.code === "auth/requires-recent-login") {
            setError("Для изменения email требуется повторная авторизация. Пожалуйста, выйдите и войдите снова.")
            setLoading(false)
            return
          } else {
            throw emailError
          }
        }
      }

      // Update user data in Firestore
      await updateDoc(doc(db, "users", user.uid), {
        username: userData.username,
        location: userData.location,
        phone: userData.phone,
        gender: userData.gender,
        age: Number(userData.age),
        updatedAt: new Date(),
      })

      setSuccess("Профиль успешно обновлен")
      setIsEditing(false)
    } catch (error) {
      console.error("Error updating profile:", error)
      if (error.code === "auth/email-already-in-use") {
        setError("Этот email уже используется другим пользователем")
      } else {
        setError("Ошибка при обновлении профиля: " + error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  // Handle password change
  const handleChangePassword = async (e) => {
    e.preventDefault()
    setPasswordError("")
    setPasswordSuccess("")
    setLoadingPassword(true)

    // Validate passwords
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError("Новые пароли не совпадают")
      setLoadingPassword(false)
      return
    }

    if (passwordData.newPassword.length < 6) {
      setPasswordError("Пароль должен содержать минимум 6 символов")
      setLoadingPassword(false)
      return
    }

    try {
      const user = auth.currentUser

      if (!user) {
        setPasswordError("Пользователь не авторизован")
        return
      }

      // Re-authenticate user before changing password
      const credential = EmailAuthProvider.credential(user.email, passwordData.currentPassword)

      await reauthenticateWithCredential(user, credential)

      // Update password
      await updatePassword(user, passwordData.newPassword)

      setPasswordSuccess("Пароль успешно изменен")
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
    } catch (error) {
      console.error("Error changing password:", error)
      if (error.code === "auth/wrong-password") {
        setPasswordError("Неверный текущий пароль")
      } else {
        setPasswordError("Ошибка при изменении пароля: " + error.message)
      }
    } finally {
      setLoadingPassword(false)
    }
  }

  // Show loading state during initial data fetch
  if (initialLoad) {
    return (
      <div className="container">
        <div className="card" style={{ maxWidth: "700px", margin: "3rem auto", padding: "2rem", textAlign: "center" }}>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-text-secondary">Загрузка данных профиля...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: "700px", margin: "3rem auto", padding: "2rem" }}>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Профиль пользователя</h2>
          <p className="text-muted-foreground">Просмотр и редактирование личной информации</p>
        </div>

        {/* Profile Information Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Личная информация</h3>
            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 text-sm rounded-md bg-primary-light text-primary hover:bg-primary hover:text-white transition-colors"
            >
              {isEditing ? "Отменить" : "Редактировать"}
            </button>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
              <p>{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
              <p>{success}</p>
            </div>
          )}

          <form onSubmit={handleUpdateProfile} className="space-y-4">
            {/* Username field */}
            <div className="form-group">
              <label htmlFor="username" className="block text-sm font-medium mb-1 flex items-center gap-2">
                <User size={16} />
                Имя пользователя
              </label>
              {isEditing ? (
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                  placeholder="Введите имя пользователя"
                  required
                  className="w-full p-3 rounded-md border border-input-border bg-input-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
                />
              ) : (
                <div className="p-3 bg-background-secondary rounded-md">{userData.username}</div>
              )}
            </div>

            {/* Email field */}
            <div className="form-group">
              <label htmlFor="email" className="block text-sm font-medium mb-1 flex items-center gap-2">
                <Mail size={16} />
                Email
              </label>
              {isEditing ? (
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  placeholder="Введите ваш email"
                  required
                  className="w-full p-3 rounded-md border border-input-border bg-input-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
                />
              ) : (
                <div className="p-3 bg-background-secondary rounded-md">{userData.email}</div>
              )}
            </div>

            {/* Location field */}
            <div className="form-group">
              <label htmlFor="location" className="block text-sm font-medium mb-1 flex items-center gap-2">
                <MapPin size={16} />
                Местоположение
              </label>
              {isEditing ? (
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={userData.location}
                  onChange={handleChange}
                  placeholder="Введите ваш город"
                  required
                  className="w-full p-3 rounded-md border border-input-border bg-input-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
                />
              ) : (
                <div className="p-3 bg-background-secondary rounded-md">{userData.location}</div>
              )}
            </div>

            {/* Phone field */}
            <div className="form-group">
              <label htmlFor="phone" className="block text-sm font-medium mb-1 flex items-center gap-2">
                <Phone size={16} />
                Номер телефона
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  placeholder="+7 (XXX) XXX-XX-XX"
                  required
                  className="w-full p-3 rounded-md border border-input-border bg-input-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
                />
              ) : (
                <div className="p-3 bg-background-secondary rounded-md">{userData.phone}</div>
              )}
            </div>

            {/* Gender field */}
            <div className="form-group">
              <label htmlFor="gender" className="block text-sm font-medium mb-1">
                Пол
              </label>
              {isEditing ? (
                <select
                  id="gender"
                  name="gender"
                  value={userData.gender}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border border-input-border bg-input-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
                >
                  <option value="">Выберите пол</option>
                  <option value="male">Мужской</option>
                  <option value="female">Женский</option>
                  <option value="other">Другой</option>
                </select>
              ) : (
                <div className="p-3 bg-background-secondary rounded-md">
                  {userData.gender === "male"
                    ? "Мужской"
                    : userData.gender === "female"
                      ? "Женский"
                      : userData.gender === "other"
                        ? "Другой"
                        : "Не указан"}
                </div>
              )}
            </div>

            {/* Age field */}
            <div className="form-group">
              <label htmlFor="age" className="block text-sm font-medium mb-1 flex items-center gap-2">
                <Calendar size={16} />
                Возраст
              </label>
              {isEditing ? (
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={userData.age}
                  onChange={handleChange}
                  placeholder="Введите ваш возраст"
                  min="18"
                  max="100"
                  required
                  className="w-full p-3 rounded-md border border-input-border bg-input-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
                />
              ) : (
                <div className="p-3 bg-background-secondary rounded-md">{userData.age} лет</div>
              )}
            </div>

            {isEditing && (
              <button
                type="submit"
                className="cta-button w-full flex justify-center items-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                ) : (
                  <>
                    <Save size={18} />
                    <span>Сохранить изменения</span>
                  </>
                )}
              </button>
            )}
          </form>
        </div>

        {/* Change Password Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Изменить пароль</h3>

          {passwordError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
              <p>{passwordError}</p>
            </div>
          )}

          {passwordSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
              <p>{passwordSuccess}</p>
            </div>
          )}

          <form onSubmit={handleChangePassword} className="space-y-4">
            {/* Current Password field */}
            <div className="form-group">
              <label htmlFor="currentPassword" className="block text-sm font-medium mb-1">
                Текущий пароль
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="currentPassword"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  placeholder="Введите текущий пароль"
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

            {/* New Password field */}
            <div className="form-group">
              <label htmlFor="newPassword" className="block text-sm font-medium mb-1">
                Новый пароль
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  placeholder="Введите новый пароль"
                  required
                  className="w-full p-3 rounded-md border border-input-border bg-input-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all pr-10"
                />
              </div>
              <p className="text-xs text-text-muted mt-1">Минимум 6 символов</p>
            </div>

            {/* Confirm New Password field */}
            <div className="form-group">
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                Подтверждение нового пароля
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  placeholder="Подтвердите новый пароль"
                  required
                  className="w-full p-3 rounded-md border border-input-border bg-input-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all pr-10"
                />
              </div>
            </div>

            <button
              type="submit"
              className="cta-button secondary w-full flex justify-center items-center gap-2"
              disabled={loadingPassword}
            >
              {loadingPassword ? (
                <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></span>
              ) : (
                <span>Изменить пароль</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
