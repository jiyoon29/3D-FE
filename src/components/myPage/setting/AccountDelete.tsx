'use client'
import { WithdrawRequest } from '@/api/interface/myPage'
import { useGetUserInfo, useWithdrawal } from '@/hooks/useMyPage'
import React, { useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

interface AccountDeleteModalProps {
  isOpen: boolean
  onClose: () => void
}

const AccountDeleteModal: React.FC<AccountDeleteModalProps> = ({ isOpen, onClose }) => {
  // 회원 탈퇴 동의하시겠습니까? state
  // const [isAgreed, setIsAgreed] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const { deleteWithdrawal } = useWithdrawal()
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isDirty, errors, isValid },
  } = useForm<WithdrawRequest>()
  const { myUser } = useGetUserInfo()

  //탈퇴하기 맨 아래 노출 수정필요
  if (!myUser?.createdAt) {
    return <div>가입날짜를 가져올 수 없습니다.</div>
  }
  //가입날짜 오늘날짜로 출력됨 수정필요
  const createdAtDate = new Date(myUser.createdAt)
  const year = createdAtDate.getFullYear()
  const month = createdAtDate.getMonth() + 1
  const day = createdAtDate.getDate()

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  if (!isOpen) return null

  const CustomSwal = withReactContent(Swal)

  const onSubmit: SubmitHandler<WithdrawRequest> = (data) => {
    // const onSubmit = (data: WithdrawRequest) => {
    const { message, deleteConfirm } = data
    // setIsAgreed(true)

    deleteWithdrawal({
      message,
      deleteConfirm,
    })
  }

  return (
    // 모달 백그라운드
    <div
      className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-white bg-opacity-30"
      onClick={handleClickOutside}
    >
      {/* 모달 */}
      <section ref={modalRef} className="justify-center rounded-lg bg-black text-[1.4rem]">
        <div className="flex flex-col justify-between p-12">
          <p className="mb-6 flex justify-center">
            {/* 가입날짜 오늘날짜로 출력됨 수정필요 */}
            가입 날짜 :&nbsp;{`${year}년 ${month}월 ${day}일`} &nbsp;&nbsp; 계정 이메일 :&nbsp;
            {`${myUser?.email}`}
          </p>
          {/* 탈퇴사유 입력란 */}
          <div className="mb-6 flex h-[40%] flex-col justify-center">
            <label htmlFor="reason" className="mb-4 flex justify-center text-[2rem]">
              탈퇴 사유를 입력해주세요.
            </label>
            <textarea
              name="reason"
              maxLength={300}
              placeholder="탈퇴 사유 입력하기(최대 300자)(선택)"
              className=" bg-neutral-navy-950 pb-[6.9rem] pl-3 pt-2"
            />
          </div>

          {/* 탈퇴 시, 공지내용 */}
          <div className="mb-6 flex justify-center">
            <p className="text-center">
              회원 탈퇴할 시 해당 계정에 보유한 쿠폰과 내 에셋, 위시리스트, 장바구니 등 회원님과
              관련된 모든 정보가 완전히 삭제되며,
              <br /> 이후 삭제된 정보들은 다시 복구할 수 없다는 점을 기억해 주세요. <br />
              <br />
              그래도 계정을 삭제하려면 &apos;회원탈퇴&apos;를 클릭하세요. <br />
            </p>
          </div>
          <div className="my-6 w-full border-b-2 border-transparent-navy-30"></div>

          <form action="" onSubmit={handleSubmit(onSubmit)}>
            {/* 회원탈퇴 동의 체크박스 */}
            <div className="flex justify-center">
              <input
                id="withdrawal"
                aria-describedby="withdrawal"
                type="checkbox"
                // checked={isAgreed}
                className="rounded mt-[1.8rem] h-7 w-7 border border-neutral-navy-300 accent-neutral-navy-850"
              />
              <div className="my-7 ml-3">
                <label htmlFor="withdrawal">
                  해당 계정에 대한 회원 탈퇴를 계속 진행하시겠습니까?
                </label>
              </div>
            </div>

            {/* 회원 탈퇴, 취소 버튼 */}
            <div className="flex justify-center">
              <div className="mt-8 flex w-[36%]">
                <button
                  type="submit"
                  // onClick={() => onSubmit}
                  // onClick={() => {
                  //   CustomSwal.fire({
                  //     title: '회원탈퇴 후 모든정보가 삭제됩니다.',
                  //     icon: 'error',
                  //     color: '#C7D1DB',
                  //     background: '#171A1D',
                  //     cancelButtonColor: '#737C85',
                  //     confirmButtonColor: '#3399FF',
                  //     confirmButtonText: '확인',
                  //     cancelButtonText: '취소',
                  //     allowOutsideClick: () => !CustomSwal.isLoading(),
                  //   }).then(() => onSubmit)
                  // }}
                  className="mx-2 h-[3.1rem] w-full rounded-full bg-none px-5 py-3 text-center text-sm text-neutral-white-50 dark:border dark:border-primary-darkblue-hover"
                >
                  회원 탈퇴
                </button>
                <button
                  type="reset"
                  onClick={onClose}
                  className="dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mx-2 h-[3.1rem] w-full rounded-full bg-primary-darkblue-hover px-5 py-3 text-center text-sm text-neutral-white-50 focus:outline-none"
                >
                  취소
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default AccountDeleteModal
function deleteWithdrawal(arg0: { message: string; deleteConfirm: boolean }) {
  throw new Error('Function not implemented.')
}
