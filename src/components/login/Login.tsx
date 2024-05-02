'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Image from 'next/image'
import { useLogin } from '@/hooks/useLogin'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { LoginRequest } from '@/api/interface/auth'
import { useUser } from '@/hooks/useUser'

export default function Login() {
  const { mutate: loginUser } = useLogin()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<LoginRequest>()

  const { fetchUserId } = useUser()

  // 비밀번호 노출 토글
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisibility((prevVisibility) => !prevVisibility)
  }

  const onSubmit = async (data: LoginRequest) => {
    const { email, password, keepLogin } = data
    loginUser({ email, password, keepLogin })
    await fetchUserId()
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-base text-neutral-navy-100">
      {/* 이메일(계정) Input*/}
      <label htmlFor="email">
        <input
          type="email"
          placeholder="E-mail"
          aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
          {...register('email', {
            required: '이메일은 필수 입력입니다.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '이메일 형식에 맞지 않습니다.',
            },
          })}
          className="w-full rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 px-4 py-3 text-neutral-white-50 focus:border-blue-500 focus:ring-blue-500"
        />
      </label>

      {/* 비밀번호 Input */}
      <div className="my-3">
        <label htmlFor="password" className="relative mb-2 block">
          <input
            type={passwordVisibility ? 'text' : 'password'}
            placeholder="Password"
            aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
            {...register('password', {
              required: '비밀번호는 필수입력입니다.',
              minLength: {
                value: 8,
                message: '8자 이상 비밀번호를 입력하세요.',
              },
            })}
            className="w-full rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 px-4 py-3 text-neutral-white-50 focus:border-blue-500 focus:ring-blue-500"
          />
          <Image
            onClick={togglePasswordVisibility}
            src={passwordVisibility ? '/icons/eye.svg' : '/icons/eyeOff.svg'}
            alt="password"
            className="absolute bottom-4 right-5 hover:cursor-pointer"
            width={20}
            height={20}
          />
        </label>
      </div>

      {/* 로그인유지 Checkbox */}
      <div className="my-8 ml-2 flex">
        <input
          id="remember"
          aria-describedby="remember"
          type="checkbox"
          className="rounded h-6 w-6 border border-neutral-navy-300 bg-bg-3 accent-neutral-navy-850 dark:accent-neutral-navy-850 dark:ring-offset-gray-800"
        />
        <label htmlFor="terms" className="ml-3 flex text-xs">
          로그인 상태 유지
        </label>
      </div>

      {/* 로그인 버튼 */}
      <button
        type="submit"
        disabled={!isValid}
        className={`w-full rounded-full px-5 py-3 text-center text-[2rem] ${
          isValid ? 'bg-primary-darkblue-hover' : 'bg-neutral-navy-950'
        }
          ${isValid ? 'border-none' : 'border border-neutral-navy-300'}
          ${isValid ? 'text-neutral-white-100' : 'text--neutral-navy-300'}`}
      >
        Log in
      </button>
    </form>
  )
}
