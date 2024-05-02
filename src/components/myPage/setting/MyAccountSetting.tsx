/**
 * 마이페이지-내계정페이지
 */
'use client'
import React, { useState } from 'react'
import AccountDeleteModal from './AccountDelete'
import { useForm } from 'react-hook-form'
import { useGetUserInfo } from '@/hooks/useMyPage'

export default function MyAccountSetting() {
  const { myUser } = useGetUserInfo()
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isDirty, errors, isValid },
  } = useForm()

  // 비밀번호 변경 input Visibility
  const [passwordChangeVisibility, setPasswordChangeVisibility] = useState(false)
  //탈퇴 동의 체크 여부 state
  const [deleteAccepted, setDeleteAccepted] = useState(false)
  //모달창 출력 여부 state
  const [showModal, setShowModal] = useState(false)

  const handlePasswordChangeInputVisibility = () => {
    setPasswordChangeVisibility(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
    setDeleteAccepted(false)
  }

  const onSubmit = () => {
    console.log('')
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-[4rem] mt-[3rem] text-[2.4rem] font-semibold">내 계정</h1>
        <form className="mb-[18%] flex" onSubmit={handleSubmit(onSubmit)}>
          {/* 성, 이름 Input */}
          <div className="flex flex-col">
            <div className="mx-1 mb-1 flex flex-col">
              <h4 className="my-4 text-[1.2rem] ">이름</h4>
              <input
                type="text"
                name="firstName"
                disabled={true}
                placeholder={`${myUser?.firstName}`}
                className="h-[4.2rem] w-[38.8rem] rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div className="mx-1 flex flex-col">
              <h4 className="m-1 my-4 text-[1.2rem] ">성</h4>
              <input
                type="text"
                name="lastName"
                disabled={true}
                placeholder={`${myUser?.lastName}`}
                className="h-[4.2rem] w-[38.8rem] rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div
            className={`mx-[4.5rem] mt-2 ${
              passwordChangeVisibility ? 'h-[29rem]' : 'h-[17.5rem]'
            } border border-transparent-navy-30`}
          ></div>

          {/* 가입한 이메일 주소, 비밀번호 */}
          <div className="mx-1 flex flex-col">
            <h4 className="m-1 my-4 text-[1.2rem] ">가입한 이메일 주소</h4>
            <input
              type="email"
              disabled={true}
              placeholder={`${myUser?.email}`}
              className="mx-1 h-[4.2rem] w-[38.8rem] rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />

            {/* 비밀번호 Input 변경내용 저장버튼*/}
            {passwordChangeVisibility ? (
              <div className="mt-6 flex flex-col">
                <h4 className="m-1 text-[1.2rem] ">비밀번호</h4>
                <input
                  type="password"
                  placeholder="새 비밀번호"
                  aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
                  {...register('password', {
                    required: '비밀번호는 필수입력입니다.',
                    minLength: {
                      value: 8,
                      message: '8자 이상 비밀번호를 입력하세요.',
                    },
                  })}
                  className="m-1 h-[4.2rem] w-[38.8rem] rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
                <input
                  type="password"
                  placeholder="새 비밀번호 확인"
                  aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
                  {...register('passwordConfirm', {
                    pattern: {
                      value:
                        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,20}$/,
                      message:
                        '영문, 숫자, 특수문자를 각 1개 이상 사용하여 8~20자 이내로 작성해주세요.',
                    },
                    minLength: {
                      value: 8,
                      message: '최소 8자 입니다.',
                    },
                  })}
                  className="m-1 h-[4.2rem] w-[38.8rem] rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />

                <button
                  type="submit"
                  disabled={!isValid}
                  className={`bg-transparent mx-1 mt-4 h-[4.2rem] w-[38.8rem] ${
                    isValid ? 'bg-primary-darkblue-hover' : 'bg-neutral-navy-950'
                  }
                    ${
                      isValid ? 'border-none' : 'border border-neutral-navy-300'
                    } rounded-sm border border-gray-600 px-4 py-3 text-center text-sm hover:border-blue-500`}
                >
                  저장하기
                </button>
              </div>
            ) : (
              <div className="mt-[9.3%] flex flex-col">
                <button
                  onClick={handlePasswordChangeInputVisibility}
                  className="bg-transparent m-1 h-[4.2rem] w-[38.8rem] rounded-sm border border-gray-600 px-4 py-3 text-center text-sm hover:border-blue-500"
                >
                  비밀번호 변경하기
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
      <div className="w-full border-b-2 border-transparent-navy-30"></div>

      <div
        className="mt-6 flex"
        onClick={() => {
          setShowModal(true)
        }}
      >
        <p className="dark:text-primary-500 cursor-pointer text-[1rem] text-neutral-navy-300 underline underline-offset-4">
          탈퇴하기
        </p>
      </div>
      <AccountDeleteModal isOpen={showModal} onClose={handleModalClose} />
    </section>
  )
}
