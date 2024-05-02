'use client'

import { LoginRequest, PasswordChangeRequest } from '@/api/interface/auth'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Change() {
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<PasswordChangeRequest>()

  // 비밀번호, 비밀번호확인 노출 토글
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisibility((prevVisibility) => !prevVisibility)
  }
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility((prevVisibility) => !prevVisibility)
  }

  //인증코드 타이머
  const TIMER_TIME = 600
  const [code, setCode] = useState('')
  const [min, setMin] = useState(10)
  const [sec, setSec] = useState(0)
  const [timerVisible, setTimerVisible] = useState(false)

  const time = useRef(TIMER_TIME)
  const timerId = useRef<NodeJS.Timeout>()

  const startTimer = () => {
    time.current = TIMER_TIME
    timerId.current = setInterval(() => {
      // @ts-ignore
      setMin(parseInt(time.current / 60))
      setSec(time.current % 60)
      time.current -= 1
    }, 1000)
  }

  const resetTimer = () => {
    clearInterval(timerId.current)
    setMin(10)
    setSec(0)
  }

  useEffect(() => {
    if (time.current <= 0) {
      clearInterval(timerId.current)
      setSec(0)
    }
  }, [sec])

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerId.current)
  }, [])

  // 인증코드 전송
  const handleCodeSend = () => {
    resetTimer()
    setTimerVisible(true)
    startTimer()
  }
  // 인증코드 확인
  const handleCodeChange = () => {}

  const onSubmit = (data: PasswordChangeRequest) => {
    const { email, code, password } = data
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" text-neutral-navy-100">
      {/* 이메일 인증코드 보내기 및 확인*/}
      <div className="mt-2 flex">
        <input
          type="email"
          placeholder="E-mail"
          aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
          {...register('email', {
            required: '이메일은 필수 입력입니다.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '이메일 형식에 맞지 않습니다.',
            },
          })}
          className=" mr-1 w-full rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 text-neutral-white-50 focus:border-blue-500 focus:ring-blue-500 "
        />
        <button
          onClick={handleCodeSend}
          className="mx-1 flex w-[54%] items-center justify-center rounded-sm border border-primary-darkblue-hover bg-primary-darkblue-hover px-4 py-2 text-neutral-white-50"
        >
          인증코드 보내기
        </button>
      </div>

      {/* 인증코드 확인*/}
      <div className="mt-2 flex">
        <div className="mr-1 flex w-full rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 text-neutral-white-50 focus:border-blue-500 focus:ring-blue-500 ">
          <input
            type="text"
            placeholder="인증코드 입력"
            aria-invalid={!isDirty ? undefined : errors.code ? 'true' : 'false'}
            {...register('code', {
              required: '인증코드는 필수 입력입니다.',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '인증코드 형식에 맞지 않습니다.',
              },
            })}
            className="w-[85%] rounded-sm bg-neutral-navy-950 p-2.5"
          />
          {timerVisible ? (
            <p className="mr-2.5 mt-2.5">
              {min}:{sec < 10 ? `0${sec}` : sec}
            </p>
          ) : null}
        </div>
        <button className="mx-1 flex w-[54%] items-center justify-center rounded-sm border border-primary-darkblue-hover bg-primary-darkblue-hover px-4 py-2 text-neutral-white-50">
          인증코드 확인
        </button>
      </div>
      {/* 비밀번호 Input */}
      <div className="mt-2 flex flex-col">
        <label htmlFor="password" className="relative mb-2 ">
          <input
            type={passwordVisibility ? 'text' : 'password'}
            placeholder="비밀번호 입력"
            aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
            {...register('password', {
              required: true,
              pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20}).*$/,
              minLength: {
                value: 8,
                message: '최소 8자 입니다.',
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

        <label htmlFor="passwordConfirm" className="relative mb-2 ">
          <input
            type={confirmPasswordVisibility ? 'text' : 'password'}
            placeholder="비밀번호 확인"
            className="w-full rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 px-4 py-3 text-neutral-white-50 focus:border-blue-500 focus:ring-blue-500"
          />
          <Image
            onClick={toggleConfirmPasswordVisibility}
            src={confirmPasswordVisibility ? '/icons/eye.svg' : '/icons/eyeOff.svg'}
            alt="password cover"
            className="absolute bottom-4 right-5 hover:cursor-pointer"
            width={20}
            height={20}
          />
        </label>
      </div>

      {/* 비밀번호 재설정 버튼 */}
      <button
        type="submit"
        disabled={!isValid}
        className={`mt-[15%] w-full rounded-full px-5 py-3 text-center text-[2rem] ${
          isValid ? 'bg-primary-darkblue-hover' : 'bg-neutral-navy-950'
        }
          ${isValid ? 'border-none' : 'border border-neutral-navy-300'}
          ${isValid ? 'text-neutral-white-100' : 'text--neutral-navy-300'}`}
      >
        비밀번호 재설정
      </button>
    </form>
  )
}
